const { connection } = require('../db/dbconnector');

function retrieveLocations() {
  const consulta = `SELECT NOMBRE, ID FROM MUNICIPIOS`;
  return new Promise(function(resolve, reject) {
        connection.query(consulta, function(err, resultado, campos) {
          if (err) reject(err);
          resolve(resultado);
        });
    });
}

exports.retrieveLocations = retrieveLocations;
