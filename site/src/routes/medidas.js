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


router.get("/ultimasRAM/:idServidor", function (req, res) {
    medidaController.buscarUltimasMedidasRAM(req, res);
});

router.get("/tempo-realRAM/:idServidor", function (req, res) {
    medidaController.buscarMedidasEmTempoRealRAM(req, res);
})

//--------------------------------------------------------------


router.get("/ultimasDISCO/:idServidor", function (req, res) {
    medidaController.buscarUltimasMedidasDISCO(req, res);
});

router.get("/tempo-realDISCO/:idServidor", function (req, res) {
    medidaController.buscarMedidasEmTempoRealDISCO(req, res);
})

//--------------------------------------------------------------


router.get("/ultimasENVIADOS/:idServidor", function (req, res) {
    medidaController.buscarUltimasMedidasENVIADOS(req, res);
});

router.get("/tempo-realENVIADOS/:idServidor", function (req, res) {
    medidaController.buscarMedidasEmTempoRealENVIADOS(req, res);
})

//--------------------------------------------------------------


router.get("/ultimasRECEBIDOS/:idServidor", function (req, res) {
    medidaController.buscarUltimasMedidasRECEBIDOS(req, res);
});

router.get("/tempo-realRECEBIDOS/:idServidor", function (req, res) {
    medidaController.buscarMedidasEmTempoRealRECEBIDOS(req, res);
})

//--------------------------------------------------------------


router.get("/ultimasLATENCIA/:idServidor", function (req, res) {
    medidaController.buscarUltimasMedidasLATENCIA(req, res);
});

router.get("/tempo-realLATENCIA/:idServidor", function (req, res) {
    medidaController.buscarMedidasEmTempoRealLATENCIA(req, res);
})

// ---------------------------------------------------------------

router.post("/buscarCapturas", function (req, res) {
    medidaController.buscarCapturas(req, res);
})

module.exports = router;



