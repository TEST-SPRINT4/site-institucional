fun main() {

    var componente = LoocaAPI()

    while (true) {

        println("Inserção realizada!")
        Repositorio().RegistroCPU(componente)
        Repositorio().RegistroTEMPERATURA(componente)

        Thread.sleep(5000)
    }
}