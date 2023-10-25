
-- drop database test;
create database test;
use test;

CREATE TABLE instituicao (
	idinstituicao INT PRIMARY KEY AUTO_INCREMENT,
	nome_instituicao VARCHAR(45),
	responsavel VARCHAR(45),
	email_instituicao VARCHAR(45),
    CNPJ char(18),
    telefone char(14)
);

CREATE TABLE enderecoInstituicao (
	idEndereco int primary key auto_increment,
	CEP char(10),
    estado char(2),
    cidade varchar(45),
    bairro varchar(45),
    rua varchar(45),
    numero varchar(45),
    fkInstituicao int,
    foreign key (fkInstituicao) references instituicao (idinstituicao)
	);

create table permicoes (
	idPermicoes int primary key auto_increment,
	visualizar tinyint,
	editar tinyint,
	cadastrar tinyint,
	deletar tinyint
);

CREATE TABLE nivelAcesso (
	nivel_acesso INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(200),
    fkPermicoes int,
    constraint fkPermicoes_nivel_de_acesso foreign key (fkPermicoes)
    references permicoes (idPermicoes)
	);
    
CREATE TABLE funcionario (
	idfuncionario INT PRIMARY KEY AUTO_INCREMENT,
    nome_funcionario VARCHAR(45),
    email VARCHAR(45),
	senha VARCHAR(45),
    fk_nivelAcesso INT,
	CONSTRAINT fknivelAcesso FOREIGN KEY (fk_nivelAcesso)
	REFERENCES nivelAcesso(nivel_acesso),
    fk_instituicao INT,
	CONSTRAINT fkinstituicao FOREIGN KEY (fk_instituicao)
	REFERENCES instituicao(idinstituicao)
    );
    
CREATE TABLE Servidor (
	idServidor int primary key auto_increment,
	enderecoIP varchar(15),
    sistemaOperacional varchar(45),
    localizacao varchar(45),
    fkInstituicao int,
    constraint fkInstituicao_servidor foreign key (fkInstituicao)
    references instituicao (idInstituicao)
    );
    
CREATE TABLE Componente (
	idComponente int primary key auto_increment,
    modelo varchar(45)
    );
    
insert into Componente values
	(null, "CPU"),
    (null, "RAM"),
    (null, "DISCO"),
    (null, "PACOTES - ENVIADOS"),
    (null, "PACOTES - RECEBIDOS");
    
    
Create table Parametros_Alertas (
	idParametros_Alertas int primary key auto_increment,
    maximo double,
    ideal double,
    minimo double,
    fkComponente int,
    constraint fkComponente_Parametros_Alertas foreign key (fkComponente)
    references Componente (idComponente)
    );
    
Create table RegistrosTRUSTED (
	idRegistros int primary key auto_increment,
    dadosCapturados double,
    dataHora datetime,
    fkComponente int,
    constraint fkComponente_RegistrosTRUSTED foreign key (fkComponente)
    references Componente (idComponente),
    fkIdServidor int,
    constraint fkIdServidor_Registros foreign key (fkIdServidor)
    references Servidor (idServidor)
    );
    
    
    Create table RegistrosRAW (
	idRegistrosRAW int primary key auto_increment,
    dadosCapturados double,
    dataHora datetime,
    fkComponente int,
    constraint fkComponente_RegistrosRAW foreign key (fkComponente)
    references Componente (idComponente),
    fkIdServidor int,
    constraint fkIdServidor_RegistrosRAW foreign key (fkIdServidor)
    references Servidor (idServidor)
    );
 
 Create table importancia_Alerta (
	idImportancia_Alerta int primary key auto_increment,
    apelido varchar(45)
    );
    
create table Alertas (
	idAlertas int primary key auto_increment,
    descricao varchar(45),
    fkImportancia int,
    fkRegistros int,
    constraint fkImportancia_Alertas foreign key (fkImportancia)
    references importancia_Alerta (idImportancia_Alerta),
    constraint fkRegistros_Alertas foreign key (fkRegistros)
    references RegistrosTRUSTED (idRegistros)
    );
    
	INSERT INTO nivelAcesso (descricao) VALUES
