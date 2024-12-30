// Only when condition is True
let age = 18;
if (age>=18){
    console.log("Eligible for vote");
}

// Condition either True or False

let Babyage = 4;
if (Babyage >= 5){
    console.log("Baby can join school");
}else{
    console.log("Can't join");
}

// Multiple Condition

let marks = 45;
if (marks>=85){
    console.log("Distinction");
}else if(marks>=60 && marks < 85){
    console.log("First class");
}else if(marks >= 35 && marks < 60){
    console.log("Second class")
}else{
    console.log("Fail");
}

// Switch

let time = 6;
switch (time) {
    case 6:
        console.log("Good Morning!")
        break;
    case 12:
        console.log("Good Afternoon!")
        break;
    default:
        console.log("Enter Proper time")
        break;
}