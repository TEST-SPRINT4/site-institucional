var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidasCPU(req, res) {

    const limite_linhas = 7;

    var idServidor = req.params.idServidor;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasCPU(idServidor, limite_linhas).then(function (resultado) {
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

function buscarUltimasMedidasRAM(req, res) {

    const limite_linhas = 7;

    var idServidor = req.params.idServidor;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasRAM(idServidor, limite_linhas).then(function (resultado) {
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

//var medidaModelDISCO = require("../models/medidaModel");
function buscarUltimasMedidasDISCO(req, res) {

    const limite_linhas = 7;

    var idServidor = req.params.idServidor;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasDISCO(idServidor, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas de REDE", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

//var medidaModelREDE = require("../models/medidaModel");
function buscarUltimasMedidasREDE(req, res) {

    const limite_linhas = 7;

    var idServidor = req.params.idServidor;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasREDE(idServidor, limite_linhas).then(function (resultado) {
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


function buscarMedidasEmTempoRealCPU(req, res) {

    var idServidor = req.params.idServidor;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealCPU(idServidor).then(function (resultado) {
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

function buscarMedidasEmTempoRealRAM(req, res) {

    var idServidor = req.params.idServidor;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealRAM(idServidor).then(function (resultado) {
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

function buscarMedidasEmTempoRealDISCO(req, res) {

    var idServidor = req.params.idServidor;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealDISCO(idServidor).then(function (resultado) {
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

function buscarMedidasEmTempoRealREDE(req, res) {

    var idServidor = req.params.idServidor;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealREDE(idServidor).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado na REDE!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas de REDE", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
module.exports = {
    buscarUltimasMedidasCPU,
    buscarUltimasMedidasRAM,
    buscarUltimasMedidasDISCO,
    buscarMedidasEmTempoRealREDE,
    buscarMedidasEmTempoRealCPU,
    buscarMedidasEmTempoRealRAM,
    buscarMedidasEmTempoRealDISCO,
    buscarMedidasEmTempoRealREDE
}