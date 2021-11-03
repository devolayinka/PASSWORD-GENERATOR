 const  generateCode= document.getElementById("gencode");
const  upperCase= document.getElementById("upper");
const  lowerCase= document.getElementById("lower");
const  numberCase= document.getElementById("number");
const  lengthCase= document.getElementById("length");
const  symbolCase= document.getElementById("symbol");
const  copyButton= document.getElementById("copy");
const boardCase= document.getElementById("board");

const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers='0123456789';
const upperLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols ="!@#$%^&*()_+=";

function getLowerCase(){
return lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
}
function getUpperCase(){
    return upperLetters[Math.floor(Math.random()*upperLetters.length)];
}

function getNumber(){
    return numbers[Math.floor(Math.random()*numbers.length)];
}

function getSymbols(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}

 
function generatePassword(){
   const length=lengthCase.value;
    let password="";
   
    for(let i=0; i<length; i++){
     const path=generatePath(); 
     password+= path; 
   }
boardCase.innerText=password;
}

function generatePath(){
const finalPath=[];
if(upperCase.checked){
    finalPath.push(getUpperCase())
}
if(lowerCase.checked){
    finalPath.push(getLowerCase())
}
if(numberCase.checked){
    finalPath.push(getNumber())
}
if(symbolCase.checked){
    finalPath.push(getSymbols())
}
return finalPath[Math.floor(Math.random()*finalPath.length)];
} 
generateCode.addEventListener("click", generatePassword)


copyButton.addEventListener("click",function(){
    const textarea = document.createElement
    ("textarea");
    const password= boardCase.innerText;

    if(!password){
        return;
    }
    textarea.value=password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("password has been copied to clipboard,please refresh to generate another password");
   
})