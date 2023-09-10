var faculdadeModel = require("../models/faculdadeModel");
var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        faculdadeModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        aquarioModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].empresaId)
                            .then((resultadoAquarios) => {
                                if (resultadoAquarios.length > 0) {
                                    res.json({
                                        id: resultadoAutenticar[0].id,
                                        email: resultadoAutenticar[0].email,
                                        nome: resultadoAutenticar[0].nome,
                                        senha: resultadoAutenticar[0].senha,
                                        aquarios: resultadoAquarios
                                    });
                                } else {
                                    res.status(204).json({ aquarios: [] });
                                }
                            })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrarInstituicao(req, res) {
    // recuperando os valores do arquivo cadastro_faculdade.html
    var nomeInstituicao = req.body.instituicaoServer;
    var responsavel = req.body.responsavelServer;
    var emailInstituicao = req.body.emailInstituicaoServer;
    var cnpj = req.body.cnpjServer;
    var cep = req.body.cepServer;
    var telefone = req.body.telefoneServer;

    // Faça as validações dos valores
    if (nomeInstituicao == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (responsavel == undefined) {
        res.status(400).send("Seu responsavel está undefined!");
    } else if (emailInstituicao == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else {

        // Passando os valores como parâmetro e enviando para o arquivo faculdadeModel.js
        faculdadeModel.cadastrarInstituicao(nomeInstituicao, responsavel, emailInstituicao, cnpj, cep, telefone)
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
function buscarFk(req, res) {

    var cnpj = req.body.cnpjServer;

    console.log(`Recuperando a fkInstituicao`);
    if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else {
    faculdadeModel.buscarFk(cnpj)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao buscar a fk Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function cadastrarFuncionario(req, res) {
    // recuperando os valores do arquivo cadastro_faculdade.html
    var responsavel = req.body.responsavelServer;
    var emailInstituicao = req.body.emailInstituicaoServer;
    var senha = req.body.senhaServer;
    var fkInstituicao = req.body.fkInstituicaoServer;


    // Faça as validações dos valores
    if (responsavel == undefined) {
        res.status(400).send("Seu responsavel está undefined!");
    } else if ( emailInstituicao == undefined) {
        res.status(400).send("Seu emailInstituicao está undefined!");
    } else if ( senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (fkInstituicao == undefined) {
        res.status(400).send("Seu fkInstituicao undefined!");
    } else {

        // Passando os valores como parâmetro e enviando para o arquivo faculdadeModel.js
        faculdadeModel.cadastrarFuncionario(responsavel, emailInstituicao, senha, fkInstituicao)
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
module.exports = {
    autenticar,
    cadastrarInstituicao,
    buscarFk,
    cadastrarFuncionario
}