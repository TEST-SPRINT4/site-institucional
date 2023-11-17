import mysql.connector #biblioteca responsável pela conexão com o mysql
# import psutil
import time
from datetime import datetime
import requests #Biblioteca responsável por conectar o SLACK com o pyhton
import json #Slack também.
import speedtest

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

    #Parte do código responsável por capturar a latência da internet que a maquina/servidor está conectado
    st = speedtest.Speedtest()


    # Medir a latência (ping)
    ping_result = st.get_best_server()
    ping_latency = ping_result["latency"]

    print(f"Latência da Internet: {ping_latency} ms")

#     UTILIZADO NO ARQUIVO 2

    #----------------------------------------------------------------

    dia = datetime.now()

    sql55 = "INSERT INTO RegistrosTRUSTED (dadosCapturados, dataHora, fkComponente, fkIdservidor) VALUES (%s, %s, %s, %s)"
    values55 = (round(ping_latency, 2), dia.strftime('%Y-%m-%d %H:%M:%S'), 4, 1)

    # # SQL para inserir na tabela RegistrosRAW (CPU)
    sql2 = "INSERT INTO RegistrosRAW (dadosCapturados, dataHora, fkComponente, fkIdservidor) VALUES (%s, %s, %s, %s)"
    values2 = (ping_latency, dia.strftime('%Y-%m-%d %H:%M:%S'), 4, 1)

#Aqui, independente do valor e dos alertas os dados serão inseridos
    try:
        # Executa a inserção
        cursor.execute(sql2, values2)

        cursor.execute(sql55, values55)

        # Confirma as alterações no banco de dados
        connection.commit()
        print("Inserção de dados realizada com sucesso!")

    except mysql.connector.Error as err:
        print("Erro ao inserir nas tabelas Registros:", err)

    time.sleep(1)
