import org.springframework.jdbc.core.JdbcTemplate

class Repositorio {

    var jdbcTemplate = Conexao().jdbcTemplate!!

    fun RegistroCPU(novoComponente: LoocaAPI) {
        jdbcTemplate.update("""
        insert into RegistrosTRUSTED (dadosCapturados, dataHora, fkComponente, fkIdServidor)
        values
        (${novoComponente.cpu}, '${novoComponente.dataHora}', 1, 5)
        """)
    }

    fun RegistroTEMPERATURA(novoComponente: LoocaAPI) {
        jdbcTemplate.update("""
        insert into RegistrosTRUSTED (dadosCapturados, dataHora, fkComponente, fkIdServidor)
        values
        (${novoComponente.temperatura}, '${novoComponente.dataHora}', 13, 5)
        """)
    }
}