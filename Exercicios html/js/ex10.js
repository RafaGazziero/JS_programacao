var n

n = parseInt(prompt("Digite o valor: "))

if(n < 0){
    n = n + 100
    alert("O valor negativo somado com 100 resulta em: " + n)
}

if(n > 0){
    alert("O valor digitado é positivo, portando só o mostrarei de novo: " + n)
}

else{
    alert("O valor é nulo.")
}