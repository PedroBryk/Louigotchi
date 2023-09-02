var btn = document.querySelector('.action__sleep');

btn.addEventListener("click", function() {

    document.body.style.backgroundColor = "black";

    var img = document.querySelector('.character');

    img.src = "./assets/img/gatinho_dormindo.png";
});