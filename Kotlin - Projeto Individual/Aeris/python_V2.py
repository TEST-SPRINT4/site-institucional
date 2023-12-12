import psutil
import mysql.connector
import pymssql
import time
from datetime import datetime

data_hora_local = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

#colocar id do server
id = 4


def bytes_para_gb(bytes_value):
    return bytes_value / (1024 ** 3)



#dia = datetime.now()

while(True):
   # Configurações SQL Server
    sql_server_cnx = pymssql.connect(
    server='52.45.220.247',
    database='test',
    user='sa',
    password='sptech'
    )
    cursor_sql_server = sql_server_cnx.cursor()


    # Obtém as informações sobre a memória 
    mem_info = psutil.virtual_memory()

    # Obtém as informações específicas sobre memória swap
    swap_info = psutil.swap_memory()
    memoriaSwapPorcentagem = psutil.swap_memory().percent
    memoriaSwapUso = '{:.2f}'.format(bytes_para_gb(psutil.swap_memory().used))
    #print(f"{bytes_value} bytes é equivalente a {gigabytes:.2f} gigabytes")

    print('\nPorcentagem usada de memoria Swap: ', memoriaSwapPorcentagem,
              '\nQuantidade usada de memoria Swap: ', memoriaSwapUso)

    sql1 = "INSERT INTO RegistrosTRUSTED (dadosCapturados, dataHora, fkComponente, fkIdServidor) VALUES (%s, %s, %s, %s);"
    values1 = (memoriaSwapUso, data_hora_local, 14, 4)

    try:
        cursor_sql_server.execute(sql1, values1)

        sql_server_cnx.commit()
        print('Inserção de dados realizada com sucesso!')

    except pymssql.Error as err:
        print('Erro ao inserir nas tabelas Registros do SQL Server:', err)

    finally:
        sql_server_cnx.close()

    time.sleep(5)
