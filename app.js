//declaration
var express 		= require('express');
var bodyParser 		= require('body-parser');
var ejs 			= require('ejs');
var exSession 		= require('express-session');
var cookieParser 	= require('cookie-parser');
var login 			= require('./controllers/login');
var logout 			= require('./controllers/logout');
var registration 	= require('./controllers/registration');
var home 			= require('./controllers/home');
var admin 			= require('./controllers/admin');
var customer 		= require('./controllers/customer');

var app = express();

app.set('view engine', 'ejs');



app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my top secret value', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.use('/login', login);
app.use('/registration', registration);
app.use('/logout', logout);
app.use('/home', home);
app.use('/admin', admin);
app.use('/customer', customer);



app.get('/', function(req, res){
	res.render('index');
});


app.listen(3000, function(){
	console.log('server started at 3000!');
});
