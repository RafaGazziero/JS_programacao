var nome, idade

nome = prompt("Digite seu nome: ")
idade = parseInt(prompt("Digite sua idade: "))

if (idade >= 18) {
    alert(nome + ", você está apto para tentar tirar a CNH.")
}

else {
    alert(nome + ", você está inapto para tentar tirar a CNH.")
}