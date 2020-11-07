const { login } = require('../services/usersService');

function auth(req, res) {
    login(req.body.email, req.body.passwd).then(function(clasificados) {
        if(clasificados.length == 0) {
            res.status(401).send({error: "Usuario o password equivocado"});
        } else {
            res.status(200).send(clasificados[0]);
        }
    }).catch(function(err) {
        res.status(500).send({error: "Ha ocurrido un error inesperado"});
    });
}

exports.auth = auth;
