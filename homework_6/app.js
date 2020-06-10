const express = require('express');
const exprsBars = require('express-handlebars');
const path = require('path');
require('dotenv').config();
const db = require('./dataBase').getInstance();
db.setModels();

const app = express();

app.use(express.json());
app.use(express.urlencoded());

// app.use(express.static(path.join(__dirname, 'views')));
//
// app.engine('.hbs', exprsBars({
//     defaultLayout: false,
//     extname: '.hbs'
// }));
//
// app.set('view engine', '.hbs');
// app.set('views', path.join(__dirname, 'views'));

const {productRouter, userRouter, authRouter} = require('./routes');

// app.get('/register', (req, res) => {
//     res.render('register')
// });
//
// app.get('/login', (req, res) => {
//     res.render('login')
// });
// app.post('/mysql', (req, res) => {
//     connection.query(`INSERT INTO users (name, email, password) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.password}')`);
//     connection.query(`SELECT * FROM users`, (err, results) => {
//         res.json({results});
//     })
// });

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

app.listen(process.env.PORT || 4444, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Listen ${process.env.PORT || 4444}...`);
    }
});

process.on("unhandledRejection", reason => {
    console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-');
    console.log(reason);
    console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-');
});
