import org.springframework.jdbc.core.BeanPropertyRowMapper
import org.springframework.jdbc.core.JdbcTemplate

class repository {

    lateinit var jdbcTemplate: JdbcTemplate

    fun iniciar() {
        jdbcTemplate = Conexao().conectar()
    }

    fun RegistroPacoRecebidos(novoComponente: LoocaAPI) {
        jdbcTemplate.update("""
        insert into RegistrosTRUSTED (dadosCapturados, dataHora, fkComponente, fkIdservidor)
        values
        (${novoComponente.PacoRecebidos}, '${novoComponente.dataHora}', 4, 1)
        """)
    }

    fun RegistroPacoRecebidosRAW(novoComponente: LoocaAPI) {
        jdbcTemplate.update("""
        insert into RegistrosRAW (dadosCapturados, dataHora, fkComponente, fkIdservidor)
        values
        (${novoComponente.PacoRecebidosRAW}, '${novoComponente.dataHora}', 4, 1)
        """)
    }

    fun RegistroPacEnviados(novoComponente: LoocaAPI) {
        jdbcTemplate.update("""
        insert into RegistrosTRUSTED (dadosCapturados, dataHora, fkComponente, fkIdservidor)
        values
        (${novoComponente.PacEnviados}, '${novoComponente.dataHora}', 5, 1)
        """)
    }

    fun RegistroPacEnviadosRAW(novoComponente: LoocaAPI) {
        jdbcTemplate.update("""
        insert into RegistrosRAW (dadosCapturados, dataHora, fkComponente, fkIdservidor)
        values
        (${novoComponente.PacEnviadosRAW}, '${novoComponente.dataHora}', 5, 1)
        """)
    }

    fun RegistrocpuRaw(novoComponente: LoocaAPI) {
        jdbcTemplate.update("""
            insert into RegistrosRAW (dadosCapturados, dataHora, fkComponente, fkIdservidor)
            values
            (${novoComponente.cpuRaw}, '${novoComponente.dataHora}', 1, 1)
        """.trimIndent())
    }

    fun RegistroramRaw(novoComponente: LoocaAPI) {
        jdbcTemplate.update("""
            insert into RegistrosRAW (dadosCapturados, dataHora, fkComponente, fkIdservidor)
            values
            (${novoComponente.ramRaw}, '${novoComponente.dataHora}', 2, 1)
        """.trimIndent())
    }

}