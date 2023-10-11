import com.github.britooo.looca.api.group.memoria.Memoria


fun main() {
    val looca = LoocaAPI()
    val repository = repository()
    repository.iniciar()


    while (true){
//        repository.RegistroREDEUPLOAD(looca)
//        repository.RegistroREDEDOWNLOAD(looca)
        println("rede Upload: ${looca.redeUpload}")
        println("rede Download: ${looca.redeDowload}")
        println("data Hora: ${looca.dataHora}")
        Thread.sleep(1000)
    }






}
