let totalBuffer=0;
let newBUFfer="";
let BUFfer="0";
let previousOperator ;
let arr_a = [];
let lastOperationEquals = false; // this will make sure that entering any number just after a calculation resets the calcultor screen and BUFfer 
function buttonClick(value){
    if (value==="HISTORY"){
        showHistory();
        return;
    }else{
    if (isNaN(parseInt(value))){
        forSYMBOL(value);
        console.log("symbol handling");
    }else {
        forNumber(value);
        console.log("number handling");
    }}
    screeninput();
}
function setHistory(newBUFfer){

    let val = newBUFfer;
    val += "=";
    val += BUFfer;
    arr_a.push(val);
}
function showHistory(){
   
        document.querySelector(".screen-b").innerText= arr_a;
}
function forSYMBOL(value) {
    
    switch (value) {
        case 'c' :
            BUFfer = "0"
            newBUFfer = ""
            lastOperationEquals = false;
            break;

        case '←':
            BUFfer = BUFfer.toString();
            if (BUFfer.length === 1) {
                BUFfer = "0";
              } else {
                BUFfer = BUFfer.slice(0, BUFfer.length - 1);
              }
              lastOperationEquals = false;  
              break;
        case '=' :
            handleEqualsto();
            setHistory(newBUFfer);
            lastOperationEquals = true;
            break;
        case '*' :
        case '-' :
        case '+' :
        case '/' :
            lastOperationEquals = false;
            newBUFfer +=value;
            handdleMATH(value);
            break;
    }
    history();
}
function history(){
    document.querySelector(".screen-a").innerText= newBUFfer ;
}
function handleEqualsto(){
    //dedicated fucntion for equals to sign
    if( previousOperator === null){
        return;
    }else{
        mathHandling(parseInt(BUFfer));
        previousOperator = null;
        BUFfer = totalBuffer;
        totalBuffer= 0;
    }
}
function handdleMATH(value){
    if (BUFfer === "0" ){
       return;
    }else {
        const intBUFfer = parseInt(BUFfer);
        if (totalBuffer===0){
            totalBuffer=intBUFfer;
        }else{
            mathHandling(intBUFfer);
        } previousOperator=value;
        BUFfer = "0"
    }

}
function mathHandling(intBUFfer) {
    if (previousOperator === "+"){
        totalBuffer += intBUFfer;
    } else if( previousOperator === "-"){
        totalBuffer -= intBUFfer;
    }else if( previousOperator === "*"){
        totalBuffer *= intBUFfer;
    }else{
        totalBuffer /= intBUFfer;
    }
}
function forNumber(value){
    
    if( lastOperationEquals=== true){
        BUFfer = "0";
        newBUFfer=""
    }
    newBUFfer +=value;
    if (BUFfer ==="0") {
        BUFfer = value ;
        lastOperationEquals =false;
    }else{
        lastOperationEquals = false;
        BUFfer +=value;
    }
}

function screeninput(){
    document.querySelector(".screen").innerText= BUFfer ;

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