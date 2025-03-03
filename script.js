function buttonClick(value){
    if (isNaN(parseInt(value))){
        handleSymbol(value);
    }else {
        handleNumber(value);
    }
}
function handleSymbol(value) {
    console.log("symbol");
}
function handleNumber(value){
    console.log("number");
}



function init(){
console.log("hi")
document
.querySelector(".calc-buttons")
.addEventListener("click",function(event){
    buttonClick(event.target.innerText);
    
});
}
init();