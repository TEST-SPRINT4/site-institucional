class Estado {
    var nome: String = ""
        get() {
            return if(field.isBlank())"(Não informado)"
                else field
            //Usando chaves e return
            //Informando se o cmapo ficoiu em branco
        }

    var uf: String = ""
        get() = field.uppercase() //esse get é uma regra para TODA VEZ que o valor for atribuido ele ser apresentado de outra forma (mas não altera o valor principal)

    var populacao: Int = 0
        set(value) { // set altera o valor original conforme as regras
            if(value >= 0){
                field = value
            }
        }

}