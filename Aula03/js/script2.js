escolha = prompt("Digite uma opçoes para a cor de fundo:\n1-azul\n2-vermelho\n3-amarelo\n4-cinza");

var cor="white"

if(escolha==1){
   cor="blue";
}
else if (escolha==2){

   cor="red";
}
    else if(escolha==3){

       cor="yellow";
    }
    else if(escolha==4){
       cor="gray";
    }
    else{
        cor;
    
    }

    document.body.style.backgroundColor=cor;
    
    
