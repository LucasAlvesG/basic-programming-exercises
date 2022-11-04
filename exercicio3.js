let dataU1 = prompt("digite a primeira data a ser comparada no formato dd/mm/yyyy")
let dataU2 = prompt("digite a segunda data a ser comparada no formato dd/mm/yyyy")
function conversorDeData (data){
    if(data.length == 10)
    var dia = data.substr(0, 2)
    var mes = data.substr(3,2)
    var ano = data.substr(6,4)
    var dataFinal = (`${ano}-${mes}-${dia}`)
    return dataFinal
}
let dataC1 = conversorDeData(dataU1)
let dataC2 = conversorDeData(dataU2)

function achartempo (dataConv){
    let x = new Date(dataConv)
    return x.getTime()
}
if (achartempo(dataC1) > achartempo(dataC2)){
    console.log(dataU1)
}
else{
    console.log(dataU2)
}

