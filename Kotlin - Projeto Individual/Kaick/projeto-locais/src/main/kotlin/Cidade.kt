class Cidade {
    //Um mesmo campo pode ter tanto get() quanto set()

    /*
    Encapsule o nome de tal forma que:
    1. Só aceita valores entre 3 e 20 caracteres(dica, use o .length)
    2. Sempre que for solicitado seu valor:
        - caso não esteja vazio, retorne o valor em caixa alta
        - caso contrario, retorne "(não informado)"
    */

    var nome: String = ""
        set(value) {
            if(value.length in 3..20){
                field = value
            }
        }
        get() {
            if (field.isNotBlank()){
                return field.uppercase()
            }else{
                return "(não informado)"
            }
        }

}