const express = require('express');
const rotas = express.Router()
const arquivo = require('../servidor')

function processosARQV() {
    var nomeExt = arquivo.name;

    var nome = nomeExt.substr(0, nomeExt.lastIndexOf('.')) || nomeExt;
}

module.exports = rotas;



/*function processarArquivo(arquivo){
    var nomeExt = arquivo.name; 
    
    var nome = nomeExt.substr(0, nomeExt.lastIndexOf('.')) || nomeExt;
    console.log(nome);
}

function processarArquivos(e) {
   var arquivos= e.files; 
   for (var i = 0; i < arquivos.length; i++) {
        processarArquivo(arquivos[i]);
   }
}*/
