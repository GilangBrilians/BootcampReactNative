var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]


let i = 0
function recrusive(time){
    readBooksPromise(time,books[i]).then(function(newWaktu){
        if (newWaktu !== 0){
            i+= 1
            recrusive(newWaktu,books[i])
        }
    }) .catch(function(){
        console.log("semua buku sudah dibaca/waktu habis")
    })
}

recrusive(10000)