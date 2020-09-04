const { connection } = require('../db/dbconnector');

function login(req, res) {
    const consulta = `SELECT id, nombre, apellido, email, CONCAT(NOMBRE, " ", APELLIDO) AS nombre_completo FROM USUARIOS WHERE EMAIL = ? AND PASSWD = ?`;
    const filtros = [req.body.email, req.body.passwd];
    connection.query(consulta, filtros, function (err, resultado, campos) {
        if (err) throw err;
        if(resultado[0]) {
            res.status(200).send(resultado[0]);
        } else {
            res.status(401).send('Usuario o contraseña equivocados');
        }        
    });
}

exports.login = login;