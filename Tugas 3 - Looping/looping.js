//soal nomor 1

var i = 1
console.log("LOOPING PERATAMA")

while( i <= 20 ){
    if(i % 2 == 0){
        console.log(i, " - I love coding")
        i++
    }
    else{
        i++
    }
}
console.log("LOOPING KEDUA")
var j = 20

while( j > 0 ){
    if(j % 2 == 0){
        console.log(j, " - I will become a mobile developer")
        j--
    }
    else{
        j--
    }
}

//soal nomor 2

console.log(" ")
for (var i = 1;i <= 20; i++){
    if (i % 2 == 1 && i % 3 == 0){
        console.log(i,"I Love Coding")
    }
    else if(i % 2 == 1){
        console.log(i,"Santai")
    }
    else if(i % 2 == 0){
        console.log(i,"Berkualitas")
    }
}

//soal nomor 3

console.log(" ")
var p ="";
var i = 1
while(i <= 4){
    for(var j = 1; j <= 8;j++){
        p += "#"
    } 
    console.log(p)
    p = ""
    i++
}

//soal nomor 4


console.log("")

var p ="";
for(var i = 1; i <= 7; i++){
    for(var j = 1; j <= i;j++){
        p += "#";
        
    } 
    console.log(p)
    p=""
    
}

// soal nomor 5

console.log("")

var c = ""
for(var i = 1; i <= 8; i++){
    if (i % 2 == 0){
        for(var y = 1;y <= 8; y++){
            if ( y % 2 == 0){
                c += " "  
            }
            else{
                c += "#"
            }
        }
        console.log(c)
        c =""
    }
    else{
        for(var x = 1;x <= 8; x++){
            if ( x % 2 == 0){
                c += "#"  
            }
            else{
                c += " "
            }  
          }
        console.log(c)
        c =""
    }
    

}