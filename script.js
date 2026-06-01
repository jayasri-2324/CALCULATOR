let display = document.getElementById("display");
function appendValue(value){
    display.value += value;
}
function clearDisplay(){
    display.value = "";
}
function deleteValue(){
    display.value = display.value.slice(0, -1);
}
function calculate(){
    if(display.value == ""){
        display.value = "";
    }
    else{
        display.value = eval(display.value);
    }
}