
//fetch and print the history and output value//
function getHistory(){
    return document.getElementById("history-value").innerText
}
function printHistory(num){
    document.getElementById('history-value').innerText=num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if (num==""){
        document.getElementById("output-value").innerText=num;
    }
    //
    else{
       document.getElementById("output-value").innerText=getFormattedNumber(num);
    }    
}
//change from number to string so it can have comas and also negative values// 
function getFormattedNumber(num){
    if (num=="-"){
        return "";
    }
    var n = Number (num);
    var value = n.toLocaleString("en");
    return value;
}
//printOutput("9876"); to test if the string worked//

function reverseNumberFormat(num){
return Number(num.replace (//g,"")); 
}
//alert(reverseNumberFormat(getOutput()));//test if it will reverse to numbers//

//Add event listener to the numbers//
var number = document.getElementsByClassName("number");
for (var i =0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        //alert("the number  clicked: " + this.id);//test if its working
        var output = reverseNumberFormat(getOutput());
        if(output!=NaN){//if output is a number,then remove concatenation//
            output=output + this.id;
            printOutput(output);
        }
    });    
}

var operator = document.getElementsByClassName("operator");
for (var i =0;i<operator.length;i++){
    operator[i].addEventListener ('click',function(){
        ///alert("the operator clicked :"+this.id);//test if its working//
    //bring clear and backspace operators to function //
        if(this.id== "clear"){
            printHistory("");
            printOutput(""); 
        }
        else if(this.id=="backspace"){
            var 
            output = reverseNumberFormat(getOutput).toString();
            if(output){//if output has a value
                output=output.substr(0, output.lengthlenght-1);
                printOutput(output);  

            }
        }
        else{
            var ouput=getOutput();
            var history= getHistory();
            //if output is empty history might not be empty// 
            if (output=="" && history !=""){
                if(isNaN(history[history.length-1 ])){
                    history= history.substr(0,history.length-1);
                }
            }
            //if output is not empty history might be empty//
            if (output!="" || history !=""){ 
                //conditional statement// 
                output=output==""?
                output:reverseNumberFormat(output);
                history=history+output;
                if(this.id=="="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history + this.id;
                    printHistory(history);
                    printOutput("");  

                  
                }
            }

        }
    }); 
} 