create database test;
use test;

-- drop database test;

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
	enderecoIP varchar(15) primary key,
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
    (null, "REDE-UPLOAD"),
    (null, "REDE-DOWNLOAD");
    
    
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
    dadosCapturados decimal(10,2),
    dataHora datetime,
    fkComponente int,
    constraint fkComponente_RegistrosTRUSTED foreign key (fkComponente)
    references Componente (idComponente),
    fkIpservidor varchar(15),
    constraint fkIpservidor_Registros foreign key (fkIpservidor)
    references Servidor (enderecoIP)
    );
    
    Create table RegistrosRAW (
	idRegistrosRAW int primary key auto_increment,
    dadosCapturados double,
    dataHora datetime,
    fkComponente int,
    constraint fkComponente_RegistrosRAW foreign key (fkComponente)
    references Componente (idComponente),
    fkIpservidor varchar(15),
    constraint fkIpservidor_RegistrosRAW foreign key (fkIpservidor)
    references Servidor (enderecoIP)
    );
 
 Create table imporntacia_Alerta (
	idImportancia_Alerta int primary key auto_increment,
    apelido varchar(45)
    );
    
create table Alertas (
	idAlertas int primary key auto_increment,
    descricao varchar(45),
    fkImportancia int,
    fkRegistros int,
    constraint fkImportancia_Alertas foreign key (fkImportancia)
    references imporntacia_Alerta (idImportancia_Alerta),
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
    select dadosCapturados, dataHora from RegistrosTRUSTED where fkComponente = 4; -- REDEUPLOAD
    select dadosCapturados, dataHora from RegistrosRAW where fkComponente = 5; -- REDEDOWNLOAD

INSERT INTO imporntacia_Alerta (apelido)
VALUES
('Crítico'),
('Grave'),
('Leve');

-- ALERTAS (NORMALIZADO, ATENÇÃO E CRÍTICO)

-- INSERT INTO Alertas (descricao, fkImportancia, fkRegistros)
-- VALUES
-- ('CPU atingiu 95% de uso', 1, 1),
-- ('RAM atingiu 80% de uso', 2, 2),
-- ('Disco rígido atingiu 90% de uso', 2, 3),
-- ('Rede atingiu 100% de uso', 3, 4);