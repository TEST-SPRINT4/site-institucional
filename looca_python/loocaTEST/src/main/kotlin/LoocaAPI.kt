import com.github.britooo.looca.api.core.Looca
import java.net.InetAddress
import java.io.BufferedReader
import java.io.InputStreamReader
import java.time.LocalDateTime


class LoocaAPI {

    val looca = Looca()
    val inetAddress = InetAddress.getLocalHost()


    // IP (id do servidor)

        //Comando responsável pela captura de dados no KOTLIN/JAVA
    val ip = inetAddress.hostAddress

    // Rede
    var redeDowload = looca.rede.grupoDeInterfaces.interfaces[0].bytesRecebidos/1000000
    var redeUpload = looca.rede.grupoDeInterfaces.interfaces[0].bytesEnviados/1000000
    val dataHora = LocalDateTime.now()


}