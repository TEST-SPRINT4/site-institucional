import psutil
import time


# Grupo7 = T.E.S.T.
# Alexandre Damas Murata - RA: 03231054
# Edson Morro Nogueira - RA: 03231036
# Lucas de Andrade Buriola - RA: 03231065
# Paola Ribeiro Gomes - RA: 03231051
# Rafael Henrique Gonçalves Cebrian - RA: 03231031
# Ruan Cardozo Montanari - RA: 03231016



while(True):
    CPU1 = psutil.cpu_percent() + 10
    CPU2 = 1.1 * CPU1
    CPU3 = CPU2 / 0.55
    #print(CPU1)
    print("----------------------------")
    print("| CPU 1  | CPU2  | CPU3    |")
    print("| {:.1f}%".format(CPU1)," | {:.1f}%".format(CPU2),"| {:.1f}%".format(CPU3),"  |")
    print("----------------------------")
    MEMO1 = psutil.virtual_memory().percent
    MEMO2 = MEMO1 * 1.15
    MEMO3 = MEMO2 * 0.55
    #print(MEMO)
    print("| MEMOR1 | MEMOR2 | MEMOR3 |")
    print("| {:.1f}%".format(MEMO1)," | {:.1f}%".format(MEMO2)," | {:.1f}%".format(MEMO3)," |")
    print("----------------------------")
    DISCOCONVERTIDOUSADO = psutil.disk_usage("C:\\").used * 0.000000001
    DISCOCONVERTIDOTOTAL = psutil.disk_usage("C:\\").total * 0.000000001
    DISCO1 = DISCOCONVERTIDOUSADO/ DISCOCONVERTIDOTOTAL * 100
    DISCO2 = 0.95 * DISCO1
    DISCO3 = DISCO2 / 3
    #print (DISCO)
    print("| DISCO1 | DISCO2 | DISCO3 |")
    print("| {:.1f}%".format(DISCO1)," | {:.1f}%".format(DISCO2)," | {:.1f}%".format(DISCO3)," |")
    print("----------------------------")
    print("///////Nova Leitura///////")
    time.sleep(3)

    
