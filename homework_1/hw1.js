const fs = require('fs');
const path = require('path');

const transferItemDir = (directory2000, directory1800) => {
    fs.mkdir(
        path.join(__dirname, 'inconstantDir'),
        err => {
            console.log(err)
        });

    fs.readdir(path.join(__dirname, directory2000),
        (err, files) => {
            files.forEach(student => {
                fs.rename(
                    path.join(__dirname,directory2000 , student),
                    path.join(__dirname, 'inconstantDir', student),
                    err => {
                        console.log(err)
                    })
            })
        });

    fs.readdir(path.join(__dirname, directory1800),
        (err, files) => {
            files.forEach(student => {
                fs.rename(
                    path.join(__dirname, directory1800, student),
                    path.join(__dirname, directory2000, student),
                    err => {
                        console.log(err)
                    })
            })
        });

    fs.readdir(path.join(__dirname, 'inconstantDir'),
        (err, files) => {
            files.forEach(student => {
                fs.rename(
                    path.join(__dirname, 'inconstantDir', student),
                    path.join(__dirname, directory1800, student),
                    err => {
                        console.log(err)
                    });
            });
        });

    fs.rmdir(path.join(__dirname, 'inconstantDir'), err => {
        console.log(err)
    })
};

module.exports = transferItemDir;
