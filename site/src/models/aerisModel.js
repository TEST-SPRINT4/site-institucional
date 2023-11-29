var database = require("../database/config");

function buscarUltimasMedidas_CPU_RAM_Aeris(idServidor) {

    instrucaoSql = `select
            dadosCapturados,
            FORMAT(dataHora, '%H:%i:%s') as dataHora,
            RegistrosTRUSTED.fkComponente
            from RegistrosTRUSTED
            join Servidor on RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
            join Componente on RegistrosTRUSTED.fkComponente = Componente.idComponente
            Where Servidor.idServidor = ${idServidor}
            order by idRegistros desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal_Aeris(idServidor) {

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT TOP 2
        dadosCapturados,
        dataHora,
        idComponente,
        FORMAT(dataHora, 'HH:mm:ss') as dataHora
    FROM
        RegistrosTRUSTED
    JOIN
        Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
    JOIN
        Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
    WHERE
        Servidor.idServidor = ${idServidor}
        AND (Componente.modelo = 'RAM' OR Componente.modelo = 'CPU')
    ORDER BY
        idRegistros;
    `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        dataHora,
        idComponente,
        dadosCapturados,
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND (Componente.modelo = "RAM" OR Componente.modelo = "CPU") 
        order by idRegistros desc limit 2;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealSwap_Aeris(idServidor) {

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT TOP 1
        dadosCapturados AS RAM,
        FORMAT(dataHora, 'HH:mm:ss') AS dataHora
    FROM 
        RegistrosTRUSTED
    JOIN 
        Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
    JOIN 
        Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
    WHERE 
        Servidor.idServidor = ${idServidor} AND Componente.modelo = 'SWAP'
    ORDER BY 
        idRegistros DESC;
    `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        dadosCapturados as RAM,
        DATE_FORMAT(dataHora, '%H:%i:%s') as dataHora
        from RegistrosTRUSTED
        join Servidor on RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        join Componente on RegistrosTRUSTED.fkComponente = Componente.idComponente
        Where Servidor.idServidor = ${idServidor} and Componente.modelo = "SWAP"
        order by idRegistros desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas_CPU_RAM_Aeris,
    buscarMedidasEmTempoReal_Aeris,
    buscarMedidasEmTempoRealSwap_Aeris
}