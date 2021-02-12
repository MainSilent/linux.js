if [ -e package.json ]; then
    # check for required programs
    if ! command -v wget &> /dev/null; then
        echo "wget could not be found"
        exit
    fi

    if ! command -v mksquashfs &> /dev/null; then
        echo "mksquashfs could not be found"
        exit
    fi

    if ! command -v unsquashfs &> /dev/null; then
        echo "unsquashfs could not be found"
        exit
    fi

    if ! command -v mkisofs &> /dev/null; then
        echo "mkisofs could not be found"
        exit
    fi

    # check for filesystem
    if [ ! -d filesystem ]; then
        echo -n "Press enter to download the filesystem ~280MB: "
        read
        wget "https://github.com/MainSilent/linux.js/releases/download/1.0.0/filesystem.squashfs"
        unsquashfs -d filesystem filesystem.squashfs
        rm -f filesystem.squashfs
        ./reqs.sh
    elif [ ! -e filesystem/Makefile -o ! -e filesystem/grub.sh -o ! -d filesystem/iso -o ! -d filesystem/chroot ]; then
        echo "filesystem corrupted!"
    fi
else
    echo "package.json could not be found"
fi