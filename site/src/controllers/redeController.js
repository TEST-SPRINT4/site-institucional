var redeModel = require("../models/redeModel");

var sessoes = [];

function BuscarDados_latencia(req, res) {
   
    var fkEmpresa = req.body.fkEmpresaServer;
    var ipServidor = req.body.ipServidor;

    // Faça as validações dos valores
    if (fkEmpresa == undefined) {
        res.status(400).send("A pesquisa está está undefined!");
    } else if (ipServidor == undefined) {
        res.status(400).send("A pesquisa está está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        redeModel.BuscarDados_latencia(fkEmpresa, ipServidor)
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

function BuscarDados_Pacotes_Recebidos(req, res) {
   
    var fkEmpresa = req.body.fkEmpresaServer;
    var ipServidor = req.body.ipServidor;

    // Faça as validações dos valores
    if (fkEmpresa == undefined) {
        res.status(400).send("A pesquisa está está undefined!");
    } else if (ipServidor == undefined) {
        res.status(400).send("A pesquisa está está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        redeModel.BuscarDados_Pacotes_Recebidos(fkEmpresa, ipServidor)
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

function BuscarDados_Pacotes_Enviados(req, res) {
   
    var fkEmpresa = req.body.fkEmpresaServer;
    var ipServidor = req.body.ipServidor;

    // Faça as validações dos valores
    if (fkEmpresa == undefined) {
        res.status(400).send("A pesquisa está está undefined!");
    } else if (ipServidor == undefined) {
        res.status(400).send("A pesquisa está está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        redeModel.BuscarDados_Pacotes_Enviados(fkEmpresa, ipServidor)
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

function Buscar_IPV4(req, res) {
   
    var fkEmpresa = req.body.fkEmpresaServer;
    var ipServidor = req.body.ipServidor;

    // Faça as validações dos valores
    if (fkEmpresa == undefined) {
        res.status(400).send("A pesquisa está está undefined!");
    } else if (ipServidor == undefined) {
        res.status(400).send("A pesquisa está está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        redeModel.Buscar_IPV4(fkEmpresa, ipServidor)
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

function Buscar_IP_publico(req, res) {
   
    var fkEmpresa = req.body.fkEmpresaServer;
    var ipServidor = req.body.ipServidor;

    // Faça as validações dos valores
    if (fkEmpresa == undefined) {
        res.status(400).send("A pesquisa está está undefined!");
    } else if (ipServidor == undefined) {
        res.status(400).send("A pesquisa está está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        redeModel.Buscar_IP_publico(fkEmpresa, ipServidor)
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
    BuscarDados_latencia,
    BuscarDados_Pacotes_Recebidos,
    BuscarDados_Pacotes_Enviados,
    Buscar_IPV4,
    Buscar_IP_publico
}