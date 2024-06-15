var posicao = 1;

function esquerda(){
    if(posicao <=1){
        posicao = 1;
    }
    else{
        posicao--;
    }
    document.getElementById("foto").innerHTML="<img src=img/foto"+posicao+".jpg>";
}

function direita(){
    if(posicao >=5){
        posicao = 5;
    }
    else{
        posicao ++;
    }
    document.getElementById("foto").innerHTML="<img src=img/foto"+posicao+".jpg>";
}