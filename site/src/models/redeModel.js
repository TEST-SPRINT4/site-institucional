var database = require("../database/config");

function BuscarDados_latencia(fkEmpresa, ipServidor) {
    console.log("ACESSEI O SERVIDOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function BuscarDados_latencia():", fkEmpresa, ipServidor);

    var instrucao1 = `
  SELECT registros.*
  FROM RegistrosTRUSTED registros
  JOIN Servidor servidor ON registros.fkIdServidor = servidor.idServidor
  WHERE servidor.idServidor = ${ipServidor}
    AND registros.fkComponente = 4
    AND servidor.fkInstituicao = ${fkEmpresa}
    order by idRegistros desc limit 1;
  `;
    console.log("Executando a instrução1 SQL: \n" + instrucao1);
    return database.executar(instrucao1);
}

function BuscarDados_Pacotes_Recebidos(fkEmpresa, ipServidor) {
    console.log("ACESSEI O SERVIDOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function BuscarDados_Pacotes_Recebidos():", fkEmpresa, ipServidor);

    var instrucao1 = `
    SELECT registros.*
    FROM RegistrosTRUSTED registros
    JOIN Servidor servidor ON registros.fkIdServidor = servidor.idServidor
    WHERE servidor.idServidor = ${ipServidor}
      AND registros.fkComponente = 6
      AND servidor.fkInstituicao = ${fkEmpresa}
      order by idRegistros desc limit 1;
    `;
    console.log("Executando a instrução1 SQL: \n" + instrucao1);
    return database.executar(instrucao1);
}

function BuscarDados_Pacotes_Enviados(fkEmpresa, ipServidor) {
    console.log("ACESSEI O SERVIDOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function BuscarDados_Pacotes_Enviados():", fkEmpresa, ipServidor);

    var instrucao1 = `
    SELECT registros.*
    FROM RegistrosTRUSTED registros
    JOIN Servidor servidor ON registros.fkIdServidor = servidor.idServidor
    WHERE servidor.idServidor = ${ipServidor}
      AND registros.fkComponente = 5
      AND servidor.fkInstituicao = ${fkEmpresa}
      order by idRegistros desc limit 1;
    `;
    console.log("Executando a instrução1 SQL: \n" + instrucao1);
    return database.executar(instrucao1);
}

function Buscar_IPV4(fkEmpresa, ipServidor) {
    console.log("ACESSEI O SERVIDOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function Buscar_IPV4():", fkEmpresa, ipServidor);

    var instrucao1 = `
    SELECT d.IPV4
    FROM detalhe d
    JOIN Servidor s ON d.fkServidor = s.idServidor
    WHERE s.idServidor = ${ipServidor} AND s.fkInstituicao = ${fkEmpresa};
    `;
    console.log("Executando a instrução1 SQL: \n" + instrucao1);
    return database.executar(instrucao1);
}

function Buscar_IP_publico(fkEmpresa, ipServidor) {
    console.log("ACESSEI O SERVIDOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function Buscar_IP_publico():", fkEmpresa, ipServidor);

    var instrucao1 = `
    SELECT d.IPpublico
    FROM detalhe d
    JOIN Servidor s ON d.fkServidor = s.idServidor
    WHERE s.idServidor = ${ipServidor} AND s.fkInstituicao = ${fkEmpresa};
    `;
    console.log("Executando a instrução1 SQL: \n" + instrucao1);
    return database.executar(instrucao1);
}

module.exports = {
    BuscarDados_latencia,
    BuscarDados_Pacotes_Recebidos,
    BuscarDados_Pacotes_Enviados,
    Buscar_IPV4,
    Buscar_IP_publico
}
