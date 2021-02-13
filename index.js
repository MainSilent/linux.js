#!/usr/bin/env node 
const fs = require('fs')

if (!fs.existsSync(`${process.cwd()}/package.json`)) {
    console.log("package.json could not be found")
    process.exit()
}

// filesystem
if (!fs.existsSync('filesystem')) {
    console.log("filesystem could not be found")
    process.exit()
}
else if (!fs.existsSync('filesystem/Makefile') || !fs.existsSync('filesystem/grub.sh') ||
!fs.existsSync('filesystem/iso') || !fs.existsSync('filesystem/chroot')) {
    console.log("filesystem corrupted!")
    process.exit()
}

// package.json data
const { name, AppImage } = require(`${process.cwd()}/package.json`)

if (!name) {
    console.log("Please specify a name in package.json")
    process.exit()
}
else if (!AppImage) {
    console.log("Please specify the AppImage path in package.json")
    process.exit()
}

// AppImage file 
if (!fs.existsSync(AppImage) && !fs.existsSync(`filesystem/chroot/root/${AppImage.split('/').pop()}`)) {
    console.log("AppImage file could not be found")
    process.exit()
}
else if (fs.existsSync(`filesystem/chroot/root/${AppImage.split('/').pop()}`)) {
    console.log("Using the AppImage file in the root directory")
}

// make
