fun main() {

    var componente = LoocaAPI()

    while (true) {
        Repositorio().RegistroCPU(componente)
        Repositorio().RegistroTEMPERATURA(componente)

        Thread.sleep(5000)
    }
}