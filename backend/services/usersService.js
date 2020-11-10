const { connection } = require('../db/dbconnector');

function login(email, passwd) {
  const consulta = `SELECT id, nombre, apellido, email, CONCAT(NOMBRE, " ", APELLIDO) AS nombre_completo FROM USUARIOS WHERE EMAIL = ? AND PASSWD = ?`;
  const filtros = [email, passwd];
  return new Promise(function(resolve, reject) {
        connection.query(consulta, filtros, function(err, resultado, campos) {
          if (err) reject(err);
          resolve(resultado);
        });
    });
}

exports.login = login;
