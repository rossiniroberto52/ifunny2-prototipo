const express = require('express')
const port = process.env.PORT || 3300
const rotas = require('./rotas/rotas')
const fs = require('fs')

const app = express()

app.use('/', (req,res) => {
    res.send('ola')
})

app.listen(port, () => {console.log('Servidor Rodando')})
