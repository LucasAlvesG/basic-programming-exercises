let usuario = prompt("digite o número do mês")
if(usuario<1 || usuario>12){ //não sei por que mas quando eu coloco 0 ou 1 no prompt o comando identifica como janeiro... 
    console.log("mês invalido") //... e 2 fevereiro e assim por diante ate o mes 12 que ele identifica como dezembro.
}
else{
function diasNoMes(mes) {
    let data = new Date(0 , mes, 0);
    return data.getDate();
}
console.log(diasNoMes(usuario))
}
