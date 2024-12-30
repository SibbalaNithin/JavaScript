async function x() {
    let data = await fetch("https://fakestoreapi.com/products");
    let finalData = await data.json();
    console.log(finalData);
    finalData.map((item, index) =>{
        let body = document.body;
        let section = document.createElement("section")
        section.innerHTML = `<h1>${item.title} </h1>
        <p>${item.description}</p>
        <img src = "${item.image}" alt="" height = "200px" width = "200px">
        `;
        body.appendChild(section);
    });
}
x();