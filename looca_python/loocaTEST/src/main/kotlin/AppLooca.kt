import com.github.britooo.looca.api.group.memoria.Memoria


fun main() {
    val repository = repository()
    repository.iniciar()
    while (true){
        val looca = LoocaAPI()

        repository.RegistroREDEUPLOAD(looca)
        repository.RegistroREDEDOWNLOAD(looca)
        repository.RegistroREDEDOWNLOADRAW(looca)
        repository.RegistroREDEUPLOADRAW(looca)
        println("rede Upload S/ TRATAMENTO: ${looca.redeUploadRAW}")
        println("rede Upload TRATADO: ${looca.redeUpload}")
        println("rede Download S/ TRATAMENTO: ${looca.redeDownloadRAW}")
        println("rede Download TRATADO: ${looca.redeDownload}")
        println("data Hora: ${looca.dataHora}")
        Thread.sleep(5000) // milissegundos
    }






}
