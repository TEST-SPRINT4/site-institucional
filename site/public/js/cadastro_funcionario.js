function cadastrar() {

    // Agora vá para o método fetch logo abaixo
    var nomeVar = input_nome.value;
    var permissaoVar = input_permissao.value;
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;
    var confirmacaoSenhaVar = input_confirmar_senha.value;

    //var validacao = emailVar.endsWith(".com");
    //var validacao2 = emailVar.indexOf("@");

    if (nomeVar == "" || permissaoVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == "") {
        cardErro.style.display = "block"
        alert("ERRO: Algum campo está em branco..."); 

        finalizarAguardar();
        return false;
    // }
    // else if(validacao == false || senhaVar != confirmacaoSenhaVar){
    //     alert("ERRO: Senha ou email inválidos.");
    //     finalizarAguardar();
    //     return false;
    }
    // }else{
    //     setInterval(sumirMensagem, 5000)
    // }

    // Enviando o valor da nova input
    fetch("/funcionario/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            permissaoServer: permissaoVar,
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            cardErro.style.color = "green";

            mensagem_erro.innerHTML = "Cadastro realizado com sucesso!";

            //limparFormulario();
            //finalizarAguardar();
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        // finalizarAguardar();
    });

    return false;
}

// function sumirMensagem() {
//     cardErro.style.display = "none"
// }