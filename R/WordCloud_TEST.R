# Instalando as bibliotecas
install.packages(c("tm", "wordcloud", "wordcloud2", "RColorBrewer", "pdftools"))

# Carregando as bibliotecas
library(tm)
library(wordcloud)
library(wordcloud2)
library(RColorBrewer)
library(pdftools)

# Inserindo um arquivo pdf
file_location <- "C:/Users/simon/Downloads/Documentação_TEST.pdf"
text <- tolower(pdf_text(file_location))

# Criando o Corpus
corpus <- Corpus(VectorSource(text))

# Realizando a limpeza
corpus <- tm_map(corpus, content_transformer(tolower))
corpus <- tm_map(corpus, removePunctuation)
corpus <- tm_map(corpus, removeNumbers)
corpus <- tm_map(corpus, removeWords, c(stopwords("pt")))
corpus <- tm_map(corpus, stripWhitespace)

# Criando a matriz do documento
dtm <- TermDocumentMatrix(corpus)
matrix <- as.matrix(dtm)
words <- sort(rowSums(matrix), decreasing = TRUE)

# Índices das palavras indesejadas
print(names(words))
indices_indesejados <- c(1, 5, 21, 51, 75, 87, 95, 96, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 192, 193, 194, 195, 196, 197, 198, 199, 200)

# Excluindo palavras indesejadas pelos índices
print(names(words))
words <- words[-indices_indesejados]

# Nuvem de palavras
df <- data.frame(word = names(words), freq = words)
wordcloud(words = df$word, freq = df$freq, min.freq = 1,
          max.words = 50, random.order = FALSE, rot.per = 0.35,
          colors = brewer.pal(8, "Dark2"), scale = c(2, 1))

# Nuvem de palavras interativa
wordcloud2(data = df, size = 0.7, color = "random-light",
           backgroundColor = "black", minRotation = -pi/6, maxRotation = -pi/6, rotateRatio = 0)
