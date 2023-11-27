var express = require("express");
var router = express.Router();

var servidorController = require("../controllers/servidorController");

router.get("/listar", function (req, res) {
  servidorController.listar(req, res);
});

router.get('/BuscarServidor/:id', servidorController.BuscarServidor);

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

router.post("/pesquisarServidor/", function (req, res) {
  servidorController.pesquisarServidor(req, res);
});


module.exports = router;