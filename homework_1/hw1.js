const fs = require('fs');
const path = require('path');

const transferItemDir = (directory2000, directory1800) => {
    const inconstantDir = 'inconstantDir';
    const arr = [[directory2000, inconstantDir], [directory1800, directory2000], [inconstantDir, directory1800]];

    // arr.forEach(itemArr => {
    //         const [from, to] = itemArr;
    //     console.log('----------');
    //     console.log(from, to);
    //     console.log('----------');
    //        removeFile(from, to);
    // });
    makeDir(inconstantDir)
        .then(()=>{
            moveFile(directory2000, inconstantDir)
        })
        .then(() => {
            moveFile(directory1800, directory2000)
        })
        .then(() => {
            moveFile(inconstantDir, directory1800)
        })
        .then(()=>{
            removeDir(inconstantDir)
        })



};

const removeDir = (name) => {
    fs.rmdir(path.join(__dirname, name), err => {
        if (err) console.log('removeDir ',err)
    })
};

const makeDir = async (name) => {
    fs.mkdir(
        path.join(__dirname, name),
        err => {
            if (err) console.log('makeDir ',err)
        });
};

const moveFile = (from, to) => {
    fs.readdir(path.join(__dirname, from),
        (err, files) => {
            if (err) {
                if (err) console.log('readdir ',err)
            }
            files.forEach(student => {
                console.log(student)
                fs.rename(
                    path.join(__dirname, from, student),
                    path.join(__dirname, to, student),
                    err => {
                        if (err) console.log('removeFile ',err)
                    })
            })
        });
};

module.exports = transferItemDir;
