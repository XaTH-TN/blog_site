var path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
var methodOverride = require('method-override');

const app = express();
const port = 3000;
const db = require('./config/db');

const route = require('./routers');

//Connect db
db.connect();

//set static link
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: function (a, b) {
                return a + b;
            },
        },
    }),
);
app.set('view engine', 'hbs');

//HTTP Logger
app.use(morgan('combined'));
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
