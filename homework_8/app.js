const express = require('express');
// const exprsBars = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
require('dotenv').config();

const db = require('./dataBase').getInstance();
db.setModels();

const {PORT} = require('./config');
const app = express();

app.use(fileUpload({}));
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// app.engine('.hbs', exprsBars({
//     defaultLayout: false,
//     extname: '.hbs'
// }));
//
// app.set('view engine', '.hbs');
// app.set('views', path.join(__dirname, 'views'));

const {productRouter, userRouter, authRouter} = require('./routes');

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/auth', authRouter);

app.use('*', (err, req, res, next) => {
    res
        .status(err.status || 400)
        .json({
            message: err.message,
            code: err.customCode
        })
});

app.listen(PORT || 4444, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Listen ${PORT || 4444}...`);
    }
});

process.on("unhandledRejection", reason => {
    console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-');
    console.log(reason);
    console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-');
});
