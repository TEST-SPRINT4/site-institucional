var database = require("../database/config");

function buscarServidorPorEmpresa(empresaId) {

  instrucaoSql = `select * from servidor a where fkInstituicao = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrarSv(ip_cadastro, so_cadastro, localizacao_cadastro, fk_instituicao) {
  console.log("ACESSEI O SERVIDOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSv():", ip_cadastro, so_cadastro, localizacao_cadastro, fk_instituicao);

  var instrucao1 = `
      INSERT INTO Servidor (enderecoIP, sistemaOperacional, localizacao, status_servidor, fkInstituicao) VALUES ('${ip_cadastro}', '${so_cadastro}', '${localizacao_cadastro}', 1, '${fk_instituicao}');
  `;
  console.log("Executando a instrução1 SQL: \n" + instrucao1);
  return database.executar(instrucao1);
}

function atualizar_servidor(ip_atualizar, so_atualizar, localizacao_atualizar) {
  console.log("ACESSEI O SERVIDOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizar_servidor():", ip_atualizar, so_atualizar, localizacao_atualizar);

  var instrucao2 = `
  UPDATE Servidor
	SET sistemaOperacional = '${so_atualizar}',
  localizacao = '${localizacao_atualizar}'
	WHERE enderecoIP = '${ip_atualizar}';
  `;
  console.log("Executando a instrução1 SQL: \n" + instrucao2);
  return database.executar(instrucao2);
}

function excluir_servidor(ip_excluir) {
  console.log("ACESSEI O SERVIDOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function excluir_servidor():", ip_excluir);

  var instrucao3 = `
  UPDATE Servidor
	SET status_servidor = 0
	WHERE enderecoIP = '${ip_excluir}';
  `;
  console.log("Executando a instrução1 SQL: \n" + instrucao3);
  return database.executar(instrucao3);
}

function BuscarServidor(id) {
  console.log("O SERVIDOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarServidor()");
  var instrucao = `

  SELECT * 
FROM Servidor 
JOIN instituicao ON Servidor.fkInstituicao = instituicao.idInstituicao 
WHERE status_servidor = 1 
  AND instituicao.idInstituicao = (SELECT fkInstituicao FROM funcionario WHERE idFuncionario = ${id});
  
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listar() {
  console.log("ACESSEI O SERVIDOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function LISTAR");
  var instrucao = `

  SELECT * 
FROM Servidor 
JOIN instituicao ON Servidor.fkInstituicao = instituicao.idInstituicao;
  
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}



function pesquisarServidor(caractere, fk_instituicao) {
  console.log("ACESSEI O SERVIDOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarServidor():", caractere, fk_instituicao);
  
  var instrucao = `
  select idServidor, enderecoIP, sistemaOperacional, localizacao
  from Servidor 
  where (UPPER(enderecoIP) like '%${caractere}%' or UPPER(idServidor) like '%${caractere}%') and fkInstituicao = ${fk_instituicao} and status_servidor = 1;
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  buscarServidorPorEmpresa,
  cadastrarSv,
  atualizar_servidor,
  excluir_servidor,
  BuscarServidor,
  pesquisarServidor,
  listar
}
