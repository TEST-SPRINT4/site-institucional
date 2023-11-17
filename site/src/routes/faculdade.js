var express = require("express");
var router = express.Router();

var faculdadeController = require("../controllers/faculdadeController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarInstituicao", function (req, res) {
    faculdadeController.cadastrarInstituicao(req, res);
})

router.post("/cadastrarEndereco", function (req, res) {
    faculdadeController.cadastrarEndereco(req, res);
})

router.post("/buscarFk", function (req, res) {
    faculdadeController.buscarFk(req, res);
});

router.post("/cadastrarFuncionario", function (req, res) {
    faculdadeController.cadastrarFuncionario(req, res);
})

router.post("/autenticar", function (req, res) {
    faculdadeController.autenticar(req, res);
});

module.exports = router;