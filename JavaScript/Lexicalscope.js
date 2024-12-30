console.log("Start");
function india(){
    let a = "Prabhas"
    function karnataka(){
        console.log(a)
        let b = "Darshan"
        console.log(b)
    }
    return karnataka
}
india()();
console.log("end")


// Array

let a =["Apple",2, true, undefined, null, function(){},[],{}];
console.log(a)
console.log(typeof a)