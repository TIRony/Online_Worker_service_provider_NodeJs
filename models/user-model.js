var db = require('./db');

module.exports ={
	getById: function(id, callback){
		var sql = "select * from users where id=?";
		db.getResult(sql, [id], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getByUname: function(uname, callback){
		var sql = "select * from users where userName=?";
		db.getResult(sql, [uname], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getMyInfo: function(uname, callback){
		var sql = "select * from users where userName=?";
		db.getResult(sql, [uname], function(result){
			if(result.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	getID: function(uname, callback){
		var sql = "select id from users where userName=?";
		db.getResult(sql, [uname], function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback(null);
			}
		});
	},
	getAllProduct:function(callback){
		var sql = "select * from product order by Pid DESC";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	getCategry: function(category, callback){
		var sql = "select * from product where category=?";
		db.getResult(sql, [category], function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	getSubCategry: function(category, callback){
		var sql = "select * from product where subCategory=?";
		db.getResult(sql, [category], function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	addToCart: function(user, callback){
		var sql = "insert into cart values(?,?,?)";
		db.execute(sql, [null, user.Pid, user.username], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	validate: function(user, callback){
		var sql = "select * from users where userName=? and password=?";
		db.getResult(sql, [user.username, user.password], function(result){
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getAll:function(callback){
		var sql = "select * from users";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	getCart:function(user, callback){
		var sql = "SELECT cart.Pid, product.category, product.subCategory, product.type, product.brand, product.review, product.price FROM product INNER JOIN cart ON cart.Pid = product.Pid WHERE cart.id=?";
		db.getResult(sql, [user], function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	insert: function(user, callback){
		var sql = "insert into users values(?,?,?,?,?)";
		db.execute(sql, [null, user.username, user.password, user.type, user.name], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(id, callback){
		var sql = "delete from users where id=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	update: function(user, callback){
		var sql = "update users set userName=?, password=?, type=?, name=? where id=?";
		db.execute(sql, [user.username, user.password, user.type, user.firstname, user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}