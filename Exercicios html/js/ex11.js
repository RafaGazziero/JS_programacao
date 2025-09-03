var n1, n2

n1 = parseInt(prompt("Digite o primeiro valor: "))
n2 = parseInt(prompt("Digite o segundo valor: "))

if(n1 > n2){
    alert("O primeiro valor é maior do que o segundo -> " + n1 + ">" + n2)
}

if(n2 > n1){
    alert("O segundo valor é maior do que o primeiro -> " + n1 + "<" + n2)
}

else{
    alert("Os valores são iguais -> " + n1 + "=" + n2)
}