import com.github.britooo.looca.api.core.Looca
import java.time.LocalDateTime

class LoocaAPI {

    val looca = Looca()

    val cpu = looca.processador.uso
    val temperatura = looca.temperatura.temperatura
    val dataHora = LocalDateTime.now()

}