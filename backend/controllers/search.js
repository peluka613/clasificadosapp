const { searchMyPublications, searchLatestPublications, searchByCityAndCategory, searchById } = require('../services/productsService');

function findLatestPublications(req, res) {
    const items = parseInt(req.params.items);

    searchLatestPublications(items).then(function(clasificados) {
        res.status(200).send(clasificados);
    }).catch(function(err) {
        res.status(500).send({error: "Ha ocurrido un error inesperado"});
    });
}

function findMyPublications(req, res) {
    const userId = parseInt(req.params.userId);

    searchMyPublications(userId).then(function(clasificados) {
        res.status(200).send(clasificados);
    }).catch(function(err) {
        res.status(500).send({error: "Ha ocurrido un error inesperado"});
    });
}

function findByCityAndCategory(req, res) {
    const cityId = parseInt(req.params.cityId);
    const categoryId = parseInt(req.params.categoryId);

    searchByCityAndCategory(cityId, categoryId).then(function(clasificados) {
        res.status(200).send(clasificados);
    }).catch(function(err) {
        res.status(500).send({error: "Ha ocurrido un error inesperado", err});
    });
}

function findById(req, res) {
    const publicationId = parseInt(req.params.publicationId);

    searchById(publicationId).then(function(clasificados) {
        res.status(200).send(clasificados);
    }).catch(function(err) {
        res.status(500).send({error: "Ha ocurrido un error inesperado", err});
    });
}

exports.findLatestPublications = findLatestPublications;
exports.findMyPublications = findMyPublications;
exports.findByCityAndCategory = findByCityAndCategory;
exports.findById = findById;
