package app
import LeituraSOThread
import Repository
import javax.swing.JOptionPane
import java.io.File

open class Main {
    companion object {

        var servidor_capt: String? = null

        @JvmStatic
        fun main(args: Array<String>){


            val repository = Repository()
            repository.iniciar()


            var servidor_capt = JOptionPane.showInputDialog(
                """ 
                            Olá, seja bem vindo! 
                        Por favor insira o servidor para
                         iniciar sistema de captura.
                """.trimIndent()
            ).toString()

            var serverIP: String = servidor_capt
            var idServidor: Int = repository.BuscarServidor(serverIP)
            while (idServidor == 0) {
                JOptionPane.showMessageDialog(null, "Id não reconhecido")
                var serverIP = JOptionPane.showInputDialog(
                    """ 
                            Olá, seja bem vindo! 
                        Por favor insira o servidor para
                         iniciar sistema de captura.
                """.trimIndent()
                ).toString()
                idServidor = repository.BuscarServidor(serverIP)
            }

            val nomePy = "SolucaoAerids.py"
            val arqPy = File(nomePy)
            arqPy.writeText("import psutil\n" +
                    "import mysql.connector\n" +
                    "\n" +
                    "# Obtém as informações sobre a memória \n" +
                    "mem_info = psutil.virtual_memory()\n" +
                    "\n" +
                    "# Obtém as informações específicas sobre memória swap\n" +
                    "swap_info = psutil.swap_memory()\n" +
                    "id = 1\n" +
                    "\n" +
                    "#descomente abaixo para funcionar no kotlin\n" +
                    "id = ${idServidor}\n" +
                    "\n" +
                    "def bytes_to_gigabytes(bytes_value):\n" +
                    "    gigabytes = bytes_value / (1024 ** 3)\n" +
                    "    return gigabytes\n" +
                    "\n" +
                    "bytes_value = 1073741824  # 1 gigabyte em bytes\n" +
                    "gigabytes = bytes_to_gigabytes(bytes_value)\n" +
                    "print(f\"{bytes_value} bytes é equivalente a {gigabytes:.2f} gigabytes\")\n" +
                    "\n" +
                    "\n" +
                    "print(\"Iniciando captura de memória swap\")\n" +
                    "\n" +
                    "print(f\"Uso total de memória: {to_giga} bytes\")\n" +
                    "print(f\"Uso total de memória: {mem_info.total} bytes\")\n" +
                    "\n" +
                    "print(f\"Uso de memória swap total: {swap_info.total} bytes\")\n" +
                    "print(f\"Uso de memória swap disponível: {swap_info.free} bytes\")\n" +
                    "print(f\"Percentual de uso de memória swap: {swap_info.percent}%\")\n")



                    val leituraSOThread = LeituraSOThread(repository, servidor_capt, idServidor)
            leituraSOThread.start()


            Thread.sleep(1000)
            while (true) {
                val parar = JOptionPane.showInputDialog(
                    """
                    Para PARAR a captura digite '1' 
                """.trimIndent()
                )
                if (parar == "1") {
                    System.exit(0)
                }
            }


        }

    }
}
