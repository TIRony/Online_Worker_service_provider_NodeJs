var express 	= require('express');
var router 		= express.Router();
var userModel   = require.main.require('./models/user-model');

router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', function(req, res){	
	if(req.cookies['username'] != null){
		userModel.getByUname(req.cookies['username'], function(result){
			res.render('Customer/index', {user: result});
		});
	}else{
		res.redirect('/logout');
	}
});
router.get('/alluser', function(req, res){
	if(req.cookies['username'] != null){
		userModel.getByUname(req.cookies['username'], function(result){
			res.render('Customer/alluser', {user: result});
		});
	}else{
		res.redirect('/logout');
	}
})
router.get('/back', function(req, res){
		res.redirect('/customer');
});
router.get('/edit/:id', function(req, res){
	
	userModel.getById(req.params.id, function(result){
		res.render('Customer/edit', {user: result});
	});
})

router.post('/edit/:id', function(req, res){
	
	var user = {
		username: req.body.username,
		password: req.body.password,
		type: req.body.type,
		id: req.params.id
	};

	userModel.update(user, function(status){
		if(status){
			res.redirect('/Customer/alluser');
		}else{
			res.redirect('/Customer/edit/'+req.params.id);
		}
	});
})

module.exports = router;

