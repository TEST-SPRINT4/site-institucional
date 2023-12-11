import app.Main
import javax.swing.JOptionPane

class LeituraSOThread(val repository: Repository, val servidor_capt: String, val idServidor: Int):Thread() {
    override fun run() {
        while (true) {
            val looca = LoocaAPI()
                println(
                    """
        Tamango disco enviados S/ TRATAMENTO: ${looca.discoTotal}
        Disco em uso S/ TRATAMENTO: ${looca.discoUso}
        -------------------------------------------------------
        println("data Hora: ${looca.dataHora}")
        --------------------------------------------------------
      
          
        """.trimIndent()
                )
                sleep(1000) // milissegundos
            }
        }
    }
