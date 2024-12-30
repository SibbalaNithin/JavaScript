// let a = 'Welcome'
// console.log(a)

// let b = "to JavaScript"
// console.log(b)

// console.log(a + b)

// console.log(`${a} ${b}`)

// console.log(`I am 
//     Nithin`)

// let name = "Nithin"
// let age = 15
// console.log(`My name is ${name} and my age is ${age} old`)
// console.log(`My name is ${name} and 
//     my age is ${age} old`)


let a = "Hello World";
console.log(a)

let b = a.charAt(6);
console.log(b)

let c = a.charCodeAt(4);
console.log(c)  

let d = a.toUpperCase();
console.log(d)

let e = a.toLowerCase()
console.log(e)

let f = a.startsWith("H")
console.log(f)

let g = a.endsWith("d")
console.log(g)

let h = a.includes("o");
console.log(h)

let i = a.indexOf("o")
console.log(i)

let j = a.repeat(10)
console.log(j)

let k = a.replace("Hello", "Hii");
console.log(k)

let l = a.slice(0,5);
console.log(l)

let m = a.split()
let n = a.split("")
let o = a.split(" ")
console.log(m)
console.log(n)
console.log(o)


let x = prompt("Enter a name: ")
let y = x.charAt(0).toUpperCase();
let z = x.slice(1);
console.log(y.concat(z))