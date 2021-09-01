const express = require('express')
const rotas = express.Router()

let urls = [
    {'tipo':'login', 'info':'loginusr'},
    {'tipo':'registro', 'info':'register'},
    {'tipo':'inicial', 'info':'pginicial!'}
]

rotas.get('/', (req,res) => {
    res.json({ola:'seja bem vindo!'})
});

rotas.get('/:tipo', (req,res) => {
    const tipos = req.params.tipo;
    const tiposI = urls.find(i=>i.tipo == tipo);
    if(!cursoI){
        res.status(404).json(
            {error:'404 not found!', tipoP:tipo}
        )
    }
    else{
        res.status(200).json(tipoI)
    }
});

module.exports = rotas;