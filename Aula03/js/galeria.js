var miniatura = document.getElementsByClassName("miniatura")[0];
var fullsize =   document.getElementsByClassName("fullsize")[0];

for (var i = 1 ; i <= 5 ; i++){
miniatura.innerHTML+="<img src=img/foto"+i+".jpg>";
}