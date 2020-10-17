let express = require('express');
let router = express.Router();
let { auth } = require('../controllers/login');
let { findRecent } = require('../controllers/search');

router.get('/health', (req, res, next) => {
    res.send('Running');
})

router.post('/auth', auth);

router.get('/search/:items', findRecent);


exports.router = router;