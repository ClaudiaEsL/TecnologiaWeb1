function sumar (num1,num2){
    var numero1 = parseFloat(document.getElementById('Numero1').value);
    var numero2 = parseFloat(document.getElementById('Numero2').value);
    var resultado1 = numero1 + numero2;
    
    document.getElementById('resultado1').value = resultado1;
}
function mayor (num1,num2){
    var numero1 = parseFloat(document.getElementById('Numero10').value);
    var numero2 = parseFloat(document.getElementById('Numero20').value);
    if(numero1>numero2){
        var resultado2 = numero1;
    }
    else{
        var resultado2 = numero2;
    }
    document.getElementById('resultado2').value = resultado2;
}
function factorial (num1){
    var numero1 = parseFloat(document.getElementById('Numero30').value);
    
    var factorial = 1;
    for(var i = 1; i<= numero1; i++){
        factorial= factorial * i;
    }
    var resultado3 = factorial;
    document.getElementById('resultado3').value = resultado3;
}