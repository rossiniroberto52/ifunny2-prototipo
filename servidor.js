const express = require('express')
const app = express();
const path = require('path')

const multer = require('multer')

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

app.set('view engine', "ejs");

app.get('/upload', (req,res) => {
    res.render("upload");
});

app.post('/upload', upload.single('image'), (req,res) => {
    res.send("meme uploaded");
});

app.get('/site', (req,res) => {
    res.send(__dirname + "./index.html")
})

app.listen(3001);
console.log('3001 é a porta do sv!')