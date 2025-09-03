var n1, n2, op, resultado

n1 = parseInt(prompt("Digite o primeiro valor: "))
n2 = parseInt(prompt("Digite o segundo valor: "))
op = parseInt(prompt("Digite o número o qual corresponde a operação que você deseja realizar:    1 - soma 2 - subtração 3 - multiplicação 4 - divisão"))

if(op == 1){
    resultado = n1 + n2
    alert("O resultado da soma é " + resultado)
}

if(op == 2){
    resultado = n1 - n2
    alert("O resultado da subtração do segundo valor no primeiro é " + resultado)
}

if(op == 3){
    resultado = n1 * n2
    alert("O resultado da multiplicação é " + resultado)
}

if(op == 4){
    resultado = n1 / n2
    alert("O resultado da divisão do primeiro valor com o segundo é " + resultado)
}