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
        alert("Preencha os campos vazios");
    } else {
        if (emailInstituicaoVar.indexOf("@") == -1 || emailInstituicaoVar.indexOf(".") == -1) {

        } else if (!/[!@#\$%\^&\*\(\)\-_\+=\[\]{};':"\\|,.<>\/?]/.test(senhaVar)) {

        } else if (senhaVar.length < 8) {

        } else if (confirmacao_senhaVar != senhaVar) {

        } else {
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
                    window.location = 'login.html';
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
        if (value.length > 8) {
            value = value.substring(0, 8) + '-' + value.substring(8);
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