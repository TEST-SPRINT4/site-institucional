import app.Main.Companion.servidor_capt
import org.springframework.jdbc.core.JdbcTemplate

class Repository {

    lateinit var jdbcTemplate: JdbcTemplate

    var serverIP: String? = servidor_capt

    fun iniciar(){
        jdbcTemplate = Conexao().conectar()
    }


    fun BuscarServidor(serverIP: String?) : Int {
        try {
            var idServidor: Int  = jdbcTemplate.queryForObject("""select idServidor from Servidor where enderecoIP = '${serverIP}';
        """,Int::class.java)

            return idServidor

        } catch (EmptyResultDataAccessException: Exception){
            return 0
        }
    }


    fun RegistrocpuRaw(novoComponente: LoocaAPI , idServidor:Int) {

        jdbcTemplate.update("""
            insert into RegistrosTRUSTED (dadosCapturados, dataHora, fkComponente, fkIdServidor)
            values
            (${novoComponente.cpuRaw}, '${novoComponente.dataHora}', 1, ${idServidor})
        """.trimIndent())
    }

    fun RegistroramRaw(novoComponente: LoocaAPI , idServidor:Int) {

        jdbcTemplate.update("""
            insert into RegistrosTRUSTED (dadosCapturados, dataHora, fkComponente, fkIdServidor)
            values
            (${novoComponente.ramRaw}, '${novoComponente.dataHora}', 2, ${idServidor}) 
        """.trimIndent())
    }




}