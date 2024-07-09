function greet(neighbourName){
var neighbourName = ['Bob', 'Sam', 'Janine','Victor'];
   return 'Hello, ' + neighbourName;
}
function greetSpanish(neighbourName) {
    return "Hola, " + neighbourName;
}

function greetFrench(neighbourName) {
    return "Bonjour, " + neighbourName;
  }
   
function greetRussian(neighbourName){
    return "Pivet, " + neighbourName;
}

const myMessage = document.querySelector('.myMessage');
const ShowMessageButton = document.querySelector('.theMessageButton');
const ClearMessageButton = document.querySelector('.ClearMessageButton');
const inputBox = document.querySelector('.theInputValue');

 
console.log(greet("Bob")); 
console.log(greet("Sam", "Hola")); 
console.log(greet("Janine", "Bonjour"));
console.log(greet("Victor", "Pivet"));


  