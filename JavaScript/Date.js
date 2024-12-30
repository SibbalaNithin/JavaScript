// let a = new Date();
// console.log(a, typeof a)

// let b = a.getFullYear();
// console.log(b);

// let c = a.getDate();
// console.log(c);

// let d = a.getMonth();
// console.log(d)

// let e = a.getMinutes();
// console.log(e)




let name = {
    firstname : "Virat",
    lastname : "Kohli"
}
let printfullname = function(hometown,state){
    console.log(this.firstname, this.lastname, "from", hometown,",",state)
}
printfullname.call(name,"Delhi","Jodhpur")

let name2 = {
    firstname : "Nithin",
    lastname : "Sibbala"
}
printfullname.call(name2,"Piler","Andhra")

printfullname.apply(name2,["Bengaluru", "Karnataka"])

print = printfullname.bind(name,"Gubli hills","Hyderabad")
print()