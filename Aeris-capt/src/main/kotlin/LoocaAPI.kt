import com.github.britooo.looca.api.core.Looca
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

class LoocaAPI {

    val looca = Looca()


    val cpuRaw = looca.processador.uso
    val ramRaw = (looca.memoria.emUso.toDouble()/1024/1024/1024)
    val dataHoraSemFormatacao = LocalDateTime.now()
    val dataHora =  dataHoraSemFormatacao.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS"))

}