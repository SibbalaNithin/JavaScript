let a = [1,2,3,4,5]

// Adding data at last index 

let b = a.push(6,7)
console.log(a)

// Remove Data at last index 

let c = a.pop();
console.log(a)

// Adding data at starting index 
let d = a.unshift(0);
console.log(a)

// Remove data at starting of index 

let e = a.shift();
console.log(a);

// Extract a value from an array 

let f = a.map((v,i)=>{
    console.log(i);
})


let ff = a.map((v,i) => v * 2);
console.log(ff)

// Removing unwanted things

let g = a.filter((v,i) => v > 4);
console.log(g);

// Accumulated a value(Complete array comes in single value)
let h = a.reduce((p,c) =>{
    return p+c;      
    // p = previous value , c = current value 
})
console.log(h)

// It will return the first value
let i = a.find((v,i) => v > 4)
console.log(i);

// (Every) It will check the every index 
let j = a.every((v,i) => v > 5);
console.log(j)

// for in fetch only index
for (const arr in a){
console.log(arr)
}

// for of fetch only values
for (const arr of a){
console.log(arr)
}

// foreach fetch both values and index
let k = a.forEach((v,i) => {
    console.log(`${v}==${i}`);
});

// For each never return values an array

let kk = a.forEach((v,i) => v*2);
console.log(kk)


// reversing an array

let l = a.reverse();
console.log(l)

// convert array into string

let m = a.join();
console.log(m)


let x = prompt("Enter a string: ");
let y = x.split("").reverse().join("");

if (x==y){
    console.log("Yes Palindrome");
}else{
    console.log("Not Palindrome")
}
console.log(y)


let n = new arr(1,2,3,4);
console.log(n);