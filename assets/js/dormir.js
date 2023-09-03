var btn = document.querySelector('.action__sleep');

let paragrafos = document.querySelectorAll("p");

btn.addEventListener("click", function alternarCores() {
    paragrafos.forEach(paragrafo => {
        if (paragrafo.style.color === "black") {
            paragrafo.style.color = "white";
        } else {
            paragrafo.style.color = "black";
        }
    });
});

