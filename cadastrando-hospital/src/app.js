
// ~~~~~COMO SUBIR O SERVIDOR ~~~~~~~

// - vou criar a rota pricipal que fica no app.js , requerendo (importando) o express= possui um sistema de rots;
const express = require("express") 
// - importar o cors, e coloca-lo em uma variavel, depois cofigurar acessando o metodo use pelo app, chamando o cors
const cors = require("cors")
// - Vou criar uma const chamada app onde vou "guardar" o express nessa variavel, fazendo com que eu tenha acesso a tudo que tá dentro da função express
const app = express()

//CONFIGURAR API
// - precisa configurar a API, fazendo o body-parser atraves do app, com o metodo use, e chamar o express.json
app.use(express.json())
// depois configura acessando o metodo use pelo app, chamand o cors
app.use(cors())

// - exportar o module app
module.exports = app 

// agora vai pro server.js