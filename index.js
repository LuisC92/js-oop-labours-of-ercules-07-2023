// First Labour : Heracles vs Nemean Lion

// use your Fighter class here
const Fighter = require("./src/Fighter.js")

// 🧔 Heracles, strength 20, dexterity 6
const hercules = new Fighter("🧔 Hercules", 20, 6)

// 🦁 Nemean Lion, strength 11, dexterity 13
const nemean = new Fighter("🦁 Nemean Lion", 20, 6)

function roundDisplay(fighter1, fighter2){
    return `${fighter1.name} 🗡️ ${fighter2.name} 💙 ${fighter2.name}: ${fighter2.life}`
}

function score(fighter1,fighter2){
    // return fighter1.isAlive() ? 
    // {
    //     winner: fighter1,
    //     looser: fighter2
    // } : {
    //     winner: fighter2,
    //     looser: fighter1
    // }

    if(fighter1.isAlive()){ // fighter 1 life > 0
        return {
            winner: fighter1,
            looser: fighter2 
        }
    } else {
        return {
            winner: fighter2,
            looser: fighter1 
        }
    }



}


let round = 1

while(hercules.isAlive() && nemean.isAlive()){
    console.log(`🕛 Round #${round}`)

    hercules.fight(nemean)
    console.log(roundDisplay(hercules, nemean));

    nemean.fight(hercules)
    console.log(roundDisplay(nemean, hercules));

    round ++
}

const finalResult = score(hercules, nemean)

console.log(`💀 ${finalResult.looser.name} is dead`);
console.log(`🏆 ${finalResult.winner.name} wins (💙 ${finalResult.winner.life} )`);