//referenciar a div camada
const camada = document.querySelector("#camada");

//add tempo de  loading na tela
setTimeout(()=>{
     camada.style.opacity="0";
     camada.style.top="-1000px";
     camada.style.heigth="0vh";
     camada.style.width="0vw";


},5000)