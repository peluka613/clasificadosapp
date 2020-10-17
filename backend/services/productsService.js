const { connection } = require('../db/dbconnector');

function search(items) {
    const consulta = `SELECT ID, NOMBRE, DESCRIPCION, FOTO, FACEBOOK, INSTAGRAM, TWITTER, DIRECCION, CELULAR, CATEGORIA, TIPO_CLASIFICADO, MUNICIPIO, USUARIO, FECHA_CREACION FROM clasificados ORDER BY FECHA_CREACION DESC LIMIT ?`;

    return new Promise(function(resolve, reject) {
        connection.query(consulta, items, function(err, resultado, campos) {
          if (err) reject(err);
          resolve(resultado);
        });
    });   
}

exports.search = search;