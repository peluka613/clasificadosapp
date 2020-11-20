const { savePublication } = require("../services/productsService");

function createPublication(req, res) {
  savePublication(req.body)
    .then(function () {
      res
        .status(200)
        .send({ message: "Servicio o producto agregado correctamente" });
    })
    .catch(function (err) {
      res.status(500).send({ error: "Ha ocurrido un error inesperado" });
    });
}

exports.createPublication = createPublication;
