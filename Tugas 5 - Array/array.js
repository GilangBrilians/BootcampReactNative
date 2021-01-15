// soal nomor 1

function range(startNum, finishNum) {
    var arr= []
    if ( startNum < finishNum){
        while (startNum <= finishNum){
            arr.push(startNum)
            startNum++;
            
        }
        
    }
    else if ( startNum > finishNum){
        while(startNum >= finishNum){
            arr.push(startNum)
            startNum--;
        }
    }
    else{
        arr.push(-1)
    }
    return arr
    
}


console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1

//soal nomor 2

function rangeWithStep(startNum, finishNum, step) {
    var arr = []
    if ( startNum < finishNum){
        while (startNum <= finishNum){
            arr.push(startNum)
            startNum += step
            
        }
        
    }
    else if ( startNum > finishNum){
        while(startNum >= finishNum){
            arr.push(startNum)
            startNum -= step;
        }
    }
    else{
        arr.push(-1)
    }
    return arr
    
}

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 


//soal nomor 3

function sum(startNum, finishNum, step) {
    numb = 0
    
    if (step == null){
        step = 1
    }

    if ( startNum < finishNum){
        while (startNum <= finishNum){
            numb += startNum
            startNum += step
            
        }
        
    }
    else if ( startNum > finishNum){
        while(startNum >= finishNum){
            numb += startNum
            startNum -= step;
        }
    }
    else if (startNum == null && finishNum == null){
        numb = 0
    }
    else if( finishNum == null){
        numb = startNum
    }
    return numb
    
}

console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 


//soal nomor 4

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 

function dataHandling(input){
    var i = 0;
    panjang = input.length;
    
    while (i < panjang){
        console.log("")
        console.log("Nomor ID : ",input[i][0])
        console.log("Nama Lengkap : ",(input[i][1]))
        console.log("TTL : ",input[i][2])
        console.log("Hobi : ",input[i][3])
        i++
    }
}

dataHandling(input)

// soal nomor 5

function balikKata(kata){
    var i = kata.length-1
    var newK = "" 
	while(i >= 0){
        newK += kata[i];
        i--
	}
	return newK
}

 
console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I

// soal nomor 6

function dataHandling2(test){
    test.splice(1,1,"Roman Alamsyah Elsharawy")
    test.splice(2,1,"Provinsi bandar Lampung")
    test.splice(4,1,"Pria","SMA Internasional Metro")
    console.log(test)

    date = test.splice(3,1)
    ttl = date.toString().split("/")
    

    switch(ttl[1]){
        case "01" : {console.log("Januari"); break;}
        case "02" : {console.log("Februari"); break;}
        case "03" : {console.log("Maret"); break;}
        case "04" : {console.log("April"); break;}
        case "05" : {console.log("Mei"); break;}
        case "06" : {console.log("Juni"); break;}
        case "07" : {console.log("Juli"); break;}
        case "08" : {console.log("Agustus"); break;}
        case "09" : {console.log("September"); break;}
        case "10" : {console.log("Oktober"); break;}
        case "11" : {console.log("November"); break;}
        case "12" : {console.log("Desember"); break;}

    }

    newttl = date.toString().split("/")
    urutan = newttl.sort(function (value1, value2) { return value2 - value1 } ) ;
    console.log(urutan)

    gabung = ttl.join("-")
    console.log(gabung)
    
    nama = test.splice(1,1)
    potong = nama.toString().split("")
    batasi = potong.slice(0,14)
    gabung = batasi.join("")
    console.log(gabung)

    
}


var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

