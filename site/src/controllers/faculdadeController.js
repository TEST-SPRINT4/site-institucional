var faculdadeModel = require("../models/faculdadeModel");
var servidorModel = require("../models/servidorModel");

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

                        servidorModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].empresaId)
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

            // instituicaoServer: instituicaoVar,
            // responsavelServer: responsavelVar,
            // emailInstituicaoServer: emailInstituicaoVar,
            // cnpjServer: cnpjVar,
            // cepServer: cepVar,
            // estadoServer: estadoVar,
            // cidadeServer: cidadeVar,
            // bairroServer: bairroVar,
            // ruaServer: ruaVar,
            // numeroServer: numeroVar,
            // telefoneServer: telefoneVar,

    var nomeInstituicao = req.body.instituicaoServer;
    var responsavel = req.body.responsavelServer;
    var emailInstituicao = req.body.emailInstituicaoServer;
    var cnpj = req.body.cnpjServer;
    var telefone = req.body.telefoneServer;

    // Faça as validações dos valores
    if (nomeInstituicao == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (responsavel == undefined) {
        res.status(400).send("Seu responsavel está undefined!");
    } else if (emailInstituicao == undefined) {
        res.status(400).send("Seu email está undefined!");
    }  else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else {

        // Passando os valores como parâmetro e enviando para o arquivo faculdadeModel.js
        faculdadeModel.cadastrarInstituicao(nomeInstituicao, responsavel, emailInstituicao, cnpj, telefone)
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

function cadastrarEndereco(req, res) {
    // recuperando os valores do arquivo cadastro_faculdade.html

    // cepServer: cepVar,
    // estadoServer: estadoVar,
    // cidadeServer: cidadeVar,
    // bairroServer: bairroVar,
    // ruaServer: ruaVar,
    // numeroServer: numeroVar,
    // fkInstituicaoServer: fkInstituicaoVar,

    var cep = req.body.cepServer;
    var estado = req.body.estadoServer;
    var cidade = req.body.cidadeServer;
    var bairro = req.body.bairroServer;
    var rua = req.body.ruaServer;
    var numero = req.body.numeroServer;
    var fkInstituicao = req.body.fkInstituicaoServer;

    // Faça as validações dos valores
    if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (estado == undefined) {
        res.status(400).send("Seu estado está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("Sua cidade está undefined!");
    } else if (bairro == undefined) {
        res.status(400).send("Seu bairro está undefined!");
    } else if (rua == undefined) {
        res.status(400).send("Sua rua está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Seu numero está undefined!");
    } else if (fkInstituicao == undefined) {
        res.status(400).send("Seu fkInstituicao está undefined!");
    } else {

        // Passando os valores como parâmetro e enviando para o arquivo faculdadeModel.js
        faculdadeModel.cadastrarEndereco(cep, estado, cidade, bairro, rua, numero, fkInstituicao)
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
    cadastrarEndereco,
    buscarFk,
    cadastrarFuncionario
}