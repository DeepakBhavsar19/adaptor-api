const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const { cors, errorHandler } = require('./middleware');

const indexRouter = require('./src/index');

const app = express();

app.use(helmet());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());

cors(app);

// csrf(app);
// app.all('*', (req, res, next) => {
//   res.cookie('XSRF-TOKEN', req.csrfToken(), {
//     domain: `.${process.env.DOMAIN_HOST}`,
//     httpOnly: false,
//     secure: false,
//     sameSite: 'lax',
//   });
//   next();
// });

// set static path
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routes files define

app.use('/', indexRouter);

errorHandler(app);
module.exports = app;
