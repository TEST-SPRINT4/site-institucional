import com.github.britooo.looca.api.core.Looca
import java.net.InetAddress // Biblioteca responsável pela captura do IP da maquina/servidor pelo Kotlin
import java.time.LocalDateTime


class LoocaAPI {

    val looca = Looca()
    val discoTotal = looca.grupoDeDiscos.tamanhoTotal
    val discoUso = looca.grupoDeDiscos.discos.size
    val dataHora = LocalDateTime.now()


}