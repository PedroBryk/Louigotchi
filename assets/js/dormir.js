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

