var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimasCPU/:idServidor", function (req, res) {
    medidaController.buscarUltimasMedidasCPU(req, res);
});
router.get("/tempo-realCPU/:idServidor", function (req, res) {
    medidaController.buscarMedidasEmTempoRealCPU(req, res);
})

//--------------------------------------------------------------

//var medidaControllerRAM = require("../controllers/medidaController");

router.get("/ultimasRAM/:idServidor", function (req, res) {
    medidaController.buscarUltimasMedidasRAM(req, res);
});

router.get("/tempo-realRAM/:idServidor", function (req, res) {
    medidaController.buscarMedidasEmTempoRealRAM(req, res);
})

//--------------------------------------------------------------

//var medidaControllerDISCO = require("../controllers/medidaController");

router.get("/ultimasDISCO/:idServidor", function (req, res) {
    medidaController.buscarUltimasMedidasDISCO(req, res);
});

router.get("/tempo-realDISCO/:idServidor", function (req, res) {
    medidaController.buscarMedidasEmTempoRealDISCO(req, res);
})

//--------------------------------------------------------------

//var medidaControllerREDE = require("../controllers/medidaController");

router.get("/ultimasREDE/:idServidor", function (req, res) {
    medidaController.buscarUltimasMedidasREDE(req, res);
});

router.get("/tempo-realREDE/:idServidor", function (req, res) {
    medidaController.buscarMedidasEmTempoRealREDE(req, res);
})

module.exports = router;