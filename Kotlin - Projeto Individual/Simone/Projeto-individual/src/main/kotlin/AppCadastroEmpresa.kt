import java.util.Scanner

fun main() {
    println("Bem-Vindo(a) 6TRACKER!")
    var empresa = Empresa6tracker()
    var usuario = Adm6tracker()
    var funcionario = Funcionario6tracker()

    while (true) {
        println("Digite o que deseja fazer: \n1 - Cadastro \n2 - Login. \n3 - Fechar")

        val sn = Scanner(System.`in`)
        val opcao = sn.nextInt()

        println("\n----------------------------------------------------------------------------")

        when (opcao) {
            1 -> {
                println("\nInforme os seguintes dados para o cadastro!")

                print("\nDigite o nome da empresa: ")
                val nomeEmpresa = sn.next()
                empresa.nome = nomeEmpresa

                print("Digite o cnpj da empresa $nomeEmpresa: ")
                val cnpjEmpresa = sn.next()
                empresa.cnpj = cnpjEmpresa

                print("Digite o estado que a empresa $nomeEmpresa se localiza: ")
                val estado = sn.next()
                empresa.estado = estado

                print("Digite a cidade que a empresa $nomeEmpresa se localiza: ")
                val cidade = sn.next()
                empresa.cidade = cidade

                print("\nDigite seu nome (Administrador): ")
                val nome = sn.next()
                usuario.nome = nome
                println("\nBem-vindo(a) ${usuario.nome}")

                print("\nDigite seu email: ")
                val email = sn.next()
                usuario.email = email

                var senhaInvalida = false
                while (!senhaInvalida) {
                    print("Digite sua senha: ")
                    val senha = sn.next()

                    if (senha.length < 8) {
                        println("Sua senha deve ter mais de 8 caracteres.")
                    } else {
                        usuario.senha = senha
                        senhaInvalida = true
                        println("\n----------------------------------------------------------------------------")
                        println("\nCadastro realizado com sucesso!")
                    }

                }
            }

            2 -> {
                print("\nDigite seu e-mail: ")

                var emailNregistrado = false
                while (!emailNregistrado) {
                    val validemail = sn.next()
                    if (validemail != usuario.email) {
                        println("\nE-mail inválido, tente novamente!")
                    } else {

                        var senhaNregistrado = false
                        println("Digite sua Senha: ")

                        while (!senhaNregistrado) {
                            val validsenha = sn.next()
                            if (validsenha != usuario.senha) {
                                print("\nSenha inválida, tente novamente: ")
                            } else {
                                println("\n----------------------------------------------------------------------------")
                                println("\n              Seja bem-vindo(a) administrador ${usuario.nome}")
                                println("\n----------------------------------------------------------------------------")
                                emailNregistrado = true
                                senhaNregistrado = true
                            }
                        }
                        var saida = false
                        println("Cadastre seu funcionário:")

                        print("\nDigite o nome do seu funcionário: ")
                        val nome = sn.next()
                        funcionario.nome = nome

                        print("Digite o cargo do seu funcionário: ")
                        val cargo = sn.next()
                        funcionario.cargo = cargo

                        print("Digite o email do seu $cargo: ")
                        val email = sn.next()
                        funcionario.email = email

                        var senhaInvalida = false

                        while (!senhaInvalida) {
                            print("Digite a senha do seu funcionário: ")
                            val senha = sn.next()

                            if (senha.length < 8) {
                                println("Sua senha deve ter mais de 8 caracteres.")
                            } else {
                                funcionario.senha = senha
                                senhaInvalida = true
                                println("\n----------------------------------------------------------------------------")
                                println("\nFuncionário cadastrado com sucesso!")
                            }
                        }
                        if (senhaInvalida == true) {


                            println("Digite o que deseja fazer: \n1 - Ver empresa \n2 - Dashboard \n3 - Logoff")
                            while (true) {
                                val opcao = sn.nextInt()

                                when (opcao) {
                                    1 -> {
                                        println("\n------------ EMPRESA ------------")
                                        println("Nome: ${empresa.nome}")
                                        println("CNPJ: ${empresa.cnpj}")
                                        println("Estado: ${empresa.estado}")
                                        println("Cidade: ${empresa.cidade}")
                                        println("\n-------------- ADM --------------")
                                        println("Nome: ${usuario.nome}")
                                        println("Email: ${usuario.email}")
                                        println("\n---------- FUNCIONÁRIO ----------")
                                        println("Nome: ${funcionario.nome}")
                                        println("Cargo: ${funcionario.cargo}")
                                        println("Email: ${funcionario.email}")
                                    }
                                    2 -> {
                                        println("----------------------------------------------------------------------------")
                                        println("                        Bem-vindo(a) a Dashboard!")
                                        println("----------------------------------------------------------------------------")
                                        println("\nMonitorando...")
                                        println("Nenhum alerta novo.")

                                    }
                                    3 -> {
                                        println("\nAté logo!")
                                        return
                                    }
                                }
                            }
                        }
                    }
                }
            }

            3 -> {
                println("\nPrograma encerrado")
                return
            }

            else -> println("\nEscolha inválida. Tente novamente.")
        }
    }
}
