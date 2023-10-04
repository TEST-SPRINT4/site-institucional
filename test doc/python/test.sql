create database test;
use test;
drop database test;
CREATE TABLE instituicao (
	idinstituicao INT PRIMARY KEY AUTO_INCREMENT,
	nome_instituicao VARCHAR(45),
	responsavel VARCHAR(45),
	email_instituicao VARCHAR(45),
    CNPJ char(18),
    CEP char(9),
    telefone char(14)
);

CREATE TABLE nivelAcesso (
	nivel_acesso INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(200)
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

CREATE TABLE curso (
	idCurso INT PRIMARY KEY AUTO_INCREMENT,
    disciplina VARCHAR(45),
	qtdAlunos INT,
    fk_instituicao INT,
	CONSTRAINT fk_instituicao FOREIGN KEY (fk_instituicao)
	REFERENCES instituicao(idinstituicao)
    );
    
CREATE TABLE computador (
	idcomputador INT PRIMARY KEY AUTO_INCREMENT,
    CPU VARCHAR(45),
	memoria VARCHAR(45),
    disco VARCHAR(45),
    rede VARCHAR(45),
    fk_instituicao INT,
	CONSTRAINT fk_instituicao_computador FOREIGN KEY (fk_instituicao)
	REFERENCES instituicao(idinstituicao),
    fk_curso INT,
	CONSTRAINT fk_curso_computador FOREIGN KEY (fk_curso)
	REFERENCES curso(idcurso)    
    );
    
CREATE TABLE dadosHardware (
	idregistro INT PRIMARY KEY AUTO_INCREMENT,
	cpu_utilizacao FLOAT,
    cpu_velocidade FLOAT,
	memoria_usada FLOAT,
	memoria_disponivel FLOAT,
	disco_velocidadeLeitura FLOAT,
	disco_velocidadeGravacao FLOAT,
	disco_usado FLOAT,
	disco_disponivel FLOAT,
	rede_upload FLOAT,
	rede_dowload FLOAT,
	rede_latencia FLOAT,
	rede_packetLoss FLOAT,
    data_hora DATETIME,
    fk_instituicao INT,
	CONSTRAINT fk_instituicao_dados FOREIGN KEY (fk_instituicao)
	REFERENCES instituicao(idinstituicao),
    fk_curso INT,
	CONSTRAINT fk_curso_dados FOREIGN KEY (fk_curso)
	REFERENCES curso(idcurso),   
    fk_computador INT,
	CONSTRAINT fk_computador_dados FOREIGN KEY (fk_computador)
	REFERENCES computador(idcomputador)
    );
    
	INSERT INTO nivelAcesso (descricao) VALUES
('Acesso somente leitura para visualizar informações monitoradas.'),
('Acesso para gerenciar recursos e relatórios.'),
('Acesso para supervisionar equipes e atividades.'),
('Acesso total ao sistema, incluindo administração de usuários e configurações de monitoramento.');
	
    select * from nivelAcesso;
    select * from funcionario;
    select * from instituicao;
    select * from curso;
    select * from dadosHardware;
    truncate dadosHardware;
    
    INSERT INTO instituicao (nome_instituicao, responsavel, email_instituicao, CNPJ, CEP, telefone) VALUES ('sptech', 'Geraldo', 'sptech@email.com', '36.578.024/0001','09240-220','(11)9400-5833');
    INSERT INTO funcionario (nome_funcionario, email, senha, fk_nivelAcesso, fk_instituicao) VALUES ("Geraldo", "sptech@email.com", "1234567!", 4, 1);
    INSERT INTO curso VALUES (null, "SIS", 10, 1);
    INSERT INTO computador VALUES (null, "i3", "16gb", "256gb", "internet", 1,1);
    -- INSERT INTO dadosHardware (cpu_utilizacao, cpu_velocidade, memoria_usada, memoria_disponivel, disco_velocidadeLeitura, disco_velocidadeGravacao, disco_usado, disco_disponivel, rede_upload, rede_dowload, rede_latencia, rede_packetLoss, current_time(), fk_instituicao, fk_curso, fk_computador) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    
    