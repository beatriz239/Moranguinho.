//Configurar nosso back end

const express = require('express')

const app = express()

//rota para FRONT END
app.use(express.static('public'))

//iniciar com localhost:3000

app.listen(3000, () => {
    console.log(`Servidor rodando, acesse o link http://localhost:3000`)
})