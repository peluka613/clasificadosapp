const { connection } = require('../db/dbconnector');

function retrieveCategories() {
  const consulta = `SELECT NOMBRE, ID FROM CATEGORIAS`;
  return new Promise(function(resolve, reject) {
        connection.query(consulta, function(err, resultado, campos) {
          if (err) reject(err);
          resolve(resultado);
        });
    });
}

exports.retrieveCategories = retrieveCategories;
