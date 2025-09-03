var altura, esporte

altura = parseFloat(prompt("Digite a sua altura em metros: "))

if(altura > 1.80){
    alert("Seu esporte é o basquete.")
}


if(altura < 1.80){
    alert("Seu esporte é o futebol.")
}

else{
    alert("Você está apto para os dois esportes")
}