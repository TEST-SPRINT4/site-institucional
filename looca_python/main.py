import mysql.connector #biblioteca responsável pela conexão com o mysql
import psutil
import time
from datetime import datetime
import socket
import requests
import json

mensagem = {"text": "Olá, bem vindo. O sistema da TEST foi iniciado!"}
webhook = "https://hooks.slack.com/services/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"

requests.post(webhook, data=json.dumps(mensagem))

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
    uso_em_GB = disco_em_uso / (1024 ** 3) # Tratamento enviando o uso do DISCO em GB
    mem = psutil.virtual_memory()

    #---------------------------------------------------------------

    # Pega o tamanho total da memória
    total_memory = psutil.virtual_memory().total

    # Pega a memória usada em bytes
    used_memory_bytes = psutil.virtual_memory().used

    # Converte a memória usada para MB
    used_memory_mb = used_memory_bytes

    # Calcula a porcentagem de uso da memória
    memory_usage_percent = used_memory_mb / total_memory * 100

    #----------------------------------------------------------------

    dia = datetime.now()
    dataHora = 'Um dispositivo de dado foi conectado as ' + dia.strftime('%d/%m/%Y %H:%M:%S')
    info = psutil.disk_partitions()

    if (uso_da_cpu >= 90):
        uso_da_cpu_formatado = "{:.2f}".format(uso_da_cpu)
        mensagem = {"text": f"O uso da CPU está em {uso_da_cpu_formatado}% (CRÍTICO)"}
        requests.post(webhook, data=json.dumps(mensagem))

    if (uso_do_disco >= 90):
        mensagem = {"text": f"O uso do DISCO está em {uso_do_disco}% (CRÍTICO)"}
        requests.post(webhook, data=json.dumps(mensagem))

    if (memory_usage_percent >= 90):
        memoria_formatado = "{:.2f}".format(memory_usage_percent)
        mensagem = {"text": f"O uso da MEMÓRIA RAM está em {memoria_formatado}% (CRÍTICO)"}
        requests.post(webhook, data=json.dumps(mensagem))


    def tratar_uso_da_cpu(uso_da_cpu): # Função de tratamento do uso da CPU, não deixando enviar dados menor que 0 e maior que 100
        if uso_da_cpu < 0 or uso_da_cpu > 100:
            return None
        else:
            return uso_da_cpu


    def tratar_uso_de_memoria_ram(used_memory_mb): # Função de tratamento do uso da memória RAM, não deixando enviar dados menor que 0 e dados maior que tamanho da memoria
        if used_memory_mb < 0 or used_memory_mb > mem.total:
            return None
        else:
            return used_memory_mb



# Valores obtidos das métricas do sistema
    processador = tratar_uso_da_cpu(uso_da_cpu)
    memoriaRAM = tratar_uso_de_memoria_ram(used_memory_mb)
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
