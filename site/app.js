process.env.AMBIENTE_PROCESSO = "desenvolvimento";
//process.env.AMBIENTE_PROCESSO = "producao";

const express = require("express");
const cors = require("cors");
const path = require("path");
const PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 80;

const app = express();

const indexRouter = require("./src/routes/index");
const faculdadeRouter = require("./src/routes/faculdade");
const avisosRouter = require("./src/routes/avisos");
const medidasRouter = require("./src/routes/medidas");
const servidorRouter = require("./src/routes/servidor");
const empresasRouter = require("./src/routes/empresas");
const usuarioRouter = require("./src/routes/usuarios");
const funcionarioRouter = require("./src/routes/funcionario");
const redeRouter = require("./src/routes/rede");
const simoneRouter = require("./src/routes/simone");
const daniloRouter = require("./src/routes/danilo");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/faculdade", faculdadeRouter);
app.use("/avisos", avisosRouter);
app.use("/medidas", medidasRouter);
app.use("/servidor", servidorRouter);
app.use("/empresas", empresasRouter);
app.use("/usuarios", usuarioRouter);
app.use("/funcionario", funcionarioRouter);
app.use("/rede", redeRouter);
app.use("/simone", simoneRouter);
app.use("/danilo", daniloRouter);

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});
