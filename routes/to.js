const router = require('express').Router();
// db
const db = require('../db');

let result = 'hui';

router.get('/', (req, res) => {
    res.render('to', {
        data: result
    });
});

module.exports = router;