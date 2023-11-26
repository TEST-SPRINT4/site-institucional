var express = require("express");
var router = express.Router();

var discoController = require("../controllers/discoController");

router.post("/buscar_tamanho_disco", function (req, res) {
  servidorController.buscar_tamanho_disco(req, res);
})


module.exports = router;