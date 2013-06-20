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

cd "$top/sagem/sagem_build"
make
./build_image.sh "$rootfs" "$top/sagem/kernel.lzma.cfe" "$top/firmware.bin"
cd "$top"
if [ -x "$top/site.sh" ]; then
	"$top/site.sh"
fi
