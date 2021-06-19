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
		userModel.getAllProduct(function(results){
			res.render('admin/index', {userlist: results});
		});
	}else{
		res.redirect('/logout');
	}
});
router.get('/back', function(req, res){
		res.redirect('/admin');
});
router.get('/confirm', function(req, res){
		res.render('admin/confirm');
});
router.get('/account', function(req, res){
	if(req.cookies['type'] == 'admin'){
		res.redirect('/home');
	}
	else{
		res.redirect('/customer');
	}
});
router.get('/storage', function(req, res){
	userModel.getCategry('storage', function(results){
		if(results.length > 0){
			res.render('admin/product', {userlist: results});
		}else{
			res.send('Not Available!');
		}
	});
})
router.get('/monitor', function(req, res){
	userModel.getCategry('monitor', function(results){
		if(results.length > 0){
			res.render('admin/product', {userlist: results});
		}else{
			res.send('Not Available!');
		}
	});
})
router.get('/ram', function(req, res){
	userModel.getCategry('ram', function(results){
		if(results.length > 0){
			res.render('admin/product', {userlist: results});
		}else{
			res.send('Not Available!');
		}
	});
})
router.get('/graphics', function(req, res){
	userModel.getCategry('graphics', function(results){
		if(results.length > 0){
			res.render('admin/product', {userlist: results});
		}else{
			res.send('Not Available!');
		}
	});
})
router.get('/subProducts/:subCategory', function(req, res){
	userModel.getSubCategry(req.params.subCategory, function(results){
		if(results.length > 0){
			res.render('admin/product', {userlist: results});
		}else{
			res.send('Not Available!');
		}
	});
})
router.get('/addToCart/:Pid', function(req, res){
	var user ={
			Pid: req.params.Pid,
			username: req.cookies['username']
		};
		userModel.addToCart(user, function(status){
			if(status)
			{
				res.redirect('/admin');
			}else{
				res.redirect('/login');
			}
		});
})
router.get('/cart', function(req, res){
	userModel.getCart(req.cookies['username'], function(results){
		if(results.length > 0){
			res.render('admin/cart', {userlist: results});
		}else{
			res.send('Not Available!');
		}
	});
})
module.exports = router;