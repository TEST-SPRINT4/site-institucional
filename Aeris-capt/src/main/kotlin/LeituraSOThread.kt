import app.Main
import javax.swing.JOptionPane

class LeituraSOThread(val repository: Repository, val servidor_capt: String, val idServidor: Int):Thread() {
    override fun run() {
        while (true) {
            val looca = LoocaAPI()
            println("lendo os dados")
            repository.RegistrocpuRaw(looca, idServidor)
            repository.RegistroramRaw(looca, idServidor)

            println(
                """
        println("data Hora: ${looca.dataHora}")
        --------------------------------------------------------
        Uso do processador S/ TRATAMENTO: ${looca.cpuRaw}
        Uso da memória Ram C/ TRATAMENTO: ${looca.ramRaw}
          
        """.trimIndent()
            )
            sleep(1000)
        }
    }
}
