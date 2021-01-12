//soal nomor 1 conditional 
console.log("soal nomor 1 conditional")

var nama = "Junaedi"
var peran = "Werewolf"

if( nama =="" && peran==""){
    console.log("nama harus diisi")
}
else if (nama =="John" && peran==""){
    console.log("Halo John, Pilih peranmu untuk memulai game!")
}
else if(nama =="Jane" && peran=="Penyihir"){
    console.log("Selamat datang di Dunia Werewolf, Jane")
    console.log("Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!")
}
else if(nama =="Jenita" && peran=="Guard"){
    console.log("Selamat datang di Dunia Werewolf, Jenita")
    console.log("Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf.")
}
else if(nama =="Junaedi" && peran=="Werewolf"){
    console.log("Selamat datang di Dunia Werewolf, Junaedi")
    console.log("Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!" )
}


//soal nomor 2 conditional 


console.log(" ")
console.log("soal nomor 2 conditional")

var hari = 12; 
var bulan = 4; 
var tahun = 1945;

if ((hari <= 31 && hari > 0) && (bulan > 0 && bulan <= 12) && (tahun > 1900 && tahun <= 2200 )){
    switch(bulan){
        case 1 : {console.log(hari,"Januari",tahun); break;}
        case 2 : {console.log(hari,"Februari",tahun); break;}
        case 3 : {console.log(hari,"Maret",tahun); break;}
        case 4 : {console.log(hari,"April",tahun); break;}
        case 5 : {console.log(hari,"Mei",tahun); break;}
        case 6 : {console.log(hari,"Juni",tahun); break;}
        case 7 : {console.log(hari,"Juli",tahun); break;}
        case 8 : {console.log(hari,"Agustus",tahun); break;}
        case 9 : {console.log(hari,"September",tahun); break;}
        case 10 : {console.log(hari,"Oktober",tahun); break;}
        case 11 : {console.log(hari,"November",tahun); break;}
        case 12 : {console.log(hari,"Desember",tahun); break;}

    }
}
else{
    console.log("Hari/bulan/tahun yang anda masukan salah")
}
