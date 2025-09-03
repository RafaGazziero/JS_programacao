var n1, n2, resultado

n1 = parseFloat(prompt("Digite o primeiro valor: "))
n2 = parseFloat(prompt("Digite o segundo valor: "))

resultado = n1 + n2

if(resultado <= 20){
    resultado = resultado - 5
    alert("Subtraindo 5 do resultado, teremos o valor de: " + resultado)
}

else{
    resultado =  resultado + 8
    alert("Somando 8 ao resultado, teremos o valor de: " + resultado)
}
