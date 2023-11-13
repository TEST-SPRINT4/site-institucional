
var alertas = [];

function obterDadosGrafico_cpu(idServidor) {

    alterarTitulo(idServidor)

    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/ultimasCPU/${idServidor}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarGrafico_cpu(resposta, idServidor);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API (ALERTAS)');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ ALERTAS: ${error.message}`);
        });
}

function alertar(resposta, idServidor) {
    var temp = resposta[0].temperatura;

    console.log(idServidor === resposta[0].fkIdServidor)
   
    var grauDeAviso ='';


    var limites = {
        perigo: 90,
        alerta: 22,
        ideal: 50,
    
    };

    var classe_temperatura = 'cor-alerta';

    if (temp >= limites.perigo) {
        classe_temperatura = 'cor-alerta perigo-quente';
        grauDeAviso = 'perigo quente'
        grauDeAvisoCor = 'cor-alerta perigo-quente'
        exibirAlerta(temp, idServidor, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp < limites.perigo && temp >= limites.alerta) {
        classe_temperatura = 'cor-alerta alerta-quente';
        grauDeAviso = 'alerta quente'
        grauDeAvisoCor = 'cor-alerta alerta-quente'
        exibirAlerta(temp, idServidor, grauDeAviso, grauDeAvisoCor)
    }
   

    var card;

    if (idServidor == 1) {
        temp_sens_1.innerHTML = temp + "°C";
        card = card_1
    } else if (idServidor == 2) {
        temp_sens_2.innerHTML = temp + "°C";
        card = card_2
    } else if (idServidor == 3) {
        temp_sens_3.innerHTML = temp + "°C";
        card = card_3
    } else if (idServidor == 4) {
        temp_sens_4.innerHTML = temp + "°C";
        card = card_4
    }

    card.className = classe_temperatura;
}

function exibirAlerta(temp, idServidor, grauDeAviso, grauDeAvisoCor) {
    var indice = alertas.findIndex(item => item.idServidor == idServidor);

    if (indice >= 0) {
        alertas[indice] = { idServidor, temp, grauDeAviso, grauDeAvisoCor }
    } else {
        alertas.push({ idServidor, temp, grauDeAviso, grauDeAvisoCor });
    }

    exibirCards();
   
// Dentro da div com classe grauDeAvisoCor há um caractere "invisível",
// que pode ser inserido clicando com o seu teclado em alt+255 ou pelo código adicionado acima.
}

function removerAlerta(idServidor) {
    alertas = alertas.filter(item => item.idServidor != idServidor);
    exibirCards();
}
 
function exibirCards() {
    alerta.innerHTML = '';

    for (var i = 0; i < alertas.length; i++) {
        var mensagem = alertas[i];
        alerta.innerHTML += transformarEmDiv(mensagem);
    }
}

function transformarEmDiv({ idServidor, temp, grauDeAviso, grauDeAvisoCor }) {
    return `<div class="mensagem-alarme">
    <div class="informacao">
    <div class="${grauDeAvisoCor}">&#12644;</div>
     <h3>Servidor ${idServidor} está em estado de ${grauDeAviso}!</h3>
    <small>Porcentagem ${temp}.</small>  
    </div>
    <div class="alarme-sino"></div>
    </div>`;
}