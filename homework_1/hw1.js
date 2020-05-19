const fs = require('fs');
const path = require('path');

const transferItemDir = (directory2000, directory1800) => {
    moveFile(directory2000, directory1800);
    moveFile(directory1800, directory2000);
};

const moveFile = (from, to) => {
    fs.readdir(path.join(__dirname, from),
        (err, files) => {
            if (err) {
                if (err) console.log('readdir ', err)
            }
            files.forEach(student => {
                fs.rename(
                    path.join(__dirname, from, student),
                    path.join(__dirname, to, student),
                    err => {
                        if (err) console.log('removeFile ', err)
                    })
            })
        });
};

module.exports = transferItemDir;
