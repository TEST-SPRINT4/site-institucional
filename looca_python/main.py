import mysql.connector #biblioteca responsável pela conexão com o mysql
import psutil
import time
from datetime import datetime
import ipaddress
import socket
import requests


connection = mysql.connector.connect(
    host='localhost',
    user='root',
    password='0212',
    database='test'
)

cursor = connection.cursor()

# Pegando o IP da maquina (servidor) e inserindo no banco de dados.
def get_ip(): # Função responsável por capturar o ip da maquina
    hostname = socket.gethostname() #socket é o nome da biblioteca usada para a captura do IP
    ip = socket.gethostbyname(hostname) #O método gethostbyname() é uma função útil para obter o endereço IP de um host, seja um host remoto ou o host local.
    return ip

# O idioma de nome principal é um truque que permite executar um código específico apenas se o código for executado como um programa.

# Isso significa que, se você copiar e colar o código em um editor de texto e executá-lo,
# o código específico será executado. No entanto, se você importar o código como um módulo
# em outro programa Python, o código específico não será executado.
if __name__ == "__main__":
    ip = get_ip()
    print(ip)

    sql1 = "INSERT INTO Servidor (enderecoIP, fkInstituicao) VALUES (%s, %s)"
    values1 = (ip, 1)

    try:
        # Executa a inserção
        cursor.execute(sql1, values1)

        # Confirma as alterações no banco de dados
        connection.commit()
        print("Inserção do SERVIDOR realizada com sucesso!")

    except mysql.connector.Error as err:
        print("Erro ao inserir na tabela Servidor:", err)

#Criando a estrutura de repetição para que os valores dos componentes se atualizam
while True:
    limite_uso_cpu = 90
    limite_uso_disco = 90
    uso_da_cpu = psutil.cpu_percent(interval=1)
    uso_do_disco = psutil.disk_usage('C:\\').percent
    info_disco = psutil.disk_usage('C:\\')
    tamanho_disco = info_disco.total
    disco_em_uso = info_disco.used
    tamanho_em_GB = tamanho_disco / (1024 ** 3)
    uso_em_GB = disco_em_uso / (1024 ** 3)
    mem = psutil.virtual_memory()
    used_memory_mb = mem.used / (1024 * 1024)
    dia = datetime.now()
    dataHora = 'Um dispositivo de dado foi conectado as ' + dia.strftime('%d/%m/%Y %H:%M:%S')
    info = psutil.disk_partitions()

# Valores obtidos das métricas do sistema
    processador = (uso_da_cpu)
    memoriaRAM = (used_memory_mb)
    armazenamento = (uso_em_GB)

    # SQL para inserir na tabela RegistrosRAW (CPU)
    sql2 = "INSERT INTO RegistrosRAW (dadosCapturados, dataHora, fkComponente, fkIpservidor) VALUES (%s, %s, %s, %s)"
    values2 = (processador, dia.strftime('%Y-%m-%d %H:%M:%S'), 1, ip)

    sql3 = "INSERT INTO RegistrosRAW (dadosCapturados, dataHora, fkComponente, fkIpservidor) VALUES (%s, %s, %s, %s)"
    values3 = (memoriaRAM, dia.strftime('%Y-%m-%d %H:%M:%S'), 2, ip)

    sql4 = "INSERT INTO RegistrosRAW (dadosCapturados, dataHora, fkComponente, fkIpservidor) VALUES (%s, %s, %s, %s)"
    values4 = (armazenamento, dia.strftime('%Y-%m-%d %H:%M:%S'), 3, ip)



#Aqui, independente do valor e dos alertas os dados serão inseridos
    try:
        # Executa a inserção
        cursor.execute(sql2, values2)
        cursor.execute(sql3, values3)
        cursor.execute(sql4, values4)

        # Confirma as alterações no banco de dados
        connection.commit()
        print("Inserção de dados realizada com sucesso!")

    except mysql.connector.Error as err:
        print("Erro ao inserir na tabela RegistrosRAW:", err)

    time.sleep(5)
