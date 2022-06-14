const app = require("./src/app")

const PORTA = 8000

app.listen(PORTA, () => {
    console.log(`A porta ${PORTA} esta rodando`)
})