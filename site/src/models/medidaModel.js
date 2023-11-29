var database = require("../database/config");

function buscarUltimasMedidasCPU(idServidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT top ${limite_linhas}
        dadosCapturados, 
        FORMAT(dataHora,'%H:%m:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = 'CPU'
        order by idRegistros desc;
`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadosCapturados, 
        dataHora,
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "CPU"
        order by idRegistros desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasRAM(idServidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT top ${limite_linhas}
        dadosCapturados, 
        FORMAT(dataHora,'%H:%m:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = 'RAM'
        order by idRegistros desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadosCapturados, 
        dataHora,
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "RAM"
        order by idRegistros desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasDISCO(idServidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT top ${limite_linhas}
        dadosCapturados, 
        FORMAT(dataHora,'%H:%m:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = 'DISCO'
        order by idRegistros desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadosCapturados, 
        dataHora,
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "DISCO"
        order by idRegistros desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasENVIADOS(idServidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT top ${limite_linhas}
        dadosCapturados, 
        FORMAT(dataHora,'%H:%m:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = 'PACOTES - ENVIADOS'
        order by idRegistros desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadosCapturados, 
        dataHora,
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "PACOTES - ENVIADOS"
        order by idRegistros desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasRECEBIDOS(idServidor, limite_linhas) {

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT top ${limite_linhas}
        dadosCapturados, 
        FORMAT(dataHora,'%H:%m:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = 'PACOTES - RECEBIDOS'
        order by idRegistros desc;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadosCapturados, 
        dataHora,
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "PACOTES - RECEBIDOS"
        order by idRegistros desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasLATENCIA(idServidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT top ${limite_linhas}
        dadosCapturados, 
        FORMAT(dataHora,'%h:%m:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = 'LATÊNCIA'
        order by idRegistros desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadosCapturados, 
        dataHora,
        DATE_FORMAT(dataHora,'%h:%m:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "LATÊNCIA"
        order by idRegistros desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// INDIVIDUAL AERIS -------------------------------------------------------

function buscarUltimasMedidas_CPU_RAM_Aeris(idServidor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT
        RegistrosTRUSTED.dadosCapturados,
        FORMAT(RegistrosTRUSTED.dataHora, 'HH:mm:ss') AS dataHora,
        RegistrosTRUSTED.fkComponente
    FROM
        RegistrosTRUSTED
    JOIN
        Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
    JOIN
        Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
    WHERE
        Servidor.idServidor = ${idServidor}
    ORDER BY
        RegistrosTRUSTED.idRegistros DESC;
    `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select
        dadosCapturados,
        DATE_FORMAT(dataHora, '%h:%m:%s') as dataHora,
        RegistrosTRUSTED.fkComponente
        from RegistrosTRUSTED
        join Servidor on RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        join Componente on RegistrosTRUSTED.fkComponente = Componente.idComponente
        Where Servidor.idServidor = ${idServidor}
        order by idRegistros desc`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


// INDIVIDUAL SIMONE -------------------------------------------------------

function buscarUltimasMedidasTEMPERATURA(idServidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = ``;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadosCapturados, 
        dataHora,
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "TEMPERATURA"
        order by idRegistros desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


//------------------------------------------------------------------------------------

function buscarMedidasEmTempoRealCPU(idServidor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT top 1
        dadosCapturados, 
        FORMAT(dataHora,'%H:%m:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = 'CPU'
        order by idRegistros desc;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadosCapturados, 
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "CPU"
        order by idRegistros desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealRAM(idServidor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT top 1
        dadosCapturados, 
        FORMAT(dataHora,'%H:%m:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = 'RAM'
        order by idRegistros desc;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadosCapturados, 
        dataHora,
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "RAM"
        order by idRegistros desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealDISCO(idServidor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT top 1
        dadosCapturados, 
        FORMAT(dataHora,'%H:%m:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = 'DISCO'
        order by idRegistros desc;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadosCapturados, 
        dataHora,
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "DISCO"
        order by idRegistros desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealENVIADOS(idServidor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT top 1
        dadosCapturados, 
        FORMAT(dataHora,'%H:%m:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = 'PACOTES - ENVIADOS'
        order by idRegistros;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadosCapturados, 
        dataHora,
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "PACOTES - ENVIADOS"
        order by idRegistros desc limit 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealRECEBIDOS(idServidor, limite_linhas) {

    instrucaoSql = ``;

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT top 1
        dadosCapturados, 
        FORMAT(dataHora,'%H:%m:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = 'PACOTES - RECEBIDOS'
        order by idRegistros desc;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadosCapturados, 
        dataHora,
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "PACOTES - RECEBIDOS"
        order by idRegistros desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealLATENCIA(idServidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = ``;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadosCapturados, 
        dataHora,
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "LATÊNCIA"
        order by idRegistros desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarMedidasEmTempoReal_Aeris(idServidor) {

    instrucaoSql = ''

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
        DATE_FORMAT(dataHora,'%h:%m:%s') as dataHora
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
    instrucaoSql = ''

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
        DATE_FORMAT(dataHora, '%h:%m:%s') as dataHora
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


function buscarCapturas(periodo1, periodo2, fk_instituicao) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = ``;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT
        DATE_FORMAT(RegistrosTRUSTED.dataHora, "%Y-%m-%d %H:%i:%s") as dataHora,
        MAX(CASE WHEN RegistrosTRUSTED.fkComponente = 1 THEN RegistrosTRUSTED.dadosCapturados END) AS 'CPU',
        MAX(CASE WHEN RegistrosTRUSTED.fkComponente = 2 THEN RegistrosTRUSTED.dadosCapturados END) AS 'RAM',
        MAX(CASE WHEN RegistrosTRUSTED.fkComponente = 3 THEN RegistrosTRUSTED.dadosCapturados END) AS 'DISCO',
        MAX(CASE WHEN RegistrosTRUSTED.fkComponente = 4 THEN RegistrosTRUSTED.dadosCapturados END) AS 'PACOTES_ENVIADOS',
        MAX(CASE WHEN RegistrosTRUSTED.fkComponente = 5 THEN RegistrosTRUSTED.dadosCapturados END) AS 'PACOTES_RECEBIDOS',
        MAX(Servidor.idServidor) AS idServidor,
        MAX(instituicao.idinstituicao) AS idinstituicao,
        MAX(instituicao.nome_instituicao) AS nome_instituicao
    FROM
        RegistrosTRUSTED
    JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
    JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
    JOIN instituicao ON Servidor.fkInstituicao = instituicao.idinstituicao
    WHERE RegistrosTRUSTED.dataHora BETWEEN '${periodo1}' AND '${periodo2}' AND instituicao.idinstituicao = 1
    GROUP BY
        DATE_FORMAT(RegistrosTRUSTED.dataHora, "%Y-%m-%d %H:%i:%s"), Servidor.idServidor, instituicao.idinstituicao;
    
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU producao) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    buscarUltimasMedidasCPU,
    buscarUltimasMedidasRAM,
    buscarUltimasMedidasDISCO,
    buscarUltimasMedidasENVIADOS,
    buscarUltimasMedidasRECEBIDOS,
    buscarUltimasMedidasLATENCIA,
    buscarUltimasMedidas_CPU_RAM_Aeris,
    buscarCapturas,

    buscarMedidasEmTempoRealCPU,
    buscarMedidasEmTempoRealRAM,
    buscarMedidasEmTempoRealDISCO,
    buscarMedidasEmTempoRealENVIADOS,
    buscarMedidasEmTempoRealRECEBIDOS,
    buscarMedidasEmTempoRealLATENCIA,
    buscarMedidasEmTempoRealSwap_Aeris,
    buscarMedidasEmTempoReal_Aeris
}
