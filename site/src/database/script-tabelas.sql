create database test;
use test;

CREATE TABLE instituicao (
	idinstituicao INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	email VARCHAR(45),
	senha VARCHAR(45),
    CNPJ char(14),
    CEP char(9),
    telefone char(11)
);

CREATE TABLE funcionario (
	idfuncionario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
	senha VARCHAR(45),
    nivelAcesso INT,
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
	idHardware INT PRIMARY KEY AUTO_INCREMENT,
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
    
CREATE TABLE CPU (
	idregistro_cpu INT PRIMARY KEY AUTO_INCREMENT,
	utilizacao FLOAT,
    velocidade FLOAT,
    data_hora DATETIME,
    fk_instituicao INT,
	CONSTRAINT fk_instituicao_cpu FOREIGN KEY (fk_instituicao)
	REFERENCES instituicao(idinstituicao),
    fk_curso INT,
	CONSTRAINT fk_curso_cpu FOREIGN KEY (fk_curso)
	REFERENCES curso(idcurso),   
    fk_computador INT,
	CONSTRAINT fk_computador_cpu FOREIGN KEY (fk_computador)
	REFERENCES computador(idhardware)
    );
    
CREATE TABLE memoria (
	idregistro_memoria INT PRIMARY KEY AUTO_INCREMENT,
	usada FLOAT,
    disponivel FLOAT,
    data_hora DATETIME,
    fk_instituicao INT,
	CONSTRAINT fk_instituicao_memoria FOREIGN KEY (fk_instituicao)
	REFERENCES instituicao(idinstituicao),
    fk_curso INT,
	CONSTRAINT fk_curso_memoria FOREIGN KEY (fk_curso)
	REFERENCES curso(idcurso),   
    fk_computador INT,
	CONSTRAINT fk_computador_memoria FOREIGN KEY (fk_computador)
	REFERENCES computador(idhardware)
    );
    
    CREATE TABLE disco (
	idregistro_disco INT PRIMARY KEY AUTO_INCREMENT,
    usado FLOAT,
	velocidade_leitura FLOAT,
    velocidade_gravacao FLOAT,
    disponivel FLOAT,
    data_hora DATETIME,
    fk_instituicao INT,
	CONSTRAINT fk_instituicao_disco FOREIGN KEY (fk_instituicao)
	REFERENCES instituicao(idinstituicao),
    fk_curso INT,
	CONSTRAINT fk_curso_disco FOREIGN KEY (fk_curso)
	REFERENCES curso(idcurso),   
    fk_computador INT,
	CONSTRAINT fk_computador_disco FOREIGN KEY (fk_computador)
	REFERENCES computador(idhardware)
    );
    
	CREATE TABLE rede (
	idregistro_rede INT PRIMARY KEY AUTO_INCREMENT,
    data_hora DATETIME,
    fk_instituicao INT,
	CONSTRAINT fk_instituicao_rede FOREIGN KEY (fk_instituicao)
	REFERENCES instituicao(idinstituicao),
    fk_curso INT,
	CONSTRAINT fk_curso_rede FOREIGN KEY (fk_curso)
	REFERENCES curso(idcurso),   
    fk_computador INT,
	CONSTRAINT fk_computador_rede FOREIGN KEY (fk_computador)
	REFERENCES computador(idhardware)
    );