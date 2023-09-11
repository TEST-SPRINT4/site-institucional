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
function cadastrarInstituicao(nomeInstituicao, responsavel, emailInstituicao, cnpj, cep, telefone) {
    console.log("ACESSEI O FACULDADE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarInstituicao():", nomeInstituicao, responsavel, emailInstituicao, cnpj, cep, telefone);

    var instrucao1 = `
        INSERT INTO instituicao (nome_instituicao, responsavel, email_instituicao, CNPJ, CEP, telefone) VALUES ('${nomeInstituicao}', '${responsavel}', '${emailInstituicao}', '${cnpj}','${cep}','${telefone}');
    `;
    console.log("Executando a instrução1 SQL: \n" + instrucao1);
    return database.executar(instrucao1);

}
function buscarFk(cnpj) {

    instrucao2 = `SELECT idinstituicao as fkInstituicao FROM instituicao where CNPJ = '${cnpj}'`;

    console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao2);
}
function cadastrarFuncionario(responsavel, emailInstituicao, senha, fkInstituicao) {
    console.log("ACESSEI O FACULDADE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarFuncionario():", responsavel, emailInstituicao, senha, fkInstituicao);

    var instrucao3 = `
    INSERT INTO funcionario (nome_funcionario, email, senha, fk_nivelAcesso, fk_instituicao) VALUES ('${responsavel}', '${emailInstituicao}', '${senha}', '${4}', '${fkInstituicao}');
`;
    console.log("Executando a instrução3 SQL: \n" + instrucao3);
    return database.executar(instrucao3);
}
module.exports = {
    autenticar,
    cadastrarInstituicao,
    buscarFk,
    cadastrarFuncionario
}