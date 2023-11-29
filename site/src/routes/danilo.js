var express = require("express");
var router = express.Router();

var daniloController = require("../controllers/daniloController");
router.get("/ultimasDISCO/:idServidor", function (req, res) {
    daniloController.buscarUltimasMedidasDISCO2(req, res);
});

router.get("/tempo-realDISCO/:idServidor", function (req, res) {
    daniloController.buscarMedidasEmTempoRealDISCO2(req, res);
})

router.get("/atualizarDISCO/:idServidor", function (req, res) {
    daniloController.atualizarDISCO(req, res);
})

router.get('/obterDISCO/', function(req, res) {
    usuarioController.obterDISCO(req, res)
})

router.get('/obterRAM/', function(req, res) {
    usuarioController.obterRAM(req, res)
})

module.exports = router;