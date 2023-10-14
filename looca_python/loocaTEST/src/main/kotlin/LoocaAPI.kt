import com.github.britooo.looca.api.core.Looca
import java.net.InetAddress // Biblioteca responsável pela captura do IP da maquina/servidor pelo Kotlin
import java.time.LocalDateTime


class LoocaAPI {

    val looca = Looca()

    // Atribuindo o getLocalHost() para o InetAddress
    val inetAddress = InetAddress.getLocalHost()


    // IP (id do servidor)

        //Comando responsável pela captura de dados no KOTLIN/JAVA
    val ip = inetAddress.hostAddress

    // Rede
    var redeDownload = looca.rede.grupoDeInterfaces.interfaces[0].bytesRecebidos/1000000  // Transformando o valor "CRU" do dado em megabytes (TRATADO)
    var redeDownloadRAW = looca.rede.grupoDeInterfaces.interfaces[0].bytesRecebidos
    var redeUpload = looca.rede.grupoDeInterfaces.interfaces[0].bytesEnviados/1000000
    var redeUploadRAW = looca.rede.grupoDeInterfaces.interfaces[0].bytesEnviados
    val dataHora = LocalDateTime.now()


}