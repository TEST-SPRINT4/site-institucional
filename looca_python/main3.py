import mysql.connector  # biblioteca responsável pela conexão com o MySQL
import psutil
import time
from datetime import datetime
import requests  # Biblioteca responsável por conectar o Slack com o Python
import json

mensagem = {"text": "Olá, bem vindo. O sistema da TEST foi iniciado!"}
webhook = "https://hooks.slack.com/services/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"

print("Olá, bem vindo. O sistema da TEST foi iniciado!")
requests.post(webhook, data=json.dumps(mensagem))

connection = mysql.connector.connect(
    host='localhost',
    user='root',
    password='atauine1',
    database='test'
)


cursor = connection.cursor()

while True:
    uso_do_disco = psutil.disk_usage('C:\\').percent
    info_disco = psutil.disk_usage('C:\\')
    tamanho_disco = info_disco.total
    disco_em_uso = info_disco.used
    tamanho_disco_GB = tamanho_disco / (1024 ** 3)
    uso_em_GB = disco_em_uso / (1024 ** 3)

    dia = datetime.now()
    dataHora = dia.strftime('%Y-%m-%d %H:%M:%S')

    uso_do_disco_int = int(uso_do_disco)

    if 60 <= uso_do_disco_int <= 80:
        mensagem = {"text": f"O uso do DISCO está em {uso_do_disco}% (ALERTA)"}
        requests.post(webhook, data=json.dumps(mensagem))

    if uso_do_disco_int >= 80:
        mensagem = {"text": f"O uso do DISCO está em {uso_do_disco}% (PERIGO)"}
        requests.post(webhook, data=json.dumps(mensagem))

    values88 = (tamanho_disco_GB, dataHora, 7, 1)  # Ajuste os valores de fkComponente e fkIdservidor conforme sua tabela

    try:
        sql88 = "INSERT INTO RegistrosTRUSTED (dadosCapturados, dataHora, fkComponente, fkIdservidor) VALUES (%s, %s, %s, %s)"
        cursor.execute(sql88, values88)
        connection.commit()
        print("Inserção de dados realizada com sucesso!")

    except mysql.connector.Error as err:
        print("Erro ao inserir nas tabelas Registros:", err)

    time.sleep(1)
