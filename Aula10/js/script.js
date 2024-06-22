const img = "https://image.tmdb.org/t/p/w500";
const estrutura = document.querySelector("#estrutura");



 /*
 para CARREGAR OS DADOS DA api do themoviedb , iremos usar  o comando fetch para buscar os dados dos filmes populalares,
 este comando tem dois elementos atrelados , e sao :

 then-> entao : quando a execuçao do comando fetch funciona 
 catch -> captura de erro : quando a execuçao do comando fetch falha 
 
 o fetch é uma promise
 */







fetch("https://api.themoviedb.org/3/movie/popular?language=pt-br&page=1&api_key=e8ee1b7136ab091a2fb872089bf3c840")
 .then((response)=>response.json())
 .then((dados)=>{
    dados.results.map((filme)=>{
        let cartaz = document.createElement("div");
        cartaz.setAttribute("class", "cartaz");
        let poster = document.createElement("img");
        poster.src= img+filme.poster_path;
       let votos = document.createElement("div");
       votos.setAttribute("class","votos");

       votos.innerHTML = filme.vote_average;

       let titulo = document.createElement("h2");
       titulo.innerHTML = filme.title;

        let lancamento = document.createElement("p");
        lancamento.setAttribute("class","lancamento");
        lancamento.innerHTML=filme.realise_date;

       
       
       
       
        cartaz.appendChild(poster);
        cartaz.appendChild(votos);
        cartaz.appendChild(titulo);
        cartaz.appendChild(lancamento);
        


        estrutura.appendChild(cartaz);

        
    })




 })
 .catch((erro)=>console.error(erro));



// const cidades = ["Leme","Guarulhos","Sao Paulo", "Maua", "Suzano"];

// let p=1;
// // cidades.forEach(exibir);

// function exibir(itens){
//     console.log(`${p}ª${itens}`);
//     p++;
// }


// cidades.forEach((itens)=>{
//     console.log(`${p}ª${itens}`);
//     p++;
// });


// cidades.map((itens)=>{
//     console.log(itens);
// });