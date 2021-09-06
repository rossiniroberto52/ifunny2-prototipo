const db = require('./login.json')
var txt1 = document.getElementsByClassName('inputDB')
function verificador(){
    if (txt1 == db.adm0){
    console.log('adm0 logado')
    alert(txt1)
    }
}
