let usuario2 = prompt("digite uma data no formato dia/mes/ano")
let meses = [
    " ",
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ]
let x = usuario2.slice(3,5)
let mesUsuario = Number(x)
if(mesUsuario<1 || usuario2>11){
    console.log("data invalida")
}
else {
     console.log(meses[mesUsuario])
}

