function verificar() {

    var emailVar = input_email.value;
    var senhaVar = input_senha.value;

    if (senhaVar == ""|| emailVar == "") {
        alert("Preencha os campos vazios");
    } else {
        if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".") == -1) {
alert("Email invalido")
        } else if (!/[!@#\$%\^&\*\(\)\-_\+=\[\]{};':"\\|,.<>\/?]/.test(senhaVar)) {
alert("Senha invalida")
        } else if (senhaVar.length < 8) {
            alert("Senha invalida")
        }
    }
}