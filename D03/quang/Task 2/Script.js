// let a = parseInt(prompt("Nhập số đầu tiên: "));

// let b = parseInt(prompt("Nhập vào số thứ 2: "));
// a
// function sum(a,b){
//     return (a) + b;
// }

// alert(sum(a,b));

// var value = Math.pow(231545648978131);

let c = "561651651561651321616321231319819519198198198198198198198198198198"
let d = "561651651561651321616321231319819519198198198198198198198198198198"
let lengC = c.length
for(let i=0;i< c;i++){
    console.log(c.charAt(lengC-i))
}
let lengD = d.length
for(let i = 0; i < d; i++){
    console.log(d.charAt(lengD - i))
}

let c = parseInt(prompt("Nhập vào 1: "));
let d = parseInt(prompt("Nhập vào 2: "));

function sum(c,d){
    return c + d;
}

alert(sum(c,d));