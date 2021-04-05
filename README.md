# linux.js

linux.js is a Nodejs library to make a debian based linux distro for your electron project.

## Installation

First make sure you have these programs installed:

```
build-essential
wget
squashfs-tools
mkisofs
```

Then install the linux.js library and run `npx reqs` to get the required filesystem:

```bash
npm i @mainsilent/linux.js --save-dev
npx reqs
```

If you have problems with downloading the filesystem, you can download it from `Releases` then place the `filesystem.squashfs` in the root directory of your project and use the command below to extract the filesystem:

```bash
unsquashfs -d filesystem filesystem.squashfs
```

You can also delete the `filesystem.squashfs` after decompressing.

## Usage

Specify the AppImage path in package.json, for example `"AppImage": "dist/test.AppImage"`.

Then run the command below to make the ISO file (it will be located in filesystem directory):

```bash
npx linuxjs
```

You can edit the `Makefile` in filesystem directory to change the behaviour of `npx linuxjs`, for example put the ISO file in the root directory of your project.

## Chroot

To install new programs for your linux distro, change the directory to `filesystem` and use chroot command to change the root directory:

```bash
sudo chroot ./chroot
apt install whatever
exit
```

## Donate
`BTC:` 1JBKewHbLMcECaWg23o1TXpvpzUyDJmFGE
