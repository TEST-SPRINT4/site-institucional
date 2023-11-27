var servidorModel = require("../models/servidorModel");

function buscarServidorPorEmpresa(req, res) {
  var idUsuario = req.params.idUsuario;

  servidorModel.buscarServidorPorEmpresa(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os servidores: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function listar(req, res) {
  servidorModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrarSv(req, res) {

  // ip_cadastroServer: ip_cadastroVAR,
  // so_servidor_cadastroServer: so_servidor_cadastroVAR,
  // localizacao_cadastroServer: localizacao_cadastroVAR,
  // fk_instituicaoServer: fk_instituicaoVAR,

  var ip_cadastro = req.body.ip_cadastroServer;
  var so_cadastro = req.body.so_servidor_cadastroServer;
  var localizacao_cadastro = req.body.localizacao_cadastroServer;
  var fk_instituicao = req.body.fk_instituicaoServer;


  if (ip_cadastro == undefined) {
    res.status(400).send("ip_cadastro está undefined!");
  } else if (so_cadastro == undefined) {
    res.status(400).send("so_cadastro está undefined!");
  } else if (localizacao_cadastro == undefined) {
    res.status(400).send("localizacao_cadastro está undefined!");
  } else if (fk_instituicao == undefined) {
    res.status(400).send("fk_instituicao está undefined!");
  }
  else {


    servidorModel.cadastrarSv(ip_cadastro, so_cadastro, localizacao_cadastro, fk_instituicao)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro do Servidor! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function atualizar_servidor(req, res) {

  // input_ip_novoServer:input_ip_novoVAR,
  // input_so_novoServer:input_so_novoVAR,
  // input_localizacao_novaServer:input_localizacao_novaVAR,

  var ip_atualizar = req.body.input_ip_novoServer;
  var so_atualizar = req.body.input_so_novoServer;
  var localizacao_atualizar = req.body.input_localizacao_novaServer;


  if (ip_atualizar == undefined) {
    res.status(400).send("ip_atualizar está undefined!");
  } else if (so_atualizar == undefined) {
    res.status(400).send("so_atualizar está undefined!");
  } else if (localizacao_atualizar == undefined) {
    res.status(400).send("localizacao_atualizar está undefined!");
  }
  else {


    servidorModel.atualizar_servidor(ip_atualizar, so_atualizar, localizacao_atualizar)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar ao atualizar o Servidor! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function excluir_servidor(req, res) {
  // :)
  //                 input_ipServer:input_ipVAR,


  var ip_excluir = req.body.input_ipServer;


  if (ip_excluir == undefined) {
    res.status(400).send("ip_atualizar está undefined!");
  }
  else {


    servidorModel.excluir_servidor(ip_excluir)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar ao excluir o Servidor! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function BuscarServidor(req, res) {
  var id = req.params.id;

  servidorModel.BuscarServidor(id)
    .then(
      function (resultado) {
        console.log(`\n Resultados encontrados: ${resultado.length}`);
        console.log(`Resultados: ${JSON.stringify(resultado)}`) //transforma JSON em string
        if (resultado.length >= 1) {
          console.log(resultado);
          res.json(resultado);
        } else {
          res.status(403).send("historico não existe!")
        }
      }
    )
}


function pesquisarServidor(req, res) {
   
  var caractere = req.body.caractereServer;
  var fk_instituicao = req.body.fk_instituicaoServer;

  // Faça as validações dos valores
  if (caractere == undefined) {
      res.status(400).send("A pesquisa está está undefined!");
  } else if (fk_instituicao == undefined) {
      res.status(400).send("A pesquisa está está undefined!");
  } else {
      
      // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
      servidorModel.pesquisarServidor(caractere, fk_instituicao)
          .then(
              function (resultado) {
                  res.json(resultado);
              }
          ).catch(
              function (erro) {
                  console.log(erro);
                  console.log(
                      "\nHouve um erro ao realizar a pesquisa do servidor! Erro: ",
                      erro.sqlMessage
                  );
                  res.status(500).json(erro.sqlMessage);
              }
          );
  }

}


module.exports = {
  buscarServidorPorEmpresa,
  cadastrarSv,
  atualizar_servidor,
  excluir_servidor,
  BuscarServidor,
  pesquisarServidor,
  listar
}