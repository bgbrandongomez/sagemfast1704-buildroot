#!/bin/sh

top="`pwd`"
makedevs="$top/output/host/usr/bin/makedevs"
devtable="$top/system/device_table_dev.txt"
rootfs="$top/output/target"
for file in "$rootfs/dev"/**/*; do
	if [ -L "$file" ] || [ -d "$file" ]; then
		echo "skipping $file"
		continue
	fi
	rm -v "$file"
done
sleep 1
echo "creating fake device nodes"
"$makedevs" -d "$devtable" "$rootfs"

rm "$rootfs/THIS_IS_NOT_YOUR_ROOT_FILESYSTEM"
rm -rf "$rootfs/home"
rm -rf "$rootfs/var/*"
# rm "$rootfs/linuxrc"
# rm "$rootfs/sbin/init"
if [ -r "$top/authorized_keys" ]; then
	mkdir "$rootfs/.ssh"
	cp "$top/authorized_keys" "$rootfs/.ssh/authorized_keys"
	chmod -R 600 "$rootfs/.ssh"
fi

if [ -r "$top/sshkey" ]; then
	mkdir "$rootfs/etc/dropbear"
	cp "$top/sshkey" "$rootfs/etc/dropbear/dropbear_rsa_host_key"
	chmod -R 600 "$rootfs/etc/dropbear"
fi

cd "$top/sagem/sagem_build"
make
./build_image.sh "$rootfs" "$top/sagem/kernel.lzma.cfe" "$top/firmware.bin"
cd "$top"
if [ -x "$top/site.sh" ]; then
	"$top/site.sh"
fi
