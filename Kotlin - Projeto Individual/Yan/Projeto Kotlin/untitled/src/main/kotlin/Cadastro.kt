import java.util.*
class Cadastro {
    var emailInvalido = false
    var senhaInvalida = false

fun validarEmail(){

    while(!emailInvalido) {
        val sn = Scanner(System.`in`)
        print("Digite seu email: ")
        var email = sn.next()
    if(email.indexOf("@") != -1 || email.indexOf(".com") != -1){
            println("Seu email é válido")
            emailInvalido = true
        } else {
            println("Por favor, insira um email válido")
            emailInvalido = false
        }
    }


}
    fun validarSenha(){

    while(!senhaInvalida){
        val sn = Scanner(System.`in`)
        println("Digite sua senha: ")
        var senha = sn.next()

        if(senha.length < 8){
            println("Sua senha deve conter no mínimo 8 caracteres")
            this.senhaInvalida = false
        } else {
            println("Senha validada!")

            this.senhaInvalida = true
        }

    }


    }



}