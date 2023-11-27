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

// AERIS INDIVIDUAL --------------------------------------------------------------

router.post("/buscarCapturas/", function (req, res) {
    medidaController.buscarCapturas(req, res);
});

router.get("/ultimas_CPU_Aeris/:idServidor", function (req, res) {
    medidaController.buscarUltimasMedidas_CPU_Aeris(req, res);
});

router.get("/tempo-real_CPU_Aeris/:idServidor", function (req, res) {
    medidaController.buscarMedidasEmTempoReal_CPU_Aeris(req, res);
})

router.get("/ultimas_RAM_Aeris/:idServidor", function (req, res) {
    medidaController.buscarUltimasMedidas_RAM_Aeris(req, res);
});

router.get("/tempo-real_RAM_Aeris/:idServidor", function (req, res) {
    medidaController.buscarMedidasEmTempoReal_RAM_Aeris(req, res);
})

//----------DANILAUM INDIVIDUAL------------------
router.get("tamanho-disco/:idServidor", function (req, res) {
    medidaController.tamanhoDisco(req, res);
})


module.exports = router;



