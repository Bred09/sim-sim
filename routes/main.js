const router = require('express').Router();
// db
const db = require('../db');

router.get('', (req, res) => {
	let sql = `SELECT * FROM b_user`;
	db.query(sql, (err, result) => {
		if (err) throw err;
		res.render('main', {
			data: result
		});
	});
});

module.exports = router;