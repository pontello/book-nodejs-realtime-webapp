const path           = require('path')
const express        = require('express');
const consign        = require('consign');
const expressSession = require('express-session');
const bodyParser     = require('body-parser')
const cookieParser   = require('cookie-parser');
const methodOverride = require('method-override');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser('ntalk'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));


consign()
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app);


app.listen(3000, () => {
    console.log('Ntalk running...');
});
