const display=document.getElementById("display");

function append(value){
display.value+=value;
}

function clearDisplay(){
display.value="";
}

function deleteLast(){
display.value=display.value.slice(0,-1);
}

function calculate(){

try{

display.value=eval(display.value);

}
catch{

display.value="Error";

}

}

// Keyboard Support

document.addEventListener("keydown",function(e){

if((e.key>='0' && e.key<='9') || ['+','-','*','/','.','%'].includes(e.key)){
display.value+=e.key;
}

else if(e.key==="Enter"){
e.preventDefault();
calculate();
}

else if(e.key==="Backspace"){
deleteLast();
}

else if(e.key==="Escape"){
clearDisplay();
}

});

let areThisCalculaterBox = document.getElementById("calculator");
let thisBtnInBackGroundChange = document.getElementById("changeboxColor");

let count = 0;

thisBtnInBackGroundChange.addEventListener("click", function () {

    if (count === 0) {
        areThisCalculaterBox.style.background = "rgb(186, 0, 112)";
    } else if (count === 1) {
        areThisCalculaterBox.style.background = "rgb(186, 152, 0)";
        } else if (count === 2) {
        areThisCalculaterBox.style.background = "rgb(0, 7, 133)";
         } else if (count === 3) {
        areThisCalculaterBox.style.background = "rgb(236, 236, 236)";
    } else {
        areThisCalculaterBox.style.background = "rgb(0, 180, 186)";
    }

    count++;

    if (count > 5) {
        count = 0;
    }
});