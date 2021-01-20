// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 



let i = 0
function recrusive(time){
    readBooks(time,books[i],function(sisawaktubaru){
        if (sisawaktubaru >= 2000){
            i+= 1
            recrusive(sisawaktubaru,books[i])
        }
        else{
            console.log("waktu anda sudah habis")
        }
        
    })
}

recrusive(10000)