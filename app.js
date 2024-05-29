require('dotenv').config();
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');





const express = require('express');
const expressLayout = require('express-ejs-layouts');
const methodOverride = require('method-override');


const connectDB = require('./server/config/db');
require('./server/config/passport');

const app = express();
const port = 8080 || process.env.PORT;
connectDB();


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'));



app.use(express.static('public'));


app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
// Add this middleware BELOW passport middleware
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});
//routes
app.use('/', require('./server/routes/index.js'))
//app.use('/', require('./server/routes/aut-Route.js'))
app.use('/', require('./server/routes/customer.js'))
app.use('/', require('./server/routes/agent.js'))

//error page
app.get('*',(req,res)=>{
    res.status(404).render('errorPage');
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});