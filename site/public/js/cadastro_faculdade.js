function cadastrar() {

    var instituicaoVar = instituicao_input.value;
    var responsavelVar = responsavel_input.value;
    var emailInstituicaoVar = emailInstituicao_input.value;
    var cnpjVar = cnpj_input.value;
    var cepVar = cep_input.value;
    var estadoVar = estado_input.value;
    var cidadeVar = cidade_input.value;
    var bairroVar = bairro_input.value;
    var ruaVar = rua_input.value;
    var numeroVar = numero_input.value;
    var telefoneVar = telefone_input.value;
    var senhaVar = senha_input.value;
    var confirmacao_senhaVar = confirmacao_senha_input.value


    erro_email.innerHTML = "";
    erro_senha.innerHTML = "";
    erro_confirmar_senha.innerHTML = "";
    erro_cnpj.innerHTML = "";
    erro_cep.innerHTML = "";
    erro_estado.innerHTML = "";
    erro_cidade.innerHTML = "";
    erro_bairro.innerHTML = "";
    erro_rua.innerHTML = "";
    erro_numero.innerHTML = "";
    erro_telefone.innerHTML = "";


    if (instituicaoVar == "" || responsavelVar == "" ||
     emailInstituicaoVar == "" || cnpjVar == "" ||
      cnpjVar == "" || cepVar == "" ||
       estadoVar == "" || cidadeVar == "" ||
        bairroVar == "" || ruaVar == ""||
         telefoneVar == "" || senhaVar == "" ||
          confirmacao_senhaVar == "" || numeroVar == "") {
            cardErro.style.display = "block"
            mensagem_erro.innerHTML = "Todos os campos são obrigatórios";
            setTimeout(function () {
                cardErro.style.display = "none";
                    }, 4000);
            finalizarAguardar();
            return false;
    } else {
        if (emailInstituicaoVar.indexOf("@") == -1 || emailInstituicaoVar.indexOf(".") == -1) {
            cardErro.style.display = "block"
            mensagem_erro.innerHTML = "Email inválido, insira um email válido!";
            setTimeout(function () {
                cardErro.style.display = "none";
                    }, 4000);
            finalizarAguardar();
            return false;

        } else if (!/[!@#\$%\^&\*\(\)\-_\+=\[\]{};':"\\|,.<>\/?]/.test(senhaVar)) {
            cardErro.style.display = "block"
            mensagem_erro.innerHTML = "A senha deve conter 8 caracteres e 1 especial (ex: @ ! %)";
            setTimeout(function () {
                cardErro.style.display = "none";
                    }, 4000);
            finalizarAguardar();
            return false;
        } else if (senhaVar.length < 8) {
            cardErro.style.display = "block"
            mensagem_erro.innerHTML = "A senha deve conter 8 caracteres e 1 especial (ex: @ ! %)";
            setTimeout(function () {
                cardErro.style.display = "none";
                    }, 4000);
            finalizarAguardar();
            return false;
        } else if (confirmacao_senhaVar != senhaVar) {
            cardErro.style.display = "block"
            mensagem_erro.innerHTML = "Senhas não se coincidem";
            setTimeout(function () {
                cardErro.style.display = "none";
                    }, 4000);
            finalizarAguardar();
            return false;

        } else if (cepVar.length != 9 || estadoVar == "undefined" || cidadeVar == "undefined" || bairroVar == "undefined" || ruaVar == "undefined"){
            // Obtém a input
            const cep_input = document.querySelector("#cep_input");
            cep_input.value = "";
            const estado_input = document.querySelector("#estado_input");
            estado_input.value = "";
            const cidade_input = document.querySelector("#cidade_input");
            cidade_input.value = "";
            const bairro_input = document.querySelector("#bairro_input");
            bairro_input.value = "";
            const rua_input = document.querySelector("#rua_input");
            rua_input.value = "";
    
            cardErro.style.display = "block"
        mensagem_erro.innerHTML = "CEP inválido, insira um CEP válido!";
        setTimeout(function () {
            cardErro.style.display = "none";
        }, 4000);
        finalizarAguardar();
        return false;         
}
        else {
            cadastrarInstituicao()
                .then(() => buscarFk(cnpjVar))
                .then((fkInstituicaoVar) => {
                    return cadastrarEndereco(fkInstituicaoVar[0].fkInstituicao);
                })
                .then(() => buscarFk(cnpjVar))
                .then((fkInstituicaoVar) => {
                    return cadastrarFuncionario(fkInstituicaoVar[0].fkInstituicao);
                })
                .then(() => {

                    cardErro.style.display = "block"
                    mensagem_erro.innerHTML = `Cadastro Realizado com Sucesso, Bem-vindo a TEST`;
                    cardErro.style.borderColor = "green";
                    setTimeout(function () {
                        cardErro.style.display = "none";
                        window.location = 'login.html';
                    }, 4000);
                })
                .catch((error) => {
                    console.error(error);
                });

        }
    }
}

function cadastrarInstituicao() {
    var instituicaoVar = instituicao_input.value;
    var responsavelVar = responsavel_input.value;
    var emailInstituicaoVar = emailInstituicao_input.value;
    var cnpjVar = cnpj_input.value;
    var telefoneVar = telefone_input.value;

    return fetch("/faculdade/cadastrarInstituicao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            instituicaoServer: instituicaoVar,
            responsavelServer: responsavelVar,
            emailInstituicaoServer: emailInstituicaoVar,
            cnpjServer: cnpjVar,
            telefoneServer: telefoneVar,
        })
    });
}

