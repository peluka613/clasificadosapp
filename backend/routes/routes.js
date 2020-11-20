let express = require('express');
let router = express.Router();

let { auth } = require('../controllers/login');
let { findLatestPublications, findMyPublications, findByCityAndCategory, findById } = require('../controllers/search');
let { getCategories } = require('../controllers/category');
let { getLocations } = require('../controllers/location');
let { createPublication } = require('../controllers/publication');


router.get('/health', (req, res, next) => {
    res.send('Running');
})

router.post('/auth', auth);
router.get('/search/me/:userId', findMyPublications);
router.get('/search/latest/:items', findLatestPublications);
router.get('/search/filter/:cityId/:categoryId', findByCityAndCategory);
router.get('/search/:publicationId', findById);
router.get('/categories/', getCategories);
router.get('/locations/', getLocations);
router.post('/services/', createPublication);

exports.router = router;
