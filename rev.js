// var age = 20;
// let name = "aryaa";
// const pi = 3.14159265359;
// name = "aryan";


// age = 19;
// console.log(age);
// console.log(name);
// console.log(pi);
// let status = (age > 18) ? "eligible" : "not eligible";
// console.log(status);

// if (true){
//     console.log("ok get in!!!!!!")
// } else{
//     console.log("go out!!!!!!!!");
// }
// for(let i = 5;i>0;i--){
//     console.log(i);
// }
// console.log(typeof(name));
// let firstname = new String(`Aryan`);
// console.log(firstname);
// console.log(typeof(firstname));
// let math = Math.PI;
// console.log(math);
// math = Math.LN2;
// console.log(math);
// math = Math.sin(37);
// console.log(math);
// math = Math.tan(37);
// console.log(math);
// let curr = new Date('march,15,2017');
// let newDate = new Date(2007,5,20,7);

// console.log(curr);
// console.log(typeof(curr));



// console.log(newDate.setFullYear(2024));
// console.log(newDate);



// console.log(Date.fullyear)
//cloning of bojectss
let obj = {
    age : 20,
    wt : 70,
    ht : 180
}
let obj2 = {
    name : "aryan rai",
    roll :21
}

let src = {...obj,...obj2};
obj.age = 21;
console.log(obj);
console.log(obj2);
console.log(src);



















