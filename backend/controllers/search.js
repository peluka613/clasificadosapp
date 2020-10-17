const { search } = require('../services/productsService');

function findRecent(req, res) {
    const items = parseInt(req.params.items);
    search(items).then(function(clasificados) {
        res.status(200).send(clasificados);
    }).catch(function(err) {
        res.status(500).send({error: "Ha ocurrido un error inesperado"});
    });
}

exports.findRecent = findRecent;