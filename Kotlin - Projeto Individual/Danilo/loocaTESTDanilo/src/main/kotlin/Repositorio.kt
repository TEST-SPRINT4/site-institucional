import org.springframework.jdbc.core.BeanPropertyRowMapper
import org.springframework.jdbc.core.JdbcTemplate
import java.time.LocalDateTime

class repository {

    lateinit var jdbcTemplate: JdbcTemplate

    fun iniciar() {
        jdbcTemplate = Conexao().conectar()
    }

    fun discoUso(novoComponente: LoocaAPI) {
        jdbcTemplate.update("""
        insert into RegistrosTRUSTED (dadosCapturados, dataHora, fkComponente, fkIdservidor)
        values
        (${novoComponente.discoUso}, '${LocalDateTime.now()}', 3, 2)
        """)
    }
    fun DiscoTotal(novoComponente: LoocaAPI){
        jdbcTemplate.update("""
        insert into RegistrosTRUSTED (dadosCapturados, dataHora, fkComponente, fkIdservidor)
        values
        (${novoComponente.discoTotal}, '${LocalDateTime.now()}', 6, 2)
        """)
    }


}