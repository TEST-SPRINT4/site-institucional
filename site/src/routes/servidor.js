var express = require("express");
var router = express.Router();

var servidorController = require("../controllers/servidorController");

router.get("/:idinstituicao", function (req, res) {
  servidorController.buscarServidorPorEmpresa(req, res);
});

router.post("/cadastrarSv", function (req, res) {
  servidorController.cadastrarSv(req, res);
})

router.post("/atualizar_servidor", function (req, res) {
  servidorController.atualizar_servidor(req, res);
})

router.post("/excluir_servidor", function (req, res) {
  servidorController.excluir_servidor(req, res);
})


module.exports = router;