var express = require("express");
var router = express.Router();

var funcionarioController = require("../controllers/funcionarioController");

router.get("/", function (req, res) {
    funcionarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    funcionarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    funcionarioController.cadastrar(req, res);
})

router.post("/cadastrar_equipe", function (req, res) {
    funcionarioController.cadastrar_equipe(req, res);
})

router.post("/atualizar_equipe", function (req, res) {
    funcionarioController.atualizar_equipe(req, res);
})

router.post("/desativarFuncionario", function (req, res) {
    funcionarioController.desativarFuncionario(req, res);
})

router.post("/pesquisarFuncionario", function (req, res) {
    funcionarioController.pesquisarFuncionario(req, res);
});

module.exports = router;