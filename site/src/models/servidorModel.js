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
	WHERE enderecoIP = '${ip_excluir}'
	LIMIT 1;
  `;
  console.log("Executando a instrução1 SQL: \n" + instrucao3);
  return database.executar(instrucao3);
}


module.exports = {
  buscarServidorPorEmpresa,
  cadastrarSv,
  atualizar_servidor,
  excluir_servidor
}
