import mysql.connector #biblioteca responsável pela conexão com o mysql
import psutil
import time
from datetime import datetime
import requests #Biblioteca responsável por conectar o SLACK com o pyhton
import json #Slack também.
# import speedtest --> UTILIZADA NO ARQUIVO 2

mensagem = {"text": "Olá, bem vindo. O sistema da TEST foi iniciado!"}
webhook = "https://hooks.slack.com/services/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"

print("Olá, bem vindo. O sistema da TEST foi iniciado!")

requests.post(webhook, data=json.dumps(mensagem))

connection = mysql.connector.connect(
    host='localhost',
    user='root',
    password='0212',
    database='test'
)

cursor = connection.cursor()

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
    mem_used = mem.used
    uso_memoria_gb = round(mem.used / (1024 ** 3), 2)

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

    uso_da_cpu_int = int(uso_da_cpu)
    if 50 <= uso_da_cpu_int <= 80:
        uso_da_cpu_formatado = "{:.2f}".format(uso_da_cpu)
        mensagem = {"text": f"O uso da CPU está em {uso_da_cpu_formatado}% (ALERTA)"}
        requests.post(webhook, data=json.dumps(mensagem))

    uso_do_disco_int = int(uso_do_disco)
    if  60 <= uso_do_disco_int <= 80:
        mensagem = {"text": f"O uso do DISCO está em {uso_do_disco}% (ALERTA)"}
        requests.post(webhook, data=json.dumps(mensagem))

    memory_usage_percent_int = int(memory_usage_percent)
    if  60 <= memory_usage_percent_int <= 80:
        memoria_formatado = "{:.2f}".format(memory_usage_percent)
        mensagem = {"text": f"O uso da MEMÓRIA RAM está em {memoria_formatado}% (ALERTA)"}
        requests.post(webhook, data=json.dumps(mensagem))


    if (uso_da_cpu_int >= 80):
        uso_da_cpu_formatado = "{:.2f}".format(uso_da_cpu)
        mensagem = {"text": f"O uso da CPU está em {uso_da_cpu_formatado}% (PERIGO)"}
        requests.post(webhook, data=json.dumps(mensagem))

    if (uso_do_disco_int >= 80):
        mensagem = {"text": f"O uso do DISCO está em {uso_do_disco}% (PERIGO)"}
        requests.post(webhook, data=json.dumps(mensagem))

    if (memory_usage_percent_int >= 80):
        memoria_formatado = "{:.2f}".format(memory_usage_percent)
        mensagem = {"text": f"O uso da MEMÓRIA RAM está em {memoria_formatado}% (PERIGO)"}
        requests.post(webhook, data=json.dumps(mensagem))


    def tratar_uso_da_cpu(uso_da_cpu): # Função de tratamento do uso da CPU, não deixando enviar dados menor que 0 e maior que 100
        if uso_da_cpu < 0 or uso_da_cpu > 100:
            return None
        else:
            return uso_da_cpu


    def tratar_uso_de_memoria_ram(uso_memoria_gb): # Função de tratamento do uso da memória RAM, não deixando enviar dados menor que 0 e dados maior que tamanho da memoria
        if uso_memoria_gb < 0 or uso_memoria_gb > mem.total:
            return None
        else:
            return uso_memoria_gb



# Valores obtidos das métricas do sistema
    processador = tratar_uso_da_cpu(uso_da_cpu)
    memoriaRAM = tratar_uso_de_memoria_ram(uso_memoria_gb)
    armazenamento = (uso_em_GB)
    armazenamento_arredondado = round(float(armazenamento), 2)
    memoriaRAM_arredondado = round(float(memoriaRAM), 2)
    processador_arredondo = round(float(processador), 2)

    # SQL para inserir na tabela RegistrosTRUSTED (CPU)
    sql22 = "INSERT INTO RegistrosTRUSTED (dadosCapturados, dataHora, fkComponente, fkIdservidor) VALUES (%s, %s, %s, %s)"
    values22 = (processador_arredondo, dia.strftime('%Y-%m-%d %H:%M:%S'), 1, 1)

    sql33 = "INSERT INTO RegistrosTRUSTED (dadosCapturados, dataHora, fkComponente, fkIdservidor) VALUES (%s, %s, %s, %s)"
    values33 = (memoriaRAM_arredondado, dia.strftime('%Y-%m-%d %H:%M:%S'), 2, 1)

    sql44 = "INSERT INTO RegistrosTRUSTED (dadosCapturados, dataHora, fkComponente, fkIdservidor) VALUES (%s, %s, %s, %s)"
    values44 = (armazenamento_arredondado, dia.strftime('%Y-%m-%d %H:%M:%S'), 3, 1)

    # sql55 = "INSERT INTO RegistrosTRUSTED (dadosCapturados, dataHora, fkComponente, fkIdservidor) VALUES (%s, %s, %s, %s)"
    # values55 = (round(ping_latency, 2), dia.strftime('%Y-%m-%d %H:%M:%S'), 4, 1)
    #
    # # # SQL para inserir na tabela RegistrosRAW (CPU)
    # sql2 = "INSERT INTO RegistrosRAW (dadosCapturados, dataHora, fkComponente, fkIdservidor) VALUES (%s, %s, %s, %s)"
    # values2 = (ping_latency, dia.strftime('%Y-%m-%d %H:%M:%S'), 4, 1)

    sql3 = "INSERT INTO RegistrosRAW (dadosCapturados, dataHora, fkComponente, fkIdservidor) VALUES (%s, %s, %s, %s)"
    values3 = (disco_em_uso, dia.strftime('%Y-%m-%d %H:%M:%S'), 3, 1)

#Aqui, independente do valor e dos alertas os dados serão inseridos
    try:
        # Executa a inserção
        # cursor.execute(sql2, values2)
        cursor.execute(sql3, values3)
        cursor.execute(sql22, values22)
        cursor.execute(sql33, values33)
        cursor.execute(sql44, values44)
        # cursor.execute(sql55, values55)

        # Confirma as alterações no banco de dados
        connection.commit()
        print("Inserção de dados realizada com sucesso!")

    except mysql.connector.Error as err:
        print("Erro ao inserir nas tabelas Registros:", err)

    time.sleep(1)
