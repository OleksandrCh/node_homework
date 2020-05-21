const fs = require('fs');
const path = require('path');
const express = require('express');
const exprsBars = require('express-handlebars');

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', exprsBars({extname: '.hbs', defaultLayout: false}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

let users = [
    {email: 'qwerty@qwerty.com', password: '0123456789', age: 30}
];


app.get('/', (req, res) => {
    res.render('main')
});

app.get('/registration', (req, res) => {
    res.render('registration')
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.get('/users', (req, res) => {
    res.render('users', {users})
});

app.post('/reg', (req, res) => {
    let userAvailability = users.some(({email, password}) => req.body.email === email && req.body.password === password);
    if (userAvailability) {
        res.render('login',{message: 'Вы уже зарегистрированы, введите ваши данные!'});
    } else {
        users.push({...req.body});
        res.render('main',{message: 'Добрый день, новый пользователь!'});
    }
});

app.post('/log', (req, res) => {
    let userAvailability = users.some(({email, password}) => req.body.email === email && req.body.password === password);
    console.log(userAvailability)
    if (userAvailability) {
        res.render('main', {message: `Привет ${req.body.email}!`});
    } else {
        res.render('registration', {message: `Тебе нужно зарегистрироваться!!!`});
    }
});

app.listen(5000, err => {
    err ? console.log(err) : console.log('Listen port 5000')
});
