var button = document.getElementById("btn");

var changeColorHex = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    var span = document.querySelector("span");
    span.textContent = color;
    var background = document.querySelector("main");
    background.style.backgroundColor = color;
    console.log(span.textContent);
}

button.addEventListener("click", changeColorHex);