const { connection } = require('../db/dbconnector');

function searchLatestPublications(items) {
    const consulta = `SELECT ID, NOMBRE, DESCRIPCION, FOTO, FACEBOOK, INSTAGRAM, TWITTER, DIRECCION, CELULAR, CATEGORIA, TIPO_CLASIFICADO, MUNICIPIO, USUARIO, FECHA_CREACION FROM CLASIFICADOS ORDER BY FECHA_CREACION DESC LIMIT ?`;

    return new Promise(function(resolve, reject) {
        connection.query(consulta, items, function(err, resultado, campos) {
          if (err) reject(err);
          resolve(resultado);
        });
    });
}

function searchMyPublications(userId) {
  const consulta = `SELECT ID, NOMBRE, DESCRIPCION, FOTO, FACEBOOK, INSTAGRAM, TWITTER, DIRECCION, CELULAR, CATEGORIA, TIPO_CLASIFICADO, MUNICIPIO, USUARIO, FECHA_CREACION FROM CLASIFICADOS WHERE USUARIO = ? ORDER BY FECHA_CREACION DESC`;

  return new Promise(function(resolve, reject) {
      connection.query(consulta, userId, function(err, resultado, campos) {
        if (err) reject(err);
        resolve(resultado);
      });
  });
}

function searchByCityAndCategory(cityId, categoryId) {
  const consulta = `SELECT ID, NOMBRE, DESCRIPCION, FOTO, FACEBOOK, INSTAGRAM, TWITTER, DIRECCION, CELULAR, CATEGORIA, TIPO_CLASIFICADO, MUNICIPIO, USUARIO, FECHA_CREACION FROM CLASIFICADOS WHERE MUNICIPIO = ? AND CATEGORIA = ? ORDER BY FECHA_CREACION DESC`;

  return new Promise(function(resolve, reject) {
      connection.query(consulta, [cityId, categoryId], function(err, resultado, campos) {
        if (err) reject(err);
        resolve(resultado);
      });
  });
}

function searchById(publicationId) {
  const consulta = `SELECT ID, NOMBRE, DESCRIPCION, FOTO, FACEBOOK, INSTAGRAM, TWITTER, DIRECCION, CELULAR, CATEGORIA, TIPO_CLASIFICADO, MUNICIPIO, USUARIO, FECHA_CREACION FROM CLASIFICADOS WHERE ID = ?`;

  return new Promise(function(resolve, reject) {
      connection.query(consulta, publicationId, function(err, resultado, campos) {
        if (err) reject(err);
        resolve(resultado);
      });
  });
}

function savePublication(body) {
  const consulta = `INSERT INTO CLASIFICADOS SET ?`;

  return new Promise(function(resolve, reject) {
      connection.query(consulta, body, function(err, resultado, campos) {
        if (err) reject(err);
        resolve(resultado);
      });
  });
}

exports.searchLatestPublications = searchLatestPublications;
exports.searchMyPublications = searchMyPublications;
exports.searchByCityAndCategory = searchByCityAndCategory;
exports.searchById = searchById;
exports.savePublication = savePublication;
