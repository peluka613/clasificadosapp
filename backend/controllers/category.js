const { retrieveCategories } = require('../services/categoriesService');

function getCategories(req, res) {
    retrieveCategories().then(function(categories) {
        if(categories.length == 0) {
            res.status(404).send({error: "No hay categorías"});
        } else {
            res.status(200).send(categories);
        }
    }).catch(function(err) {
        res.status(500).send({error: "Ha ocurrido un error inesperado"});
    });
}

exports.getCategories = getCategories;
