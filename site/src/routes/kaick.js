var express = require("express");
var router = express.Router();

var kaickController = require("../controllers/kaickController");

router.get("/ultimasCPU/:idServidor", function (req, res) {
    kaickController.buscarUltimasMedidasCPUKaick(req, res);
});

router.get("/tempo-realCPU/:idServidor", function (req, res) {
    kaickController.buscarMedidasEmTempoRealCPUKaick(req, res);
});

router.get("/ultimasRAM/:idServidor", function (req, res) {
    kaickController.buscarUltimasMedidasRAMKaick(req, res);
});

router.get("/tempo-realRAM/:idServidor", function (req, res) {
    kaickController.buscarMedidasEmTempoRealRAMKaick(req, res);
});

module.exports = router;