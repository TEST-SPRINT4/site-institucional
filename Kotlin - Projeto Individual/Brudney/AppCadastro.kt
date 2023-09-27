import java.util.Scanner
import kotlin.random.Random

fun main() {
    println("\r\n▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄ 6TRACKER ▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀")
    var usuario = Cadastro_Usuario()

    while (true) {
        println(
            """
            Digite:
            1 - Para fazer cadastro.
            2 - Para fazer Login.
            3 - Para sair.
        """.trimIndent()
        )
        val sn = Scanner(System.`in`)
        val escolha = sn.nextInt()
        println("\r\n▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀")
        when (escolha) {
            1 -> {
                println("\n\rVamos realizar seu Cadastro")
                print("\r\nDigite seu nome: ")
                val nome = sn.next()
                usuario.nome = nome
                println("\n\rOlá ${usuario.nome}")

                var emailInvalido = false
                while (!emailInvalido) {
                    print("\nDigite seu email: ")
                    val email = sn.next()
                    val arroba = email.indexOf('@')
                    val pontoCom = email.indexOf(".com")

                    if (email == null || arroba == -1 || pontoCom == -1 || pontoCom < arroba) {
                        println("\nEmail inválido. Tente novamente.")
                    } else {
                        usuario.email = email
                        println("\nO seu email é: ${usuario.email}")
                        emailInvalido = true
                    }
                }
                var senhaInvalida = false
                while (!senhaInvalida) {
                    print("\r\nDigite sua senha (min 8 caracteres): ")
                    val senha = sn.next()
                    val caracteresEspeciais = setOf('!', '@', '#', '$', '%', '&', '*')
                    if (senha.length < 8 ||
                        !senha.any { it.isUpperCase() } ||
                        !senha.any { it.isLowerCase() } ||
                        !senha.any { it.isDigit() } ||
                        !caracteresEspeciais.any { senha.contains(it) }
                    ) {
                        println("senha Inválida")
                    } else {
                        println("Sua senha é Válida")
                        usuario.senha = senha
                        senhaInvalida = true
                    println("\r\n▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀")
                    println("\r\n                      Cadastro Realizado com sucesso!")
                    println("\r\n▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀")
                    }
                }
            }

            2 -> {
                println("\nBem-vindo de volta!.")
                print("\r\nDigite seu email: ")

                var emailNregistrado = false
                while (!emailNregistrado) {
                    val validemail = sn.next()
                    if (validemail != usuario.email) {
                        println("\r\nE-mail inválido, tente novamente!")
                    } else {
                        var senhaNregistrado = false
                        println("\r\nDigite sua Senha: ")
                        while (!senhaNregistrado) {
                            val validsenha = sn.next()
                            if (validsenha != usuario.senha) {
                                print("\r\nSenha inválida, tente novamente: ")
                            } else {
                                println("\r\n▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀")
                                println("\r\n                         Seja Bem vindo ${usuario.nome}")
                                println("\r\n▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀")
                                println("\r\n")
                                emailNregistrado = true
                                senhaNregistrado = true
                            }
                        }
                        var saida = false
                        while (!saida) {
                            println(
                                """
            ▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄ Monitoramento 6TRACKER ▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀
            Escolha oque você gostaria de monitorar: 
            1 - Status de Disco.
            2 - Status de CPU.
            3 - Status de RAM.
            4 - Status de USB conectado.
            5 - Sair da Tela de Monitoramento.
        """.trimIndent()
                            )
                            val escolhaMonitor = sn.nextInt()
                            println("\r\n▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀")
                            val numeroAleatorio = Random.nextDouble(20.0, 100.0)
                            val usbAleatorio = Random.nextBoolean()
                            var infoObtida = false
                            while (!infoObtida) {
                                when (escolhaMonitor) {
                                    1 -> {
                                        println("\r\nO uso do Disco está em ${String.format("%.2f", numeroAleatorio)}%")
                                        if (numeroAleatorio >= 90.0) {
                                            println("\r\nO disco está em estado Crítico")
                                            println("\r\n")
                                        } else {
                                            println("\r\nO disco está em estado Normal")
                                            println("\r\n")

                                        }
                                        infoObtida = true
                                    }

                                    2 -> {
                                        println("\r\nO uso da CPU está em ${String.format("%.2f", numeroAleatorio)}%")
                                        if (numeroAleatorio >= 90.0) {
                                            println("\r\nO CPU está em estado Crítico")
                                        } else {
                                            println("\r\nO CPU está em estado Normal")
                                            println("\r\n")
                                        }
                                        infoObtida = true
                                    }

                                    3 -> {
                                        println("\r\nO uso da RAM está em ${String.format("%.2f", numeroAleatorio)}%")
                                        if (numeroAleatorio >= 95.0) {
                                            println("\r\nA RAM está em estado Crítico")
                                        } else {
                                            println("\r\nA RAM está em estado Normal")
                                            println("\r\n")
                                        }
                                        infoObtida = true
                                    }

                                    4 -> {
                                        val mensagem = if (usbAleatorio) {
                                            "Há um dispositivo conectado"
                                        } else {
                                            "Nenhum dispositivo Conectado"
                                        }
                                        println("\r\n")
                                        println(mensagem)
                                        println("\r\n")
                                        infoObtida = true
                                    }

                                    5 -> {
                                        println("\r\n")
                                        println("Saindo do Monitoramento")
                                        println("\r\n")
                                        saida = true
                                        infoObtida = true
                                    }

                                    else -> {
                                        println("\nEscolha inválida. Tente novamente.")
                                        infoObtida = true
                                    }
                                }
                            }
                        }
                    }
                }
            }

            3 -> {
                println("\nSaindo do programa.")
                return
            }

            else -> println("\nEscolha inválida. Tente novamente.")
        }
    }
}



