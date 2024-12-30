let emp ={
    eName : "John",
    eAge : 25,
}
console.log(emp)
console.log(JSON.stringify(emp))
console.log(JSON.parse(JSON.stringify(emp)))