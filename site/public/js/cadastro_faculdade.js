function cadastrar() {

    var instituicaoVar = instituicao_input.value;
    var responsavelVar = responsavel_input.value;
    var emailInstituicaoVar = emailInstituicao_input.value;
    var cnpjVar = cnpj_input.value;
    var cepVar = cep_input.value;
    var telefoneVar = telefone_input.value;
    var senhaVar = senha_input.value;
    var confirmacao_senhaVar = confirmacao_senha_input.value

    erro_email.innerHTML = "";
    erro_senha.innerHTML = "";
    erro_confirmar_senha.innerHTML = "";
    erro_cnpj.innerHTML = "";
    erro_cep.innerHTML = "";
    erro_telefone.innerHTML = "";


    if (instituicaoVar == "" || responsavelVar == "" || emailInstituicaoVar == "" || cnpjVar == "" || cnpjVar == "" || cepVar == "" || telefoneVar == "" || senhaVar == ""
        || confirmacao_senhaVar == "") {
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
                    return cadastrarFuncionario(fkInstituicaoVar[0].fkInstituicao);
                })
                .then(() => {
                    window.location = 'public\index.html';
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
    var cepVar = cep_input.value;
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
            cepServer: cepVar,
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