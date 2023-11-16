var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT id, nome, email, fk_empresa as empresaId FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarInstituicao(nomeInstituicao, responsavel, emailInstituicao, cnpj, telefone) {
    console.log("ACESSEI O FACULDADE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarInstituicao():", nomeInstituicao, responsavel, emailInstituicao, cnpj, telefone);

    var instrucao1 = `
        INSERT INTO instituicao (nome_instituicao, responsavel, email_instituicao, CNPJ, telefone) 
        VALUES ('${nomeInstituicao}', '${responsavel}', '${emailInstituicao}', '${cnpj}', '${telefone}');
    `;

    console.log("Executando a instrução1 SQL: \n" + instrucao1);
    return database.executar(instrucao1);
}


function cadastrarEndereco(cep, estado, cidade, bairro, rua, numero, fkInstituicao) {
    console.log("ACESSEI O FACULDADE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEndereco():", cep, estado, cidade, bairro, rua, numero, fkInstituicao);

    var instrucao2 = `
    INSERT INTO enderecoInstituicao (CEP, estado, cidade, bairro, rua, numero, fkInstituicao) 
    VALUES ('${cep}', '${estado}', '${cidade}', '${bairro}', '${rua}', '${numero}', '${fkInstituicao}');
`;
    console.log("Executando a instrução1 SQL: \n" + instrucao2);
    return database.executar(instrucao2);
}


function buscarFk(cnpj) {

    instrucao3 = `SELECT idinstituicao as fkInstituicao FROM instituicao WHERE CNPJ = '${cnpj}'`;

    console.log("Executando a instrução SQL: \n" + instrucao3);
    return database.executar(instrucao3);
}

function cadastrarFuncionario(responsavel, emailInstituicao, senha, fkInstituicao) {
    console.log("ACESSEI O FACULDADE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarFuncionario():", responsavel, emailInstituicao, senha, fkInstituicao);

    var instrucao4 = `
    INSERT INTO funcionario (nome_funcionario, email, senha, status_funcionario, fk_nivelAcesso, fk_instituicao) 
    VALUES ('${responsavel}', '${emailInstituicao}', '${senha}', 1, 3, '${fkInstituicao}')`;
    console.log("Executando a instrução3 SQL: \n" + instrucao4);
    return database.executar(instrucao4);
}


module.exports = {
    autenticar,
    cadastrarInstituicao,
    cadastrarEndereco,
    buscarFk,
    cadastrarFuncionario
}