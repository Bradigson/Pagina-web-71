let body = document.querySelector("body");
let btn = document.querySelector("#boton");

const generadorRandonColor = ()=>{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    return rgbColor;
}

const setBackground = ()=>{
    const newColor = generadorRandonColor();
    body.style.backgroundColor = newColor;
}

btn.addEventListener("click", setBackground);