const http = require('http')
const porta = process.env.PORT || 3300
const formidable = require('formidable')
const fs = require('fs')

const servidor = http.createServer((req,res) => {
   function envio(req, res, formidable, fs){
    if(req.url == '/enviarmeme'){
        const form = new formidable.IncomingForm();
        form.parse(req, (error, campos, arquivo) => {
            const urlantiga = arquivo.fileToUpload.path
            const urlnova = 'C:/' + arquivo.fileToUpload.name
            fs.rename(urlantiga, urlnova, (erro) => {
                if (erro) throw erro;
                res.write('upload completo!')
                res.end()
            })
        })
    }else{

        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('ola, bem vindo ao Ifunny Reloaded!')
    }
   } 
})

servidor.listen(porta)