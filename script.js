let runningTotal=0;
let buffer="0";
let previousOperator ;
function buttonClick(value){
    if (isNaN(parseInt(value))){
        handleSymbol(value);
    }else {
        handleNumber(value);
    }
    reRender();
}
function handleSymbol(value) {
    switch (value) {
        case 'c' :
            buffer = "0"
            break;
        case '=' :
            handleEqualsto();
            break;
        case '*' :
        case '-' :
        case '+' :
        case '/' :
            handdleMATH(value);
            break;
    }
    console.log("symbol");
}
function handleEqualsto(){
    if( previousOperator === null){
        return;
    }else{
        flushOperation(parseInt(buffer));
        previousOperator = null;
        buffer = runningTotal;
        runningTotal= 0;
    }
}
function handdleMATH(value){
    if (buffer === "0" ){
       return;
    }else {
        const intBuffer = parseInt(buffer);
        if (runningTotal===0){
            runningTotal=intBuffer;
        }else{
            flushOperation(intBuffer);
        } previousOperator=value;
        buffer = "0"
    }

}
function flushOperation(intBuffer) {
    if (previousOperator === "+"){
        runningTotal += intBuffer;
    } else if( previousOperator === "-"){
        runningTotal -= intBuffer;
    }else if( previousOperator === "*"){
        runningTotal *= intBuffer;
    }else{
        runningTotal /= intBuffer;
    }
}
function handleNumber(value){
    if (buffer ==="0") {
        buffer = value ;
    }else{
        buffer +=value;
    }
}

function reRender(){
    document.querySelector(".screen").innerText= buffer ;

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