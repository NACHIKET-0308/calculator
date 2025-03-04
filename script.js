let runningTotal=0;
let buffer="0";
let previousOperator ;
let lastOperationEquals = false;
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
            lastOperationEquals = false;
            break; 
        case '←':
            if (buffer.length === 1) {
                buffer = "0";
              } else {
                buffer = buffer.substring(0, buffer.length - 1);
              }
              lastOperationEquals = false;  
              break;
        case '=' :
            handleEqualsto();
            lastOperationEquals = true;
            break;
        case '*' :
        case '-' :
        case '+' :
        case '/' :
            lastOperationEquals = false;
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
    if( lastOperationEquals=== true){
        buffer = "0";
    }
    if (buffer ==="0") {
        buffer = value ;
        lastOperationEquals =false;
    }else{
        lastOperationEquals = false;
        buffer +=value;
    }
}

function reRender(){
    document.querySelector(".screen").innerText= buffer ;

}

function init(){
document
.querySelector(".calc-buttons")
.addEventListener("click",function(event){
    if (event.target.tagName === "BUTTON") {
        buttonClick(event.target.innerText);
      } else {
        console.log("Clicked outside the button or on empty space");
      }
   
    
});
}
init();