summary(RegistrosTRUSTED)

comp <- RegistrosTRUSTED$fkComponente

CPU <- subset(RegistrosTRUSTED,fkComponente == 1)
RAM<- subset(RegistrosTRUSTED,fkComponente == 2)
DISCO <- subset(RegistrosTRUSTED,fkComponente == 3)
LATENCIA <- subset(RegistrosTRUSTED,fkComponente == 4)

summary(CPU$dadosCapturados)
summary(RAM$dadosCapturados)
summary(DISCO$dadosCapturados)
summary(LATENCIA$dadosCapturados)

  