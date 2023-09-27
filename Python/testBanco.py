import psutil
import threading
import time
import keyboard
import mysql.connector

event = threading.Event()
print(event)

def stop():
    event.set()
    print("\nFinalizando monitoramento")
    print(event)

keyboard.add_hotkey("esc", stop)

print('monitorando energia...')
while (True):
    tempMax = int(input("Digite em segundos a quantidade de tempo que o sistema deve rodar, caso queira por um tempo indeterminado, digite 0: "))
    intervalo = 0
    if(tempMax == 0):
        intervalo = int(input("Então, digite a cada quanto tempo, em segundos, que os dados devem ser capturados: "))
    else:
        qtd = int(input("Digite a quantidade de capturas que o sistema deve capturar durante o tempo especificado acima: "))
        intervalo = tempMax / qtd

    while not event.is_set():
        porcentCPU = psutil.cpu_percent()#cpu_utilizacao

        freqCPU = psutil.cpu_freq().max
        convertfreqCPU = freqCPU / 1000#cpu_velocidade

        utilram = psutil.virtual_memory().used
        gigautilram = utilram * 0.000000001
        gigatotalram =  psutil.virtual_memory().total * 0.000000001
        porcentutilram = gigautilram / gigatotalram * 100#memoria_usada

        disram = psutil.virtual_memory().available
        gigadisram = disram * 0.000000001
        gigatotalram =  psutil.virtual_memory().total * 0.000000001
        porcentdisram = gigadisram / gigatotalram * 100#memoria_disponivel

        disco_velocidadeLeitura = None#disco_velocidadeLeitura
        disco_velocidadeGravacao = None#disco_velocidadeGravacao

        utildisco = psutil.disk_usage("C:\\").used
        gigautildisco = utildisco * 0.000000001
        gigatotaldisco = psutil.disk_usage("C:\\").total * 0.000000001
        porcentutildisco = gigautildisco / gigatotaldisco * 100#disco_usado

        disdisco = psutil.disk_usage("C:\\").free
        gigadisdisco = disdisco * 0.000000001
        gigatotaldisco = psutil.disk_usage("C:\\").total * 0.000000001
        porcentdisdisco = gigadisdisco / gigatotaldisco * 100#disco_disponivel

        rede_upload = None#rede_upload
        rede_dowload = None#rede_dowload
        rede_latencia = None#rede_latencia
        rede_packetLoss = None#rede_packetLoss

        try:
            mydb = mysql.connector.connect(host = 'localhost', port = "3306",user = 'aluno', password = 'sptech', database = 'test')
            if mydb.is_connected():
                db_info = mydb.get_server_info()
                #print("Conectado ao MySQL Server versão ",db_info)

                mycursor = mydb.cursor()

                sql_query = "INSERT INTO dadosHardware (cpu_utilizacao, cpu_velocidade, memoria_usada, memoria_disponivel, disco_velocidadeLeitura, disco_velocidadeGravacao, disco_usado, disco_disponivel, rede_upload, rede_dowload, rede_latencia, rede_packetLoss, data_hora, fk_instituicao, fk_curso, fk_computador) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, current_timestamp() ,%s, %s, %s, %s)"
                val = [porcentCPU, convertfreqCPU, porcentutilram, porcentdisram, disco_velocidadeLeitura, disco_velocidadeGravacao, porcentutildisco, porcentdisdisco, rede_upload, rede_dowload, rede_latencia, rede_packetLoss, 1, 1, 1]
                mycursor.execute(sql_query,val)

                mydb.commit()
                print(mycursor.rowcount, "registro inserido")
        except mysql.connector.Error as e:
            print("Erro ao conectar com o MySQL", e)
        finally:
            if(mydb.is_connected()):
                mycursor.close()
                mydb.close()

        time.sleep(intervalo)
