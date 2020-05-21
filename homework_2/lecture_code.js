const fs = require('fs');
const path = require('path');
const express = require('express');
const exprsBars = require('express-handlebars');


// let writeStream = fs.createWriteStream('./dataFile2.txt');
// writeStream.write('*1234567890*\n');
//
// let readStream = fs.createReadStream('./dataFile.txt');
// readStream.on('data', chunk => {
//     console.log(chunk.toString())
// });
//
// readStream.pipe(writeStream);


const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', exprsBars({extname: '.hbs', defaultLayout: false}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

app.get('/', (req, res) => {
res.render('main');
});

app.get('/hello', (req, res) => {
res.end('hello world')
});

app.listen(5000, err => {
    err ? console.log(err) : console.log('Listen port 5000')
} );
