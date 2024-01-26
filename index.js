const display = document.getElementById("display");

function toDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calcular(){
    try{
        display.value = eval(display.value);
    }
    catch(erro){
        display.value = "Erro";
    }
}