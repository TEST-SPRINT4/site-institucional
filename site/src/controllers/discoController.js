var discoModel = require("../models/discoModel")

function buscar_tamanho_disco(req, res) {
   
    var fkEmpresa = req.body.fkEmpresaServer;
    var ipServidor = req.body.ipServidor;

    // Faça as validações dos valores
    if (fkEmpresa == undefined) {
        res.status(400).send("A pesquisa está está undefined!");
    } else if (ipServidor == undefined) {
        res.status(400).send("A pesquisa está está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        discoModel.buscar_tamanho_disco(fkEmpresa, ipServidor)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a pesquisa do funcionário! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    buscar_tamanho_disco
}