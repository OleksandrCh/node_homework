// const fs = require('fs');
// const path = require('path');
//
// const transferItemDir = (directory2000, directory1800) => {
//     moveFile(directory2000, directory1800);
//     moveFile(directory1800, directory2000);
// };
//
// const moveFile = (from, to) => {
//     fs.readdir(path.join(__dirname, from),
//         (err, files) => {
//             if (err) {
//                 if (err) console.log('readdir ', err)
//             }
//             files.forEach(student => {
//                 fs.rename(
//                     path.join(__dirname, from, student),
//                     path.join(__dirname, to, student),
//                     err => {
//                         if (err) console.log('removeFile ', err)
//                     })
//             })
//         });
// };
//
// module.exports = transferItemDir;

const fs = require('fs').promises;
const path = require('path');

async function transferItemDir (directory2000, directory1800) {
    const inconstantDir = path.join(__dirname, 'inconstantDir');
    const directory20_00 = path.join(__dirname, directory2000);
    const directory18_00 = path.join(__dirname, directory1800);

    await fs.mkdir(inconstantDir, err => {
        if (err) {console.log(err)}
    });

    await moveFile(directory20_00, inconstantDir);
    await moveFile(directory18_00, directory20_00);
    await moveFile(inconstantDir, directory18_00);

    await fs.rmdir(inconstantDir, err => {
        if (err) {console.log(err)}
    })
}

async function moveFile (from, to) {
    let files = await fs.readdir(from);
    for(let student of files){
        await fs.rename(path.join(from, student), path.join(to, student))
    }

}



module.exports = transferItemDir;
