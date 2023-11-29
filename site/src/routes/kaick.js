var express = require("express");
var router = express.Router();

var kaickController = require("../controllers/kaickController");

router.post("/ultimasCPU", function (req, res) {
    kaickController.buscarUltimasMedidasCPUKaick(req, res);
});

router.get("/tempo-realCPU/:idServidor", function (req, res) {
    kaickController.buscarCpuKaick(req, res);
});

router.post("/ultimasRAM", function (req, res) {
    kaickController.buscarUltimasMedidasRAMKaick(req, res);
});

router.get("/tempo-realRAM/:idServidor", function (req, res) {
    kaickController.buscarRamKaick(req, res);
});

module.exports = router;