function buscarFk(cnpjVar) {
    return fetch("/faculdade/buscarFk", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            cnpjServer: cnpjVar,
        }),
    })
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Nenhum dado encontrado ou erro na API');
            }
        })
        .then(function (fkInstituicaoVar) {
            return fkInstituicaoVar;
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados: ${error.message}`);
        });
}

function cadastrarEndereco(fkInstituicaoVar) {

    var cepVar = cep_input.value;
    var estadoVar = estado_input.value;
    var cidadeVar = cidade_input.value;
    var bairroVar = bairro_input.value;
    var ruaVar = rua_input.value;
    var numeroVar = numero_input.value;


    return fetch("/faculdade/cadastrarEndereco", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            cepServer: cepVar,
            estadoServer: estadoVar,
            cidadeServer: cidadeVar,
            bairroServer: bairroVar,
            ruaServer: ruaVar,
            numeroServer: numeroVar,
            fkInstituicaoServer: fkInstituicaoVar,
        })
    });
}

function cadastrarFuncionario(fkInstituicaoVar) {
    var responsavelVar = responsavel_input.value;
    var emailInstituicaoVar = emailInstituicao_input.value;
    var senhaVar = senha_input.value;

    return fetch("/faculdade/cadastrarFuncionario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            responsavelServer: responsavelVar,
            emailInstituicaoServer: emailInstituicaoVar,
            senhaServer: senhaVar,
            fkInstituicaoServer: fkInstituicaoVar,
        })
    });
}

function buscarCep() {
    var cep = cep_input.value;
    var url = `https://viacep.com.br/ws/${cep}/json/`;

    if (cep.length >= 8) {

        console.log(
            fetch(url)
        )

        fetch(url)
            .then(
                function (resposta) {
                    console.log("DEU CERTO!");
                    console.log("Resposta: ", resposta);

                    resposta.json()
                        .then(
                            function (respostaJson) {
                                console.log("JSON: ", respostaJson);
                                console.log("Logradouro: " + respostaJson.logradouro);

                    rua_input.value = respostaJson.logradouro;
                    estado_input.value = respostaJson.uf;
                    bairro_input.value = respostaJson.bairro;
                    cidade_input.value = respostaJson.localidade;

                    


                            }
                        )
                }
            )
            .catch(
                function (erro) {
                    console.log("DEU ERRO!");
                    console.log(erro)
                }
            )
    }
}

function formatarCEP(input) {
    // Check if the input value is empty
    if (input.value === "") {
      return;
    }
  
    var value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  
    if (value.length > 8) {
      // Se o CEP tem mais de 8 dígitos, remove os dígitos adicionais
      value = value.substring(0, 8);
    } else {
      if (value.length > 5) {
        value = value.substring(0, 5) + '-' + value.substring(5);
      }
    }
  
    input.value = value;
  }

function formatarTELEFONE(input) {
    var value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    if (value.length > 11) {
        // Se o número de telefone tem mais de 11 dígitos, remove os dígitos adicionais
        value = value.substring(0, 11);
    } else {
        if (value.length > 0) {
            value = '(' + value;
        }
        if (value.length > 3) {
            value = value.substring(0, 3) + ')' + value.substring(3);
        }
        if (value.length > 9) {
            value = value.substring(0, 9) + '-' + value.substring(9);
        }
    }

    input.value = value;
}

function formatarCNPJ(input) {
    var value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos


    if (value.length > 18) {
        // Se o CNPJ tem mais de 18 dígitos, mantém apenas os primeiros 18
        value = value.substring(0, 18);
    } else {
        if (value.length > 2) {
            value = value.substring(0, 2) + '.' + value.substring(2);
        }
        if (value.length > 6) {
            value = value.substring(0, 6) + '.' + value.substring(6);
        }
        if (value.length > 10) {
            value = value.substring(0, 10) + '/' + value.substring(10);
        }
        if (value.length > 15) {
            value = value.substring(0, 15) + '-' + value.substring(15);
        }
    }

    input.value = value;
}