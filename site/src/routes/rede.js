var express = require("express");
var router = express.Router();

var redeController = require("../controllers/redeController");

router.post("/BuscarDados_latencia", function (req, res) {
    redeController.BuscarDados_latencia(req, res);
})

router.post("/BuscarDados_Pacotes_Recebidos", function (req, res) {
    redeController.BuscarDados_Pacotes_Recebidos(req, res);
})

router.post("/BuscarDados_Pacotes_Enviados", function (req, res) {
    redeController.BuscarDados_Pacotes_Enviados(req, res);
})

router.post("/Buscar_IPV4", function (req, res) {
    redeController.Buscar_IPV4(req, res);
})

router.post("/Buscar_IP_publico", function (req, res) {
    redeController.Buscar_IP_publico(req, res);
})


module.exports = router;