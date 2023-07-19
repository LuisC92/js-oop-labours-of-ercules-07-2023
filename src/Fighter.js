/* Fighter class definition */

const MAX_LIFE = 100

class Fighter {
    constructor(name, strength, dexterity){
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE // 100 for all fighters
    }

    //* method to generate a random value between 1 and max
    getRandomInt(maxValue){
        return 1 + Math.floor(Math.random() * maxValue);
    }

    //* method to launch the attack
    fight(defender){
        const attackPoints = this.getRandomInt(this.strength)

        const damage = Math.max(attackPoints - defender.dexterity, 0)

        defender.life = Math.max(defender.life - damage, 0)

    }

    // check if the fighter is alive (life > 0)
    isAlive (){
        return this.life > 0
    }

}


module.exports = Fighter