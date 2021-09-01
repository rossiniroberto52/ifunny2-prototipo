const express = require('express');
const rotas = express.Router()

let urlInfo=[
    {'tipo':'login','info':'login'},
    {'tipo':'register','info':'registrar'},
    {'tipo':'acessar','info':'Curso de typescript'}
];

rotas.get('/', (req, res)=>{
    res.json({ola:'seja bem vindo'})
});

rotas.get('/:tipoid', (req, res)=>{
    const tipo = req.params.cursoid;
    const tipoI = urlInfo.find(i=>i.tipo == tipo);
    if(!tipoI){
        res.status(404).json(
            {error:'tipo encontrado',tipoPesquisado:tipo}
        )
    }else{
        res.status(200).json(tipoI)
    }
});

module.exports = rotas;