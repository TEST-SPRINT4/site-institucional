import com.github.britooo.looca.api.core.Looca
import java.net.InetAddress // Biblioteca responsável pela captura do IP da maquina/servidor pelo Kotlin
import java.time.LocalDateTime


class LoocaAPI {

    val looca = Looca()

    val cpuRaw = looca.processador.uso
    val ramRaw = looca.memoria.emUso

    // Rede

    var PacoRecebidos = looca.rede.grupoDeInterfaces.interfaces[0].bytesRecebidos/1000000  // Transformando o valor "CRU" do dado em megabytes (TRATADO)
    var PacoRecebidosRAW = looca.rede.grupoDeInterfaces.interfaces[0].bytesRecebidos
    var PacEnviados = looca.rede.grupoDeInterfaces.interfaces[0].bytesEnviados/1000000
    var PacEnviadosRAW = looca.rede.grupoDeInterfaces.interfaces[0].bytesEnviados
    val dataHora = LocalDateTime.now()


}