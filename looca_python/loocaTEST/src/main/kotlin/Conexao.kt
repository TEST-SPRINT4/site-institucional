import org.apache.commons.dbcp2.BasicDataSource
import org.springframework.jdbc.core.JdbcTemplate

class Conexao {
    fun conectar(): JdbcTemplate {
        val dataSource = BasicDataSource()
        dataSource.driverClassName = "com.mysql.cj.jdbc.Driver"
        dataSource.url = "jdbc:mysql://localhost:3306/test?useSSL=false"
        dataSource.username = "root"
        dataSource.password = "APUXxx2707"
        return JdbcTemplate(dataSource)
    }

}