import psutil
import mysql.connector

# Obtém as informações sobre a memória 
mem_info = psutil.virtual_memory()

# Obtém as informações específicas sobre memória swap
swap_info = psutil.swap_memory()
id = 1

#descomente abaixo para funcionar no kotlin
id = 1

def bytes_to_gigabytes(bytes_value):
    gigabytes = bytes_value / (1024 ** 3)
    return gigabytes

bytes_value = 1073741824  # 1 gigabyte em bytes
gigabytes = bytes_to_gigabytes(bytes_value)
print(f"{bytes_value} bytes é equivalente a {gigabytes:.2f} gigabytes")


print("Iniciando captura de memória swap")

print(f"Uso total de memória: {to_giga} bytes")
print(f"Uso total de memória: {mem_info.total} bytes")

print(f"Uso de memória swap total: {swap_info.total} bytes")
print(f"Uso de memória swap disponível: {swap_info.free} bytes")
print(f"Percentual de uso de memória swap: {swap_info.percent}%")
