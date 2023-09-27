fun main() {
    val cidadeA = Cidade()

    cidadeA.nome = "XY"
    println(cidadeA.nome)

    cidadeA.nome = "SÃO PAULO"
    println(cidadeA.nome)

    cidadeA.nome = "são paulo"
    println(cidadeA.nome)
}