// soal release 0

class Animal {
    constructor(name){
        this.name = name
        this.legs = 4
        this.cold_blooded = false
    }
    get Aname(){
        return this.name
    }
    set Aname(name){
        this.name = name
    }
    get Alegs(){
        return this.legs
    }
    set Alegs(amount){
        this.legs = amount
    }
    get Ablood(){
        return this.cold_blooded
    }
    set Ablood(c){
        this.cold_blooded = c
    }
    
}

// soal realese 1

class Ape extends Animal{
    constructor(name){
        super(name);
        this.legs = 2
    }

    yell(){
        console.log("auuooooo")
    }

}

class Frog extends Animal{
    constructor(name){
        super(name)
    }

    jump(){
        console.log("hop hop")
    }
}

 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false



var sungokong = new Ape("kera sakti")

console.log(sungokong.name) // "sungokong"
console.log(sungokong.legs) // 2
console.log(sungokong.cold_blooded) // false
sungokong.yell() // "Auooo"

var kodok = new Frog("buduk")

console.log(kodok.name) // "buduk"
console.log(kodok.legs) // 4
console.log(kodok.cold_blooded) // false
kodok.jump() // "hop hop" 


//soal nomor 2

  
  
  class Clock {
    constructor({ template }){
    this.template =template
        
    }
  
  
    render() {
      var date = new Date();
  
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      var output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    };
  
    start = function() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    };
  
  
        
}

  
  var clock = new Clock({template: 'h:m:s'});
  clock.start();  




  