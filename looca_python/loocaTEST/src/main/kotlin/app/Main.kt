package app
import com.github.britooo.looca.api.group.memoria.Memoria
import repository
import LoocaAPI
import  Conexao

open class Main {
    companion object {
        @JvmStatic fun main(args: Array<String>) {

                val repository = repository()
                repository.iniciar()

                while (true){
                    val looca = LoocaAPI()

                    repository.RegistrocpuRaw(looca)
                    repository.RegistroramRaw(looca)
                    repository.RegistroPacEnviados(looca)
                    repository.RegistroPacEnviadosRAW(looca)
                    repository.RegistroPacoRecebidos(looca)
                    repository.RegistroPacoRecebidosRAW(looca)


                    println("""
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
          
        """.trimIndent())
                    Thread.sleep(5000) // milissegundos
                }






            }


        }
    }
