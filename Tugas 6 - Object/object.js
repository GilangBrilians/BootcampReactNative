// soal nomor 1

function arrayToObject(arr) {
    var now = new Date()
    var thisYear = now.getFullYear() 

    if (arr !== null ){
        for(var i = 0; i < arr.length; i++){
            var person = {
                firstName : arr[i][0],
                lastName : arr[i][1],
                gender : arr[i][2],
                age :  thisYear - arr[i][3] 
            }
        
        if(arr[i][3] == null || arr[i][3] > thisYear){
            person.age = "invalid Birth Year"
        }
        console.log(" ")
        console.log("firstName : "  + person.firstName)
        console.log("lastName : "  + person.lastName)   
        console.log("gender : "  + person.gender)
        console.log("age : "  + person.age)    
        
        }
    }
    else{
        return " "
    }
}
 
// Driver Code
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people) 
/*
    1. Bruce Banner: { 
        firstName: "Bruce",
        lastName: "Banner",
        gender: "male",
        age: 45
    }
    2. Natasha Romanoff: { 
        firstName: "Natasha",
        lastName: "Romanoff",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/
 
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2) 
/*
    1. Tony Stark: { 
        firstName: "Tony",
        lastName: "Stark",
        gender: "male",
        age: 40
    }
    2. Pepper Pots: { 
        firstName: "Pepper",
        lastName: "Pots",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/
 
// Error case 
arrayToObject([]) // ""

// soal nomor 2

function shoppingTime(memberId, money) {

    var item = [
        ['Sepatu Stacattu', 1500000],
        ['Baju Zoro', 500000],
        ['Baju H&N', 250000],
        ['Sweater Uniklooh', 175000],
        ['Casing Handphone', 50000]
    ]

    var member =  {
        id : memberId,
        moneyy : money,
        buy : [],
        changeMoney : 0
    }
    
    if(memberId == null){
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }
    else if(money <= 49000){
        return "Mohon maaf, uang tidak cukup"
    }

    else if(memberId !== null){
        while (member.moneyy >= 49000){
            if(member.moneyy >= item[0][1]){
                member.buy.push(item[0][0]) 
                member.moneyy = member.moneyy - item[0][1]
            }
            if(member.moneyy >= item[1][1] && member.moneyy < item[0][1]){
                member.buy.push(item[1][0]) 
                member.moneyy = member.moneyy - item[1][1]
            }
            if(member.moneyy >= item[2][1] && member.moneyy < item[1][1]){
                member.buy.push(item[2][0]) 
                member.moneyy = member.moneyy - item[2][1]
            }
            if(member.moneyy >= item[3][1] && member.moneyy < item[2][1]){
                member.buy.push(item[3][0]) 
                member.moneyy = member.moneyy - item[3][1]
            }
            if(member.moneyy >= item[4][1] && member.moneyy < item[3][1]){
                member.buy.push(item[4][0]) 
                member.moneyy = member.moneyy - item[4][1]
            }
            member.changeMoney = member.moneyy 
            return member
      }
    }
}

    
   
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja


  //soal nomor 3

  function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    test = []
    price = []

    for(var i = 0 ;i < arrPenumpang.length;i++){
        var awal = rute.indexOf(arrPenumpang[i][1])
        var akhir = rute.indexOf(arrPenumpang[i][2])
        var jumlahTotal = (akhir - awal)*2000 
        price.push(jumlahTotal)
    }

    for(var i = 0 ;i < arrPenumpang.length;i++){
        var penumpang = {
            nama : arrPenumpang[i][0],
            naikDari : arrPenumpang[i][1],
            tujuan : arrPenumpang[i][2],
            jumlah : price[i]
        }
        test.push(penumpang)
    }
    return test
    


  }
   
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
   
  console.log(naikAngkot([])); //[]