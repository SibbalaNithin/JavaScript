let em = {
    eName : "Yash",
    eAge : 24,
};

Object.freeze(em);
Object.seal(em);

em.eName = "Ravi";
em.Pin = 560035  

console.log(Object.keys(em));
console.log(Object.values(em));
console.log(Object.entries(em));


// call apply bind   Akshay seni