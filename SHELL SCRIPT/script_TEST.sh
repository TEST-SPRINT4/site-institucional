#!/bin/bash

PURPLE='0;35'
NC='\033[0m' 
VERSAO=11
	
echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Olá, esse é o assistente de instalação da TEST!"
sleep 2

#Criando um novo usuário
echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Você deseja criar um novo usuário? (S/N): "
read criar_user

if [ "$criar_user" == "S" ]; then
    echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Digite o nome do novo usuário: "
    read novo_usuario
    echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Digite a senha para o novo usuário: "
    read nova_senha
    adduser $novo_usuario
    echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) $novo_usuario:$nova_senha" | chpasswd
    usermod -aG su $novo_usuario
    su $novo_usuario
fi

#Fazer update e upgrade
echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Executando update e upgrade..."
sudo apt update
sudo apt upgrade -y
clear
sleep 2

#Verificando e instalando o JAVA
echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Verificando se você possui o Java instalado..."

java -version
if [ $? -eq 0 ]; then
    echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Você já tem o Java instalado!"
else
    echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Você não possui o Java. Deseja instalar? (S/N)?"
    read inst
    if [ "$inst" == "S" ]; then
        echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Instalando o Java... Adicionando o repositório!"
        sleep 2
        sudo apt install openjdk-17-jre -y
        clear
        echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Atualizando! Quase lá..."
        sleep 2
        sudo apt update -y
        clear

        #Atualizando versão 11 do JAVA
        if [ $VERSAO -eq 11 ]; then
            echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Preparando para instalar a versão 11 do Java. Confirme a instalação;"
            sudo apt install default-jre openjdk-11-jre-headless -y
            clear
            echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Java instalado com sucesso!"
        fi
    else
        echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Você optou por não instalar o Java por enquanto."
        echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) ALERTA: Isso pode acarretar problemas na execução do projeto..."
    fi
fi

#Verificando e instalando o PYTHON
echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Verificando se você possui o Python instalado..."

python -version
if [ $? -eq 0 ]; then
    echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Você já tem o Python instalado!"
else
    echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Você não possui o Python. Deseja instalar? (S/N)?"
    read inst
    if [ "$inst" == "S" ]; then
        echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Instalando o Python..."
        sleep 2
        sudo apt install python3 -y
        sudo apt update -y
        clear
    else
        echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Você optou por não instalar o Python por enquanto."
        echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) ALERTA: Isso pode acarretar problemas na execução do projeto..."
    fi
fi

clear

# Instalando bibliotecas do python

python -version
if [ $? -eq 0 ]; then

    echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Instalando a biblioteca pyodbc do Python..."
    sleep 2
    pip install pyodbc

    echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Instalando a biblioteca mysql.connector do Python..."
    sleep 2
    pip install mysql.connector

    echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Instalando a biblioteca psutil do Python..."
    sleep 2
    pip install psutil

    clear

fi


#Verificando e instalando o GIT
echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Verificando se você possui o GIT instalado..."

git -version
if [ $? -eq 0 ]; then
    echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Você já tem o GIT instalado!"
else
    echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Você não possui o GIT. Deseja instalar? (S/N)?"
    read inst
    if [ "$inst" == "S" ]; then
        echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Instalando o GIT..."
        sleep 2
        sudo apt install git -y
        sudo apt update -y
        clear
    else
        echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Você optou por não instalar o GIT por enquanto."
        echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) ALERTA: Não será possível instalar o projeto..."
    fi
fi

git -version
if [ $? -eq 0 ]; then
    echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Clonando projeto com o Git..."
    git clone https://github.com/TEST-SPRINT4/site-institucional
fi



#Verificando e instalando o DOCKER
echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Verificando se você possui o DOCKER instalado..."

docker -version
if [ $? -eq 0 ]; then
    echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Você já tem o Docker instalado!"
else
    echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Você não possui o Docker. Instalando..."
    sleep 2
    sudo apt install docker.io -y
    clear
fi

echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Verificando se o Docker.io foi instalado com sucesso..."
docker --version
if [ $? = 0 ]; then
  sudo systemctl start docker
  sudo systemctl enable docker
else
  echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Docker não instalado corretamente. Saindo..."
  exit 1
fi

echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Instalando imagem MySQL versão 5.7..."
sudo docker pull mysql:5.7
sudo docker run -d -p 3306:3306 --name ContainerBD -e "MYSQL_DATABASE=test" -e "MYSQL_ROOT_PASSWORD=urubu100" mysql:5.7
sudo docker exec -it ContainerBD bash

echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Executando a criação do container e execução dele... "

echo "$(tput setaf 10)[Bot assistant]:$(tput setaf 7) Seu sistema está pronto! "