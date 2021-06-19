var express 	= require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('/', function(req, res){
	res.render('registration/index');
});

router.post('/', function(req, res){
		
		var user ={
			username: req.body.uname,
			password: req.body.password,
			type: req.body.type,
			name: req.body.name
		};

		userModel.insert(user, function(status){
			if(status)
			{
				res.redirect('/home');
			}else{
				res.redirect('/login');
			}
		});
});

module.exports = router;

