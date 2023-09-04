//Altera a cor do texto

var btn = document.querySelector('.action__sleep');

let paragrafos = document.querySelectorAll("p");

btn.addEventListener("click", function alternarCores() {
    paragrafos.forEach(paragrafo => {
        if (paragrafo.style.color === "black") {
            paragrafo.style.color = "white";
            document.body.back
        } else {
            paragrafo.style.color = "black";
        }
    });
});

//Altera a cor do background

function toggleBackgroundColor() {
    var body = document.body;
    var currentColor = body.style.backgroundColor;

    if (currentColor === "black" || currentColor === "") {
        body.style.backgroundColor = "#92F611";
    } else {
        body.style.backgroundColor = "black";
    }
}

btn.addEventListener("click", toggleBackgroundColor);

//Altera a imagem

function alteraImagem(){

    var imagem = document.querySelector('.character');

    if (imagemAtual === 1) {
        imagem.src = "./assets/img/gatinho_dormindo.png"; // Troque "nova_imagem.jpg" pelo caminho da segunda imagem
        imagemAtual = 2; // Atualiza a variável para indicar que a segunda imagem está sendo exibida
      } else {
        imagem.src = "./assets/img/gatinho_feliz.png"; // Volta para a primeira imagem
        imagemAtual = 1; // Atualiza a variável para indicar que a primeira imagem está sendo exibida
      }

}

btn.addEventListener("click", alteraImagem);
