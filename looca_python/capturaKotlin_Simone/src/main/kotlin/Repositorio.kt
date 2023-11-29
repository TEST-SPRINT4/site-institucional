import org.springframework.jdbc.core.JdbcTemplate

class Repositorio {

    var jdbcTemplate = Conexao().conectar()

    fun RegistroCPU(novoComponente: LoocaAPI) {
        jdbcTemplate.update("""
        insert into RegistrosTRUSTED (dadosCapturados, dataHora, fkComponente, fkIdServidor)
        values
        (${novoComponente.cpu}, '${novoComponente.dataHora}', 1, 1)
        """)
    }

    fun RegistroTEMPERATURA(novoComponente: LoocaAPI) {
        jdbcTemplate.update("""
        insert into RegistrosTRUSTED (dadosCapturados, dataHora, fkComponente, fkIdServidor)
        values
        (${novoComponente.temperatura}, '${novoComponente.dataHora}', 12, 1)
        """)
    }
}