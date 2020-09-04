let express = require('express');
let router = express.Router();
let {login} = require('../controllers/login');

router.get('/health', (req, res, next) => {
    res.send('Running');
})

router.post('/login', login);



exports.router = router;