('Acesso somente leitura para visualizar informações monitoradas.'),
('Acesso para gerenciar recursos e relatórios.'),
('Acesso total ao sistema, incluindo administração de usuários e configurações de monitoramento.');

insert into permicoes values
	(null, 1,1,1,1),
    (null, 1,1,0,0),
    (null, 1,0,0,0);
    
update nivelAcesso set fkPermicoes = 1 where nivel_acesso = 3;
update nivelAcesso set fkPermicoes = 2 where nivel_acesso = 2;
update nivelAcesso set fkPermicoes = 3 where nivel_acesso = 1;
	
    select * from nivelAcesso;
    select * from funcionario;
    select * from instituicao;
    select * from enderecoInstituicao;
    select * from RegistrosRAW;
    select * from RegistrosTRUSTED;
    select * from Servidor;
    select * from Componente;
    
    select dadosCapturados, dataHora from RegistrosTRUSTED where fkComponente = 1; -- CPU
    select dadosCapturados, dataHora from RegistrosTRUSTED where fkComponente = 2; -- RAM
    select dadosCapturados, dataHora from RegistrosTRUSTED where fkComponente = 3; -- DISCO
    select dadosCapturados, dataHora from RegistrosTRUSTED where fkComponente = 4; -- LATÊNCIA
    
    select dadosCapturados, dataHora from RegistrosRAW where fkComponente = 1; -- CPU
    select dadosCapturados, dataHora from RegistrosRAW where fkComponente = 2; -- RAM
    select dadosCapturados, dataHora from RegistrosRAW where fkComponente = 3; -- DISCO
    select dadosCapturados, dataHora from RegistrosRAW where fkComponente = 4; -- LATÊNCIA
    
    select dadoscapturados, dataHora from RegistrosTRUSTED join Servidor on fkIpservidor = 'coloque_o_IP';
    
-- SELECT dadoscapturados, dataHora
-- FROM RegistrosTRUSTED
-- JOIN Servidor ON RegistrosTRUSTED.fkIpservidor = Servidor.enderecoIP
-- JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
-- WHERE Servidor.enderecoIP = '1' AND Componente.modelo = 'CPU';

SELECT dadoscapturados, dataHora
FROM RegistrosTRUSTED
JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
WHERE Servidor.idServidor = '1' AND Componente.modelo = 'CPU';

	insert into Servidor values
    (null, '12345', 'linux', '5° andar sala 12', 1);
    
    insert into instituicao values
	(null, 'sptech', 'Simone', 's@gmail.com', '123456789123456789', 12345678912345);
    
    insert into RegistrosTRUSTED values
    (null, 2.5,  '2023-10-11 23:23:23', 3, 1),
	(null, 2.5, '2023-10-11 23:26:23', 3, 1),
	(null, 3.5, '2023-10-11 23:29:23', 3, 1),
	(null, 0.5, '2023-10-11 23:32:23', 3, 1),
	(null, 6.5, '2023-10-11 23:35:23', 3, 1);
    
        insert into RegistrosTRUSTED values
    (null, 22.5, '2023-10-11 23:23:23', 1, 2),
	(null, 25.5, '2023-10-11 23:26:23', 1, 2),
	(null, 23.5, '2023-10-11 23:29:23', 1, 2),
	(null, 20.5, '2023-10-11 23:32:23', 1, 2),
	(null, 28.5, '2023-10-11 23:35:23', 1, 2);

select dadoscapturados, dataHora from RegistrosTRUSTED JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente where Componente.modelo = 'CPU';

INSERT INTO importancia_Alerta (apelido)
VALUES
('Crítico'),
('Grave'),
('Leve');

-- Ideia para calendário de histórico
 select count(idAlertas) as critico from Alertas join importancia_Alerta on fkImportancia = idImportancia_Alerta where importancia_Alerta.apelido = "Crítico";

-- ALERTAS (NORMALIZADO, ATENÇÃO E CRÍTICO)

-- INSERT INTO Alertas (descricao, fkImportancia, fkRegistros)
-- VALUES
-- ('CPU atingiu 95% de uso', 1, 1),
-- ('RAM atingiu 80% de uso', 2, 2),
-- ('Disco rígido atingiu 90% de uso', 2, 3),
-- ('Rede atingiu 100% de uso', 3, 4);