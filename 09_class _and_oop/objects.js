function multipliByFive(num) {
    return num * 5;
}
multipliByFive.power = 2;

// console.log(multipliByFive(5));
// console.log(multipliByFive.power);
// console.log(multipliByFive.prototype);
 
function drinks(name,price) {
    this.name = name;
    this.price = price;
}

drinks.prototype.increasePrice = function(){
    this.price++;
}

drinks.prototype.showPrice = function(){
    console.log(`${this.price} for ${this.name}`);
}

const chai = new drinks('chai', 20)
const coffe = new drinks('coffe', 160)

chai.increasePrice();
chai.showPrice();

coffe.showPrice();