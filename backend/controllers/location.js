const { retrieveLocations } = require('../services/locationsService');

function getLocations(req, res) {
    retrieveLocations().then(function(locations) {
        if(locations.length == 0) {
            res.status(404).send({error: "No hay ubicaciones"});
        } else {
            res.status(200).send(locations);
        }
    }).catch(function(err) {
        res.status(500).send({error: "Ha ocurrido un error inesperado"});
    });
}

exports.getLocations = getLocations;
