var express = require("express");
var router = express.Router();

var simoneController = require("../controllers/simoneController");

//SIMONE INDIVIDUAL------------------------------------

router.get("/tempo-realTEMPERATURA/:idServidor", function (req, res) {
    simoneController.buscarMedidasEmTempoRealTEMPERATURA(req, res);
})

router.get("/ultimasTEMPERATURA/:idServidor", function (req, res) {
    simoneController.buscarUltimasMedidasTEMPERATURA(req, res);
});

router.get("/tempo-realCPU/:idServidor", function (req, res) {
    simoneController.buscarMedidasEmTempoRealCPU(req, res);
})

router.get("/ultimasCPU/:idServidor", function (req, res) {
    simoneController.buscarUltimasMedidasCPU(req, res);
});

router.get("/tempo-realFREQUENCIA/:idServidor", function (req, res) {
    simoneController.buscarMedidasEmTempoRealFREQUENCIA(req, res);
})

router.get("/ultimasFREQUENCIA/:idServidor", function (req, res) {
    simoneController.buscarUltimasMedidasFREQUENCIA(req, res);
});

router.get("/listarNUCLEOSFISICOS", function (req, res) {
    simoneController.listarNUCLEOSFISICOS(req, res);
  });



module.exports = router;