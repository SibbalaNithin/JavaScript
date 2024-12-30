let body = document.body;
let section = document.createElement("section");
section.id = "sec";
section.className = "secclass";
section.innerHTML = `<h1>Hey, I am a section </h1>`
{/* <br/> */}


body.appendChild(section);
console.log(body);