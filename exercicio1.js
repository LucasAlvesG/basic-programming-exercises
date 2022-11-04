
let usuario = prompt("digite o número do mês")
if(usuario<1 || usuario>12){
    console.log("mês invalido")
}
else{
function diasNoMes(mes) {
    let data = new Date(0, mes, 0);
    return data.getDate();
}
console.log(diasNoMes(usuario))
}