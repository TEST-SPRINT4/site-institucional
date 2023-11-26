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


            val leituraSOThread = LeituraSOThread(repository, servidor_capt)
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
