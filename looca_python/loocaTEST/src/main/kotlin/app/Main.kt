package app
import LoocaAPI
import repository
import java.time.LocalDateTime
import javax.swing.JOptionPane

open class Main {
    companion object {
        @JvmStatic
        fun main(args: Array<String>) {

            val repository = repository()
            repository.iniciar()

            while (true) {
                val opcao = JOptionPane.showInputDialog(
                    """
                Bem vindo ao menu de captura TEST!
                Selecione:
                        
            1 - Capturar dados.
            2 - Fechar o programa.

                            """.trimIndent()
                ).toInt()

                when (opcao) {
                    1 -> {

                        val looca = LoocaAPI()

                        while (true) {
                            repository.RegistrocpuRaw(looca)
                            repository.RegistroramRaw(looca)
                            repository.RegistroPacEnviados(looca)
                            repository.RegistroPacEnviadosRAW(looca)
                            repository.RegistroPacoRecebidos(looca)
                            repository.RegistroPacoRecebidosRAW(looca)


                            println(
                                """
        Pacotes enviados S/ TRATAMENTO: ${looca.PacEnviadosRAW}
        Pacotes enviados TRATADO: ${looca.PacEnviados}
        -------------------------------------------------------
        Pacotes recebidos S/ TRATAMENTO: ${looca.PacoRecebidosRAW}
        Pacotes recebidos TRATADO: ${looca.PacoRecebidos}
        -------------------------------------------------------
        println("data Hora: ${LocalDateTime.now()}")
        --------------------------------------------------------
        Uso do processador S/ TRATAMENTO: ${looca.cpuRaw}
        Uso da memória Ram S/ TRATAMENTO: ${looca.ramRaw}
          
        """.trimIndent()
                            )
                            Thread.sleep(5000) // milissegundos

                            var sair = JOptionPane.showInputDialog(null,"""
                                O que deseja fazer agora? 
                                
                                    Digite 2 para encerrar o processo  de captura.
                            """.trimIndent()
                                    )
                            if (sair  == "2"){
                                JOptionPane.showMessageDialog(null,"Captura encerrada.")
                                break
                            }
                        }

                    }

                    2 -> {
                        JOptionPane.showMessageDialog(null,"Até mais!")
                        System.exit(0)
                    }


                }
            }
        }



    }
}
