import org.springframework.jdbc.core.BeanPropertyRowMapper
import org.springframework.jdbc.core.JdbcTemplate

class repository {

    lateinit var jdbcTemplate: JdbcTemplate

    fun iniciar() {
        jdbcTemplate = Conexao().conectar()
    }

    fun RegistroREDEUPLOAD(novoComponente: LoocaAPI) {
        jdbcTemplate.update("""
        insert into RegistrosRAW (dadosCapturados, dataHora, fkComponente, fkIpservidor)
        values
        (${novoComponente.redeUpload}, '${novoComponente.dataHora}', 4, '${novoComponente.ip}')
        """)
    }

    fun RegistroREDEDOWNLOAD(novoComponente: LoocaAPI) {
        jdbcTemplate.update("""
        insert into RegistrosRAW (dadosCapturados, dataHora, fkComponente, fkIpservidor)
        values
        (${novoComponente.redeDowload}, '${novoComponente.dataHora}', 5, '${novoComponente.ip}')
        """)
    }

}