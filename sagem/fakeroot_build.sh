#!/bin/sh

top="`pwd`"
fakeroot="$top/output/host/usr/bin/fakeroot"

$fakeroot -- "$top/sagem/build.sh"
