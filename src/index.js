var path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');

const app = express();
const port = 3000;

//set static link
app.use(express.static(path.join(__dirname, 'public')));

//Template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

//HTTP Logger
app.use(morgan('combined'));
app.set('views', path.join(__dirname, 'resources/views'));

//Routes
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/news', function (req, res) {
    res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})