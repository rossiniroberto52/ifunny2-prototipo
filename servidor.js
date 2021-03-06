const express = require('express')
const app = express();
const path = require('path')
const fs = require('fs')
const plvBan = require('./banedWord.json')

const multer = require('multer');
const res = require('express/lib/response');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

app.use(express.static('public'))
app.use(express.static('files'))


app.get('/', (req,res) => { 
    res.redirect('/site')
});

app.get('/site', (req,res) => {
        res.sendFile('index.html')
    });
 
app.get('/view', (req,res) => {
    res.sendFile('./index.html', {root: __dirname});
});

app.set('view engine', "ejs");

app.get('/upload', (req,res) => {
    res.render("upload");
});

app.post('/upload', upload.single('image'), (req,res) => {
    res.send('meme upado com sucesso absoluto!');
    
});

app.listen(3001);
console.log('3001 é a porta do sv!')