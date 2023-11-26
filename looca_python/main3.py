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
    password='sarabi3011',
    database='test'
)

cursor = connection.cursor()

#Criando a estrutura de repetição para que os valores dos componentes se atualizam
while True:
  
    uso_do_disco = psutil.disk_usage('C:\\').percent
    info_disco = psutil.disk_usage('C:\\')
    tamanho_disco = info_disco.total
    disco_em_uso = info_disco.used
    tamanho_em_GB = tamanho_disco / (1024 ** 3)
    uso_em_GB = disco_em_uso / (1024 ** 3) # Tratamento enviando o uso do DISCO em GB
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

    uso_do_disco_int = int(uso_do_disco)
    if  60 <= uso_do_disco_int <= 80:
        mensagem = {"text": f"O uso do DISCO está em {uso_do_disco}% (ALERTA)"}
        requests.post(webhook, data=json.dumps(mensagem))



    if (uso_do_disco_int >= 80):
        mensagem = {"text": f"O uso do DISCO está em {uso_do_disco}% (PERIGO)"}
        requests.post(webhook, data=json.dumps(mensagem))



# Valores obtidos das métricas do sistema
 
    armazenamento = (uso_em_GB)
    armazenamento_arredondado = round(float(armazenamento), 2)

    # SQL para inserir na tabela RegistrosTRUSTED (CPU)

    sql3 = "INSERT INTO RegistrosRAW (dadosCapturados, dataHora, fkComponente, fkIdservidor) VALUES (%s, %s, %s, %s)"
    values3 = (disco_em_uso, dia.strftime('%Y-%m-%d %H:%M:%S'), 3, 1)

    sql88 = "INSERT INTO RegistrosTRUSTED (dadosCapturados, dataHora, fkComponente, fkIdservidor) VALUES (%s, %s, %s, %s)"
    values88 = (tamanho_disco_GB, data_hora, 7, 1)  # Ajuste os valores de fkComponente e fkIdservidor conforme sua tabela


#Aqui, independente do valor e dos alertas os dados serão inseridos
    try:
        # Executa a inserção
        cursor.execute(sql3,values3)
        cursor.execute(sql88, values88)
        # Confirma as alterações no banco de dados
        connection.commit()
        print("Inserção de dados realizada com sucesso!")

    except mysql.connector.Error as err:
        print("Erro ao inserir nas tabelas Registros:", err)

    time.sleep(1)
