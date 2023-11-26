
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
    status_funcionario tinyint,
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
    status_servidor tinyint,
    fkInstituicao int,
    constraint fkInstituicao_servidor foreign key (fkInstituicao)
    references instituicao (idInstituicao)
    );
    
    insert into instituicao values
    (null, 'simone', 'simone', 's@gmail.com', '123', '123');
    
    insert into Servidor values
    (null, '123', 'Windows', 'sala 08', 1, 1);
    
CREATE TABLE Componente (
	idComponente int primary key auto_increment,
    modelo varchar(45)
    );
    
insert into Componente values
	(null, "CPU"),
    (null, "RAM"),
    (null, "DISCO"),
    (null, "LATÊNCIA"),
    (null, "PACOTES - ENVIADOS"),
    (null, "PACOTES - RECEBIDOS"),
    -- Captura do individual da Simone
    (null, "NOME DO PROCESSADOR"),
    (null, "ARQUITETURA DO PROCESSADOR"),
    (null, "NÚCLEOS FÍSICOS"),
    (null, "NÚCLEOS LÓGICOS"),
    (null, "FREQUÊNCIA"),
    (null, "TEMPERATURA");
    
    
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
    textosCapturados varchar(100),
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
    select dadosCapturados, dataHora from RegistrosTRUSTED where fkComponente = 5; -- PACOTES - ENVIADOS
    select dadosCapturados, dataHora from RegistrosTRUSTED where fkComponente = 6; -- PACOTES - RECEBIDOS
    -- CAPTURAS INDIVIDUAL DA SIMONE
	select textosCapturados, dataHora from RegistrosTRUSTED where fkComponente = 7; -- NOME DO PROCESSADOR
    select textosCapturados, dataHora from RegistrosTRUSTED where fkComponente = 8; -- ARQUITETURA DO PROCESSADOR
    select dadosCapturados, dataHora from RegistrosTRUSTED where fkComponente = 9; -- NÚLEOS FISICOS
    select dadosCapturados, dataHora from RegistrosTRUSTED where fkComponente = 10; -- NÚCLEOS LÓGICOS
    select dadosCapturados, dataHora from RegistrosTRUSTED where fkComponente = 11; -- FREQUENCIA
    select dadosCapturados, dataHora from RegistrosTRUSTED where fkComponente = 11; -- TEMPERATURA
    
    
    
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

-- selects aeris
select 
dadoscapturados as CPU,
DATE_FORMAT(dataHora, '%H:%i:%s') as dataHora
from RegistrosTRUSTED
join Servidor on RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
join Componente on RegistrosTRUSTED.fkComponente = Componente.idComponente
Where Servidor.idServidor = 1 and Componente.modelo = "CPU"
order by idRegistros desc limit 7;

select 
dadoscapturados as RAM,
DATE_FORMAT(dataHora, '%H:%i:%s') as dataHora
from RegistrosTRUSTED
join Servidor on RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
join Componente on RegistrosTRUSTED.fkComponente = Componente.idComponente
Where Servidor.idServidor = 1 and Componente.modelo = "RAM"
order by idRegistros desc limit 7;

-- select da pesquisa funcionario
select * from servidor;

    select idfuncionario, nome_funcionario, email, fk_nivelAcesso 
    from funcionario 
    where (nome_funcionario like '%alisson%' or email like '%alisson%') and fk_instituicao = 3 and status_funcionario = 1;

insert into funcionario values
(null, 'Bruno', 'alisson_bruno@gmail.com', '%bananinha123', '1', '3', '3');

select idfuncionario, nome_funcionario, email, fk_nivelAcesso from funcionario where nome_funcionario like '%' or email like '%';

SELECT
    DATE_FORMAT(RegistrosTRUSTED.dataHora, "%Y-%m-%d %H:%i:%s") as dataHora,
    MAX(CASE WHEN RegistrosTRUSTED.fkComponente = 1 THEN RegistrosTRUSTED.dadosCapturados END) AS 'CPU',
    MAX(CASE WHEN RegistrosTRUSTED.fkComponente = 2 THEN RegistrosTRUSTED.dadosCapturados END) AS 'RAM',
    MAX(CASE WHEN RegistrosTRUSTED.fkComponente = 3 THEN RegistrosTRUSTED.dadosCapturados END) AS 'DISCO',
    MAX(CASE WHEN RegistrosTRUSTED.fkComponente = 4 THEN RegistrosTRUSTED.dadosCapturados END) AS 'PACOTES_ENVIADOS',
    MAX(CASE WHEN RegistrosTRUSTED.fkComponente = 5 THEN RegistrosTRUSTED.dadosCapturados END) AS 'PACOTES_RECEBIDOS',
    MAX(Servidor.idServidor) AS idServidor,
    MAX(instituicao.nome_instituicao) AS nome_instituicao
FROM
    RegistrosTRUSTED
JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
JOIN instituicao ON Servidor.fkInstituicao = instituicao.idinstituicao
GROUP BY
    DATE_FORMAT(RegistrosTRUSTED.dataHora, "%Y-%m-%d %H:%i:%s"), Servidor.idServidor;
    
    SELECT * FROM HISTORICO;
    