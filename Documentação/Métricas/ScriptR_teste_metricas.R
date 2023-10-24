summary(`RegistrosTRUSTED`)

comp <- RegistrosTRUSTED$fkComponente

CPU <- subset(RegistrosTRUSTED,fkComponente == 1)
RAM<- subset(RegistrosTRUSTED,fkComponente == 2)
DISCO <- subset(RegistrosTRUSTED,fkComponente == 3)
LATENCIA <- subset(RegistrosTRUSTED,fkComponente == 4)
TEMPO <- RegistrosTRUSTED$dataHora

summary(CPU$dadosCapturados)
summary(RAM$dadosCapturados)
summary(DISCO$dadosCapturados)
summary(LATENCIA$dadosCapturados)

  TEMPO
  CPU
  RAM
  DISCO
  LATENCIA
  
  dadosCPU <- c(CPU$dadosCapturados)
  dadosCPU
  nrow(dadosCPU)
  nrow(CPU$dadosCapturados)
  nrow(TEMPO)
  
  plot(TEMPO, dadosCPU, type = "l", col = "blue", xlab = "TEMPO", ylab = "CPU", main = "Gráfico de Linha Simples")
  