// getElementById
let a = document.getElementById("h11");
a.style.background = "red";
console.log(a)

// getElementsByClassName
let b = document.getElementsByClassName("sp1");
for (let i = 0; i < b.length; i++){
    b[i].style.background="blue";
}

// getElementsByTagName
let c = document.getElementsByTagName("b")
for (let i = 0; i < c.length; i++){
    c[i].style.background = "green"
}

// querySelector
let d = document.querySelector(".sp1");
console.log(d)

// querySelectorAll
let e = document.querySelectorAll(".sp1");
console.log(e)