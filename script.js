let color = document.querySelector("select");
let input = document.querySelector("input");
let body = document.querySelector("body");

color.addEventListener("change",() => {
    let data = color.value;
    console.log(data);
    body.style.backgroundColor = data;
})

input.addEventListener("change",() => {
    let data1 = input.value;
    console.log(data1);
    body.style.backgroundColor = data1;
})