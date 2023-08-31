var imagem = document.querySelector('.character');

var btn = document.querySelector('.btn');

function mudaImagem(){

    imagem.src = "./assets/img/gatinho_medio.png";
}

btn.addEventListener("click", mudaImagem);