const fs = require('fs');
const path = require('path');

const transferItemDir = (directory2000, directory1800) => {
    const inconstantDir = 'inconstantDir';
    makeDir(inconstantDir);

    removeFile(directory2000, inconstantDir);
    removeFile(directory1800, directory2000);
    removeFile(inconstantDir, directory1800);

    removeDir(inconstantDir)
};

const removeDir = (name) => {
    fs.rmdir(path.join(__dirname, name), err => {
        console.log(err)
    })
};

const makeDir = (name) => {
    fs.mkdir(
        path.join(__dirname, name),
        err => {
            console.log(err)
        });
};

const removeFile = (from, to) => {
    fs.readdir(path.join(__dirname, from),
        (err, files) => {
            if (err) {
                console.log(err);
                return
            }
            files.forEach(student => {
                fs.rename(
                    path.join(__dirname, from, student),
                    path.join(__dirname, to, student),
                    err => {
                        console.log(err)
                    })
            })
        });
};

module.exports = transferItemDir;
