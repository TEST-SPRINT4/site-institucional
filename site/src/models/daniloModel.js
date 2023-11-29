var database = require("../database/config");
function buscarUltimasMedidasDISCO2(idServidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT top 7
        
        dadoscapturados, 
        dataHora,
        FORMAT(dataHora,'%h:%m:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = 2 AND Componente.modelo = 'DISCO'
        order by idRegistros ;
     `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT top 7
        
        dadoscapturados, 
        dataHora,
        FORMAT(dataHora,'%h:%m:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = 2 AND Componente.modelo = 'DISCO'
        order by idRegistros ;
     `;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarMedidasEmTempoRealDISCO2(idServidor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT top 7
        dadoscapturados, 
        dataHora,
        FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = 2 AND Componente.modelo = 'DISCO'
        order by idRegistros;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT top 7
        dadoscapturados, 
        dataHora,
        FORMAT(dataHora,'%H:%i:%s') as dataHora
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = 2 AND Componente.modelo = 'DISCO'
        order by idRegistros;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

async function obterDISCO(idATM) {
    const discoQuery = `
    SELECT top 1
    dadosCapturados 
    FROM RegistrosTRUSTED
    JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
    JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
    WHERE Servidor.idServidor = 2 AND Componente.modelo = 'TOTAL - DISCO'
    order by idRegistros desc;`;

    console.log("Executando a instrução SQL: \n" + discoQuery);
    try {
        const discoResult = await database.executar(discoQuery);
            return {
                DISCO: (discoResult && discoResult[0] && discoResult[0].dadosCapturados) || 'N/A',
            }; 
    } catch (error) {
        console.error(`Erro na obtenção de DISCO: ${error.message}`);
        return {
            DISCO: 'N/A',
        };
    }
}

async function obterRAM(idATM) {
    const ramQuery = `
    SELECT top 1
        dadosCapturados
        FROM RegistrosTRUSTED
        JOIN Servidor ON RegistrosTRUSTED.fkIdServidor = Servidor.idServidor
        JOIN Componente ON RegistrosTRUSTED.fkComponente = Componente.idComponente
        WHERE Servidor.idServidor = 2 AND Componente.modelo = 'RAM'
        order by idRegistros desc;`;

    console.log("Executando a instrução SQL: \n" + ramQuery);
    try {
        const ramResult = await database.executar(ramQuery);
            return {
                RAM: (ramResult && ramResult[0] && ramResult[0].dadosCapturados) || 'N/A',
            }; 
    } catch (error) {
        console.error(`Erro na obtenção de RAM : ${error.message}`);
        return {
            RAM: 'N/A',
        };
    }
}
module.exports = {
    buscarUltimasMedidasDISCO2,
    buscarMedidasEmTempoRealDISCO2,
    obterDISCO,
    obterRAM
}