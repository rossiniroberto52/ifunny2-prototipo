const http = require('http');
const porta = process.env.PORT || 3000;
const formidable = require('formidable')
const fs = require('fs')

const servidor = http.createServer((req,res) => {
    if(req.url == '/envioDeArquivo'){
        const form = new formidable.IncomingForm();
        form.parse(req, (erro, campos, arquivo) => {
            const urlantiga = arquivo.fileToUpload.path
            const urlnova = 'C:/' + arquivo.fileToUpload.name
            fs.rename(urlantiga, urlnova, (erro) => {
                if (erro) throw erro;
                res.write('Arquivo movido!')
                res.end()
            })
        })
    }else{
    
      res.writeHead(200, {'Content-Type':'text/html'});
      res.write('<form action="envioDeArquivo" method="post" enctype="multipart/form-data">')
      res.write('<input type="file" name="fileToUpload"><br>')
      res.write('<input type="submit" value="enviar">')
      res.write('</form>')
      return res.end()

    }
})

servidor.listen(porta)