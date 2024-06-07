
function calc(){
    var a = parseFloat(document.getElementById("number_a").value);
    var b = parseFloat(document.getElementById("number_b").value);
    var oper = document.getElementById("id_oper").value;
    var result = 0;

    if (oper=="suma") {result = a+b;}
    else if (oper=="resta") {result = a+(b*-1);}   
    else if (oper=="multi") {result = a*b;} 
    else if (oper== "div"){
        if (b==0){result="null"}
        else{result = a*(1/b);} 
    }      
    
    document.getElementById("id_result").value=result;
}