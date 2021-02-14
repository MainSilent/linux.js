if [ -e package.json ]; then
    # check for filesystem
    if [ ! -d filesystem ]; then
        echo -n "Press enter to download the filesystem: "
        read
        wget "https://github.com/MainSilent/linux.js/releases/download/v1.1.0/filesystem.squashfs"
        unsquashfs -d filesystem filesystem.squashfs
        rm -f filesystem.squashfs
    else
        echo "filesystem exists"
    fi
else
    echo "package.json could not be found"
fi