
const para = document.getElementById("paragraph");
const textBox = document.getElementById("textBox");
const toFah = document.getElementById("toFah");
const toCel = document.getElementById("toCel");
let temp;

function Converter(){
    if(toFah.checked){
        temp = Number(textBox.value);
        temp = (temp*9)/5  + 32;
        para.textContent = `The Temperature is: ${temp}°F`;
    }

    else if(toCel.checked){
        temp = Number(textBox.value);
        temp = (temp-32)*5/9;
        para.textContent = `The Temperature is:${temp}°C`;
    }

    else{
        para.textContent = "Select a unit to convert";
    }
}