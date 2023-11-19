var funcionarioModel = require("../models/funcionarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA funcionarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var permissao = req.body.permissaoServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("O nome está está undefined!");
    } else if (permissao == undefined) {
        res.status(400).send("A permissao está undefined!");
    } else if (email == undefined) {
        res.status(400).send("O email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("A senha está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        funcionarioModel.cadastrar(nome, permissao, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function cadastrar_equipe(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    //             nome_cadastroServer:nome_cadastroVAR,
    //             permissao_cadastroServer:permissao_cadastroVAR,
    //             email_cadastroServer:email_cadastroVAR,
    //             senha_cadastroServer:senha_cadastroVAR,
    //             fk_instituicaoServer:fk_instituicaoVAR,

    var nome = req.body.nome_cadastroServer;
    var permissao = req.body.permissao_cadastroServer;
    var email = req.body.email_cadastroServer;
    var senha = req.body.senha_cadastroServer;
    var fk_instituicao = req.body.fk_instituicaoServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("O nome está está undefined!");
    } else if (permissao == undefined) {
        res.status(400).send("A permissao está undefined!");
    } else if (email == undefined) {
        res.status(400).send("O email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("A senha está undefined!");
    } else if (fk_instituicao == undefined) {
        res.status(400).send("A fk_instituicao está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        funcionarioModel.cadastrar_equipe(nome, permissao, email, senha, fk_instituicao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function atualizar_equipe(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    //             email_atualizarServer:email_atualizarVAR,
                // permissao_atualizarServer:permissao_atualizarVAR,

    var email_atualizar = req.body.email_atualizarServer;
    var permissao_atualizar = req.body.permissao_atualizarServer;

    // Faça as validações dos valores
    if (email_atualizar == undefined) {
        res.status(400).send("O email está está undefined!");
    } else if (permissao_atualizar == undefined) {
        res.status(400).send("A permissao está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        funcionarioModel.atualizar_equipe(email_atualizar, permissao_atualizar)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a atualização do funcionário! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function desativarFuncionario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    //             email_desativarServer:email_desativarVAR,

    var email_desativar = req.body.email_desativarServer;

    // Faça as validações dos valores
    if (email_desativar == undefined) {
        res.status(400).send("O email está está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        funcionarioModel.desativarFuncionario(email_desativar)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a exlusão do funcionário! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function pesquisarFuncionario(req, res) {
   
    var caractere = req.body.caractereServer;
    var fk_instituicao = req.body.fk_instituicaoServer;

    // Faça as validações dos valores
    if (caractere == undefined) {
        res.status(400).send("A pesquisa está está undefined!");
    } else if (fk_instituicao == undefined) {
        res.status(400).send("A pesquisa está está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        funcionarioModel.pesquisarFuncionario(caractere, fk_instituicao)
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
    //entrar,
    cadastrar,
    //listar,
    testar,
    cadastrar_equipe,
    atualizar_equipe,
    desativarFuncionario,
    pesquisarFuncionario
}