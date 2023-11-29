import com.github.britooo.looca.api.core.Looca
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

class LoocaAPI {

    val looca = Looca()

    val cpu = looca.processador.uso
    val temperatura = looca.temperatura.temperatura
    val dataHora = LocalDateTime.now().format(
        DateTimeFormatter.ofPattern("yyyy-MM-dd hh:mm:ss"))
}