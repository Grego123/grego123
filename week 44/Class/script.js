function testString(el, text){
    resultDiv = document.getElementById(el);
    console.log(resultDiv);
    resultDiv.innerHTML = text;
}
function clickedButton(){
    input1 = document.getElementById(in1).value;
    // console.log(input1)
    testString("res1", input1)
}

function dialoguriFanjara(){
    // alert();
    conf = confirm("Do you understand?");
    console.log(conf);
    resultDiv = document.getElementById("res3");
    if(conf==true){
        resultDiv.innerHTML = "Gavige!!!! :))))"
    }else if(conf==false){
        resultDiv.innerHTML = "Ver Gavige!!! :((("
    }
    pro = prompt();
    console.log(prom);
    resultDiv = document.getElementById("res4");
    if(prom!=null)
    resultDiv.innerHTML = prom;
}
else{
    resultDiv.innerHTML = "Monacemebi ar aris"
}