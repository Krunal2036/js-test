let myArray = [1, 2, 3];

let myObject = {
  a: 10,
  b: 20,
  c: 30
};

Object.prototype.krunal = function(){
    console.log('krunal is here.');
}

Array.prototype.increaseElements = function(){
    for (i = 0 ; i < myArray.length ; i++){
       myArray[i] = myArray[i] + 10 ;
    }
    console.log(myArray);
    
}

// myArray.increaseElements();
// myObject.krunal();

const myString = "Krunal       ";

String.prototype.truelength = function(){
  // const truelength = this.trim().length;
  console.log(`${this}`);
  console.log(`actual length of string is ${this.trim().length}`);
}
myString.truelength();
'rangani   '.truelength();