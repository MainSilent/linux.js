const fs = require('fs')
const { execSync } = require("child_process")
const { name, AppImage } = require(`${process.cwd()}/package.json`)

// first check the requirements
const stdout = execSync('./reqs.sh')
console.log(stdout.toString());

// check package.json data
if (!name) {
    console.log("Please specify a name in package.json")
    process.exit()
}
else if (!AppImage) {
    console.log("Please specify the AppImage path in package.json")
    process.exit()
}

// check if the AppImage file exists
if (!fs.existsSync(AppImage) && !fs.existsSync(`filesystem/chroot/root/${AppImage.split('/')[0]}`)) {
    console.log("AppImage file could not be found")
    process.exit()
}
else if (fs.existsSync(`filesystem/chroot/root/${AppImage.split('/')[0]}`)) {
    console.log("Using the AppImage file in the root directory")
}

// start making
