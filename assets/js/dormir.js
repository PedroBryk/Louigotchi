var btn = document.querySelector('.action__sleep');

var ponto = document.querySelector('.ponto');

console.log(ponto);

btn.addEventListener("click", function() {

    document.body.style.backgroundColor = "black";

    ponto.style.color = "white";

    var img = document.querySelector('.character');

    img.src = "./assets/img/gatinho_dormindo.png";
});