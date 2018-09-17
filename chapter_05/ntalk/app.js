const path = require('path')
const express = require('express');
const consign = require('consign');
const expressSession = require('express-session');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const error = require('./middleware/error');

// App express load config
const app = express();

// view engine config
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Server config
app.use(cookieParser('ntalk'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// DI controller config
consign()
.include('models')
.then('controllers')
.then('routes')
.into(app);

//Errors handlers config
app.use(error.notFound);
app.use(error.serverError);

// Server port config
app.listen(3000, () => {
    console.log('Ntalk running...');
});
