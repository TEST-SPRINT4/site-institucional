var database = require("../database/config");

function buscar_tamanho_disco(fkEmpresa, ipServidor) {
    console.log("ACESSEI O SERVIDOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscar_tamanho_disco():", fkEmpresa, ipServidor);

    var instrucao1 = `
    SELECT registros.*
    FROM RegistrosTRUSTED registros
    JOIN Servidor servidor ON registros.fkIdServidor = servidor.idServidor
    WHERE servidor.idServidor = ${ipServidor}
      AND registros.fkComponente = 7
      AND servidor.fkInstituicao = ${fkEmpresa}
      order by idRegistros desc limit 1;
    `;
    console.log("Executando a instrução1 SQL: \n" + instrucao1);
    return database.executar(instrucao1);
}

module.exports = {
    buscar_tamanho_disco
}
