var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/aerisController");

router.post("/buscarCapturas/", function (req, res) {
    medidaController.buscarCapturas(req, res);
});

router.get("/ultimas_CPU_RAM_Aeris/:idServidor", function (req, res) {
    medidaController.buscarUltimasMedidas_CPU_RAM_Aeris(req, res);
});

router.get("/tempo-realAeris/:idServidor", function (req, res) {
    medidaController.buscarMedidasEmTempoReal_Aeris(req, res);
})

router.get("/tempo-realSwapAeris/:idServidor", function (req, res) {
    medidaController.buscarMedidasEmTempoRealSwap_Aeris(req, res);
})
module.exports = router;