var express 	= require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){
		
		var user ={
			username: req.body.uname,
			password: req.body.password,
			type:     req.body.type
		};

		userModel.validate(user, function(status){
			if(status){
				res.cookie('username', req.body.uname);
				res.cookie('type', req.body.type); 
				res.redirect('/admin');
			}else{
				res.redirect('/login');
			}
		});
});

module.exports = router;

