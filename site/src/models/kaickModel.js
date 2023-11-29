var database = require("../database/config");

function buscarUltimasMedidasCPUKaick(idServidor, limite_linhas) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 7 
        P.nome_processo,
        P.PID,
        P.usoCpu
        from Processos as P
        join Listagem_Processos on fkListagem = idListagem
        where idListagem = 1
        order by usoCpu desc;`;
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

function buscarMedidasEmTempoRealCPUKaick(idServidor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "CPU"
        order by idRegistros desc limit 1`;

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



function buscarUltimasMedidasRAMKaick(idServidor, limite_linhas) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        dataHora,
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "RAM"
        order by idRegistros desc limit ${limite_linhas}`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
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

function buscarMedidasEmTempoRealRAMKaick(idServidor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
        DATE_FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = ${idServidor} AND Componente.modelo = "RAM"
        order by idRegistros desc limit 1`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        dadoscapturados, 
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

module.exports = {
    buscarUltimasMedidasCPUKaick,
    buscarMedidasEmTempoRealCPUKaick,
    
    buscarUltimasMedidasRAMKaick,
    buscarMedidasEmTempoRealRAMKaick
}