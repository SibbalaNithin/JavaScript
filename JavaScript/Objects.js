
// Literal 
let emp = {
    eName  : "Nithin",
    eAge : 22,
    ePlace : {
        eCity : "Bengaluru",
        eStreet : "BTM"
    },
};
console.log(emp, typeof emp);
console.log(emp.eName);
console.log(emp.ePlace.eStreet);

emp.ePlace.ePin = 560001;
console.log(emp)


// Constructor

function stu(name, age) {
    this.name = name
    this.age = age
}
let s1 = new stu("Nithin",22);
let s2 = new stu("Girish",22);
console.log(s1)
console.log(s2)


// New

let hero = new Object();
hero.name = "Hulk";
hero.age = 27;
console.log(hero);



