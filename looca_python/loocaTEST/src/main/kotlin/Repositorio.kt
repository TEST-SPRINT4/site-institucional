import org.springframework.jdbc.core.BeanPropertyRowMapper
import org.springframework.jdbc.core.JdbcTemplate
import java.time.LocalDateTime

class repository {

    lateinit var jdbcTemplate: JdbcTemplate

    fun iniciar() {
        jdbcTemplate = Conexao().conectar()
    }

    fun RegistroPacoRecebidos(novoComponente: LoocaAPI) {
        jdbcTemplate.update("""
        insert into RegistrosTRUSTED (dadosCapturados, dataHora, fkComponente, fkIdservidor)
        values
        (${novoComponente.PacoRecebidos}, '${LocalDateTime.now()}', 4, 1)
        """)
    }

    fun RegistroPacoRecebidosRAW(novoComponente: LoocaAPI) {
        jdbcTemplate.update("""
        insert into RegistrosRAW (dadosCapturados, dataHora, fkComponente, fkIdservidor)
        values
        (${novoComponente.PacoRecebidosRAW}, '${LocalDateTime.now()}', 4, 1)
        """)
    }

    fun RegistroPacEnviados(novoComponente: LoocaAPI) {
        jdbcTemplate.update("""
        insert into RegistrosTRUSTED (dadosCapturados, dataHora, fkComponente, fkIdservidor)
        values
        (${novoComponente.PacEnviados}, '${LocalDateTime.now()}', 5, 1)
        """)
    }

    fun RegistroPacEnviadosRAW(novoComponente: LoocaAPI) {
        jdbcTemplate.update("""
        insert into RegistrosRAW (dadosCapturados, dataHora, fkComponente, fkIdservidor)
        values
        (${novoComponente.PacEnviadosRAW}, '${LocalDateTime.now()}', 5, 1)
        """)
    }

    fun RegistrocpuRaw(novoComponente: LoocaAPI) {
        jdbcTemplate.update("""
            insert into RegistrosRAW (dadosCapturados, dataHora, fkComponente, fkIdservidor)
            values
            (${novoComponente.cpuRaw}, '${LocalDateTime.now()}', 1, 1)
        """.trimIndent())
    }

    fun RegistroramRaw(novoComponente: LoocaAPI) {
        jdbcTemplate.update("""
            insert into RegistrosRAW (dadosCapturados, dataHora, fkComponente, fkIdservidor)
            values
            (${novoComponente.ramRaw}, '${LocalDateTime.now()}', 2, 1)
        """.trimIndent())
    }

}