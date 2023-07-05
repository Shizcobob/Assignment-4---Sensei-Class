const Ninja = require('./Ninja.js')

class Sensei extends Ninja {
    constructor(name, health=200, speed=10, strength=10, wisdom=10){
        super(name, health, speed, strength)
        this.wisdom = wisdom;
        console.log("New Sensei Created")
    }
    
    showSenseiStats(){
        console.log(`Health = ${this.health}, Speed = ${this.speed}, Strength = ${this.strength}, Wisdom = ${this.wisdom}`)
    }

    speakWisdom(){
        super.drinkSake();
        console.log('Insert Wise Message Here')
    }
}

    module.exports= Sensei

const ninja1 = new Sensei("Hyabusa");
ninja1.showSenseiStats();   