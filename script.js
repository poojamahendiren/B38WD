//named function without parameters:

// function day() {
//     return ("hello world!")
// }
// //day(); // method to call a function
// console.log(day());

//  console.log("guvi")

//named function with parameters:
 
// function add(a,b,c) {
//     // console.log("print");
//     return ((a+b)*(c-b));
   
// }
// console.log(add(3,4,5));

// add(30,40);

// function math(a,b,c,d){
//     return((a+b)-(c+d));
// }
// console.log(math(6,7,2,3));

// function  mul(a,b,c,d){
//     return (a*b*c*d);

// }
// console.log(mul(3,5,5,4));

// function mul(a,b,c,d)
// {
// return(a*b*c*d);

// }
// console.log(mul(2,3,4,5))

//Anonymous function:

// var num = function (a,b,c) {
    
//         return ((a+b)*(c-b));
       
//     }
//     console.log(num(30,14,5));

//IIFE function:'

// (function area (r){
//     // return "hello"
//     console.log(3.14*r*r);
// })
// (5);
    
// (function calculate (r,s,d){
//     //     // return "hello"
//         console.log(r+s-d);
//     })
// (67,80,10);
        
// var res = (a,b) => {
//     return (a+b);
// }
// console.log(res(2,3));

// var result = () => "hello B38 students";
// console.log(result());

//find the average of the marks of 5 students?
//u can use the array as an argument

var marks = [40, 50, 0, 25, 10];

let sum = 0;

for (let mark of marks) {
    sum = sum + mark;
}
 let avg = sum / marks.length;
 
 console.log(avg);






