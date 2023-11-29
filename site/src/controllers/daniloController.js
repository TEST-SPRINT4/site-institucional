var daniloModel= require("../models/daniloModel");

function buscarUltimasMedidasDISCO2(req, res) {

    const limite_linhas = 7;

    var idServidor = req.params.idServidor;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    daniloModel.buscarUltimasMedidasDISCO2(idServidor, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas de DISCO", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoRealDISCO2(req, res) {

    var idServidor = req.params.idServidor;

    console.log(`Recuperando medidas em tempo real`);

    daniloModel.buscarMedidasEmTempoRealDISCO2(idServidor).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

async function obterDISCO(req, res) {
    
    try {
        const dados = await daniloModel.obterDISCO();
        res.json(dados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obterRAM(req, res) {
    
    try {
        const dados = await daniloModel.obterRAM();
        res.json(dados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    buscarUltimasMedidasDISCO2,
    buscarMedidasEmTempoRealDISCO2,
    obterDISCO,
    obterRAM
  
}