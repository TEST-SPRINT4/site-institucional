var kaickModel = require("../models/kaickModel");

function buscarUltimasMedidasCPUKaick(req, res) {

    const limite_linhas = 7;

    var idServidor = req.body.idServidorServer;
    var idListagem = req.body.idListaServer;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    kaickModel.buscarUltimasMedidasCPUKaick(idServidor,idListagem,limite_linhas).then(function (resultado) {
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

function buscarCpuKaick(req, res) {

    var idServidor = req.params.idServidor;

    console.log(`Recuperando medidas em tempo real`);

    kaickModel.buscarCpuKaick(idServidor).then(function (resultado) {
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

function buscarUltimasMedidasRAMKaick(req, res) {

    const limite_linhas = 7;

    var idServidor = req.body.idServidorServer;
    var idListagem = req.body.idListaServer;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    kaickModel.buscarUltimasMedidasRAMKaick(idServidor,idListagem,limite_linhas).then(function (resultado) {
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

function buscarRamKaick(req, res) {

    var idServidor = req.params.idServidor;

    console.log(`Recuperando medidas em tempo real`);

    kaickModel.buscarRamKaick(idServidor).then(function (resultado) {
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

module.exports = {
    buscarUltimasMedidasCPUKaick,
    buscarCpuKaick,
    buscarUltimasMedidasRAMKaick,
    buscarRamKaick
}