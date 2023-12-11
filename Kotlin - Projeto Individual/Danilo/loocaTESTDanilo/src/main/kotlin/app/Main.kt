package app

import LeituraSOThread
import Repository
import javax.swing.JOptionPane

open class Main {
    companion object {

        var servidor_capt: String? = null

        @JvmStatic
        fun main(args: Array<String>) {


            val repository = Repository()
            repository.iniciar()


            var servidor_capt = JOptionPane.showInputDialog(
                """ 
                            Olá, seja bem vindo! 
                        Por favor insira o servidor para
                         iniciar sistema de captura.
                """.trimIndent()
            ).toString()

            var serverIP: String = servidor_capt
            var idServidor: Int = repository.BuscarServidor(serverIP)
            while (idServidor == 0) {
                JOptionPane.showMessageDialog(null, "Id não reconhecido")
                var serverIP = JOptionPane.showInputDialog(
                    """ 
                            Olá, seja bem vindo! 
                        Por favor insira o servidor para
                         iniciar sistema de captura.
                """.trimIndent()
                ).toString()
                idServidor = repository.BuscarServidor(serverIP)
            }
                val leituraSOThread = LeituraSOThread(repository, servidor_capt, idServidor)
                leituraSOThread.start()


                Thread.sleep(1000)
                while (true) {
                    val parar = JOptionPane.showInputDialog(
                        """
                    Para PARAR a captura digite '1' 
                """.trimIndent()
                    )
                    if (parar == "1") {
                        System.exit(0)
                    }
                }


            }

        }
    }
