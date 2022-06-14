//- foi criado as pastas .js = controller, model e routes
// ~~~~~~COMO FAZER AS ROTAS FUNCIONAREM~~~~~~~~~
// - Importa o app para o server;
const app = require("./src/app")

// - criar a porta no server.js como uma vriavel 
const PORTA = 8090

// - precisa acessar o app usar o listen, para ouvir a porta 
app.listen(PORTA, () => {
    console.log(`A porta ${PORTA} esta rodando`)
})

// app.listen(PORTA, () => console.log(`Abrindo porta ${PORTA}`))
// desse jeito ^^ não rodou

// - coloca a var porta como parametro e faz uma callback 
// - dentro do callback crio um console com template string para imprimir no terminal uma frase e a variavel da porta

