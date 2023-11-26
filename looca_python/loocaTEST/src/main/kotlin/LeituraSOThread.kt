import app.Main
import javax.swing.JOptionPane

class LeituraSOThread(val repository: Repository, val servidor_capt: String):Thread() {

    override fun run() {
        while (true) {
            val looca = LoocaAPI()
            println("lendo os dados")



       var serverIP: String = servidor_capt

            print(serverIP)
          var idServidor :Int =  repository.BuscarServidor(serverIP)

            repository.RegistrocpuRaw(looca, idServidor)
            repository.RegistroramRaw(looca, idServidor)
            repository.RegistroPacEnviados(looca, idServidor)
            repository.RegistroPacEnviadosRAW(looca, idServidor)
            repository.RegistroPacoRecebidos(looca, idServidor)
            repository.RegistroPacoRecebidosRAW(looca, idServidor)


            println(
                """
        Pacotes enviados S/ TRATAMENTO: ${looca.PacEnviadosRAW}
        Pacotes enviados TRATADO: ${looca.PacEnviados}
        -------------------------------------------------------
        Pacotes recebidos S/ TRATAMENTO: ${looca.PacoRecebidosRAW}
        Pacotes recebidos TRATADO: ${looca.PacoRecebidos}
        -------------------------------------------------------
        println("data Hora: ${looca.dataHora}")
        --------------------------------------------------------
        Uso do processador S/ TRATAMENTO: ${looca.cpuRaw}
        Uso da memória Ram S/ TRATAMENTO: ${looca.ramRaw}
          
        """.trimIndent()
            )
            sleep(1000) // milissegundos
        }
    }
}