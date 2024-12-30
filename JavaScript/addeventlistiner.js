let a = document.querySelector("#btn1");
a.addEventListener("Click", () => {
    let body = document.body;
    body.style.backgroundColor = "red";
});
// console.log(a)

let b = document.getElementById("ip1");
b.addEventListener("blur", () =>{
    let input = document.getElementById("ip1");
    input.value = input.value.toUpperCase();
});