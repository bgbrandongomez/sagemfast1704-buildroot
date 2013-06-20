#!/bin/sh

if ifconfig br1 > /dev/null 2>&1; then
	# set default gateway using the ip from the br1 interface
	gateway="`ifconfig br1 | grep "inet addr" | awk -F: '{print $2}' |\
		awk '{print $1}' | awk -F. '{print $1 "." $2 "." $3}'`".1
	route add default gw $gateway

	# translate lan ip addresses to the br1 ip address
	/usr/sbin/iptables -t nat -A POSTROUTING -o br1 -j MASQUERADE

	# activate linux ip forwarding
	echo 1 > /proc/sys/net/ipv4/ip_forward
fi

dnsmasq

udhcpd

ntpd -q -p ptbtime1.ptb.de
