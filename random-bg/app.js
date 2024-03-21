//Generate Random bg colors

let generateBtn = document.querySelector('button');
let body = document.querySelector('body');



const generateColor = ()=>Math.floor(Math.random()*0xffffff).toString(16)
  // Math.random() generates a random number between 0 and 1.
    // Math.random() * 0xffffff generates a random number between 0 and 16777215 (0xffffff in hexadecimal).
    // Math.floor() rounds down to the nearest integer.
    // toString(16) converts the number to its hexadecimal representation.
generateBtn.addEventListener("click", () => {
    
    // generate colors 
    const color1 = generateColor();
    const color2 = generateColor();
    body.style.background = `linear-gradient(to left top, #${color1}, #${color2})`;
    body.style.backgroundRepeat= "no-repeat";



})