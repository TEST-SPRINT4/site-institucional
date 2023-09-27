//Encapsulamento é o processo de esconder todos os detalhes de um objeto que não contribuem

fun main() {
    val estado1 = Estado()

    estado1.nome = "São Paulo"
    estado1.uf = "sp"

    println("A sigla de ${estado1.nome} é ${estado1.uf}")
    println("A sigla de ${estado1.nome} é ${estado1.uf}")
    println("A sigla de ${estado1.nome} é ${estado1.uf}")


    val estado2 = Estado()

    println("A sigla de ${estado2.nome} é ${estado2.uf}")

    estado1.populacao = 900
    estado2.populacao = -100

    println("Habitantes do estado1: ${estado1.populacao}")
    println("Habitantes do estado2: ${estado2.populacao}")
}