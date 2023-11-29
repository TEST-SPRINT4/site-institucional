var database = require("../database/config");

// INDIVIDUAL SIMONE -------------------------------------------------------

function buscarUltimasMedidasTEMPERATURA(idServidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        FORMAT(dataHora,'HH:mm:ss') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = 5 AND Componente.modelo = 'TEMPERATURA'
        ORDER BY idRegistros DESC 
        OFFSET 0 ROWS FETCH NEXT ${limite_linhas} ROWS ONLY 
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = 5 AND Componente.modelo = "TEMPERATURA"
        order by idRegistros desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealTEMPERATURA(idServidor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        FORMAT(dataHora,'HH:mm:ss') as dataHora
    FROM RegistrosTRUSTED
    JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
    JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
    WHERE Servidor.idServidor = 5 AND Componente.modelo = 'TEMPERATURA'
    ORDER BY idRegistros DESC 
    OFFSET 0 ROWS FETCH NEXT 1 ROWS ONLY;
    `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = 5 AND Componente.modelo = "TEMPERATURA"
        order by idRegistros desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasCPU(idServidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        FORMAT(dataHora,'HH:mm:ss') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = 5 AND Componente.modelo = 'CPU'
        ORDER BY idRegistros DESC 
        OFFSET 0 ROWS FETCH NEXT ${limite_linhas} ROWS ONLY `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
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

function buscarMedidasEmTempoRealCPU(idServidor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        FORMAT(dataHora, 'HH:mm:ss') as dataHora
    FROM RegistrosTRUSTED
    JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
    JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
    WHERE Servidor.idServidor = 5 AND Componente.modelo = 'CPU'
    ORDER BY idRegistros DESC 
    OFFSET 0 ROWS FETCH NEXT 1 ROWS ONLY`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
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

function buscarUltimasMedidasFREQUENCIA(idServidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        FORMAT(dataHora,'HH:mm:ss') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = 5 AND Componente.modelo = 'FREQUÊNCIA'
        ORDER BY idRegistros DESC 
        OFFSET 0 ROWS FETCH NEXT ${limite_linhas} ROWS ONLY 
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        dataHora,
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "FREQUENCIA"
        order by idRegistros desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealFREQUENCIA(idServidor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        FORMAT(dataHora, 'HH:mm:ss') as dataHora
    FROM RegistrosTRUSTED
    JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
    JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
    WHERE Servidor.idServidor = 5 AND Componente.modelo = 'FREQUÊNCIA'
    ORDER BY idRegistros DESC 
    OFFSET 0 ROWS FETCH NEXT 1 ROWS ONLY`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "FREQUENCIA"
        order by idRegistros desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasNUCLEOF(idServidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        FORMAT(dataHora,'HH:mm:ss') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = 5 AND Componente.modelo = 'NÚCLEOS FÍSICOS'
        ORDER BY idRegistros DESC 
        OFFSET 0 ROWS FETCH NEXT ${limite_linhas} ROWS ONLY 
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        dataHora,
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "NÚCLEOS FÍSICOS"
        order by idRegistros desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealNUCLEOF(idServidor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        FORMAT(dataHora, 'HH:mm:ss') as dataHora
    FROM RegistrosTRUSTED
    JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
    JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
    WHERE Servidor.idServidor = 5 AND Componente.modelo = 'NÚCLEOS FÍSICOS'
    ORDER BY idRegistros DESC 
    OFFSET 0 ROWS FETCH NEXT 1 ROWS ONLY`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "NÚCLEOS FÍSICOS"
        order by idRegistros desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasNUCLEOL(idServidor, limite_linhas) {

    instrucaoSql = `
    `;

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        dataHora,
        FORMAT(dataHora,'HH:mm:ss') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = 5 AND Componente.modelo = 'NÚCLEOS LÓGICOS'
        ORDER BY idRegistros DESC 
        OFFSET 0 ROWS FETCH NEXT ${limite_linhas} ROWS ONLY `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        dataHora,
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "NÚCLEOS LÓGICOS"
        order by idRegistros desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealNUCLEOL(idServidor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        FORMAT(dataHora, 'HH:mm:ss') as dataHora
    FROM RegistrosTRUSTED
    JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
    JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
    WHERE Servidor.idServidor = 5 AND Componente.modelo = 'NÚCLEOS LÓGICOS'
    ORDER BY idRegistros DESC 
    OFFSET 0 ROWS FETCH NEXT 1 ROWS ONLY
    `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "NÚCLEOS LÓGICOS"
        order by idRegistros desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasNOME(idServidor, limite_linhas) {

    instrucaoSql = `
    `;

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        textoCapturado, 
        dataHora,
        FORMAT(dataHora,'HH:mm:ss') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = 5 AND Componente.modelo = 'NOME DO PROCESSADOR'
        ORDER BY idRegistros DESC 
        OFFSET 0 ROWS FETCH NEXT ${limite_linhas} ROWS ONLY `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        textoCapturado, 
        dataHora,
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "NOME DO PROCESSADOR"
        order by idRegistros desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealNOME(idServidor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = ` SELECT 
        textoCapturado, 
        FORMAT(dataHora, 'HH:mm:ss') as dataHora
    FROM RegistrosTRUSTED
    JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
    JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
    WHERE Servidor.idServidor = 5 AND Componente.modelo = 'NOME DO PROCESSADOR'
    ORDER BY idRegistros DESC 
    OFFSET 0 ROWS FETCH NEXT 1 ROWS ONLY
    `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "NÚCLEOS LÓGICOS"
        order by idRegistros desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasARQUITETURA(idServidor, limite_linhas) {

    instrucaoSql = `SELECT 
    textoCapturado, 
    dataHora,
    FORMAT(dataHora,'HH:mm:ss') as dataHora
    FROM RegistrosTRUSTED
    JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
    JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
    WHERE Servidor.idServidor = 5 AND Componente.modelo = 'ARQUITETURA DO PROCESSADOR'
    ORDER BY idRegistros DESC 
    OFFSET 0 ROWS FETCH NEXT ${limite_linhas} ROWS ONLY 
    `;

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        textoCapturado, 
        dataHora,
        FORMAT(dataHora,'HH:mm:ss') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = 5 AND Componente.modelo = 'ARQUITETURA DO PROCESSADOR'
        ORDER BY idRegistros DESC 
        OFFSET 0 ROWS FETCH NEXT ${limite_linhas} ROWS ONLY `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        textoCapturado, 
        dataHora,
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "NOME DO PROCESSADOR"
        order by idRegistros desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealARQUITETURA(idServidor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = ` SELECT 
        textoCapturado, 
        FORMAT(dataHora, 'HH:mm:ss') as dataHora
    FROM RegistrosTRUSTED
    JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
    JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
    WHERE Servidor.idServidor = 5 AND Componente.modelo = 'ARQUITETURA DO PROCESSADOR'
    ORDER BY idRegistros DESC 
    OFFSET 0 ROWS FETCH NEXT 1 ROWS ONLY
    `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "ARQUITETURA DO PROCESSADOR"
        order by idRegistros desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {

    buscarUltimasMedidasTEMPERATURA,
    buscarUltimasMedidasCPU,
    buscarUltimasMedidasFREQUENCIA,
    buscarUltimasMedidasNUCLEOF,
    buscarUltimasMedidasNUCLEOL,
    buscarUltimasMedidasNOME,
    buscarUltimasMedidasARQUITETURA,
    

    buscarMedidasEmTempoRealTEMPERATURA,
    buscarMedidasEmTempoRealCPU,
    buscarMedidasEmTempoRealFREQUENCIA,
    buscarMedidasEmTempoRealNUCLEOF,
    buscarMedidasEmTempoRealNUCLEOL,
    buscarMedidasEmTempoRealNOME,
    buscarMedidasEmTempoRealARQUITETURA,
    


}
