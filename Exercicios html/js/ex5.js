var n1, n2, n3, n4, media, freq

n1 = parseInt(prompt("Digite sua nota 1: "))
n2 = parseInt(prompt("Digite sua nota 2: "))
n3 = parseInt(prompt("Digite sua nota 3: "))
n4 = parseInt(prompt("Digite sua nota 4: "))
freq = parseInt(prompt("Digite seu percentual de frequencia: "))

media = (n1 + n2 + n3 + n4) / 4
if(media >= 7 && freq >= 75){
    alert("Sua média foi igual a " + media + ", e sua frequencia foi de "+ freq + "%, portanto você foi aprovado!")
}

else{
    alert("Você foi reprovado ou por falta de media ou por falta de frequencia, confira seus resultados a seguir para saber o motivo.    Media: " + media + " Frequencia: " + freq + "%")
}
