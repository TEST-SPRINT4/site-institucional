import org.apache.commons.dbcp2.BasicDataSource

import org.springframework.jdbc.core.JdbcTemplate

class Conexao {
    var jdbcTemplate: JdbcTemplate? = null
        get() {
            if (field == null){

                val dataSource = BasicDataSource()

                dataSource.driverClassName = "com.microsoft.sqlserver.jdbc.SQLServerDriver"
                dataSource.url = "jdbc:sqlserver://52.45.220.247;database=test;encrypt=false;trustServerCertificate=false"
                dataSource.username = "sa"
                dataSource.password = "sptech"

                val novojdbcTmeplate = JdbcTemplate(dataSource)

                field = novojdbcTmeplate

            }
            return field
        }

    fun iniciarSqlServer(){
        jdbcTemplate = jdbcTemplate!!
    }
}