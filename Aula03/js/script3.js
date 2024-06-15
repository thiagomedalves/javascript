function verifica(){


var nota = document.getElementsByTagName("input")[0].value;

var resultado="aprovado";
if (nota>=7){
    resultado
}
else if (nota<=4){
    resultado="reprovado";
}

else{

resultado = "recuperação";

}

document.getElementsByTagName("label")[1].innerHTML=resultado;



}
