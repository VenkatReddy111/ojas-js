
//////////////////1)switch cases in javascript/////////

// For date Dynamically

// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//      day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }

// console.log(day);



// // For Games

// var games="football";

// switch(games){
//       case "basketball":
//       console.log("i hate football");
//       break;
//       case "cricket":
//       console.log("i hate cricket");
//       break;
//       case "football":
//       console.log(" i love football");
//       break;
// }



////////////////////// 2)global variable///////////////////////

// var message = "Hello";
// console.log(message);   ///output hello
// function say() {
//     // local variable
//     message = 'Hi';  ///output  hi
//     console.log(message); 
// }
// say();
// console.log(message);   ///output hi




/////////////////////////3)use strict mode/////////////////////

// function say() {
//   "use strict";
//    message = 'Hi'; // ReferenceError
//     console.log(message);
// }
// say();




//////////////////////4)Dates in javscript//////////

///show the current date

// var date=new Date();  
// var day=date.getDate();  
// var month=date.getMonth()+1;  
// var year=date.getFullYear();  
// console.log("Date is: "+day+"/"+month+"/"+year);  


//////showing current time when page gets loaded/////////


// window.onload=function(){getTime();}
// function getTime(){  
// var today=new Date();  
// var h=today.getHours();  
// var m=today.getMinutes();  
// var s=today.getSeconds();  
// console.log(h+":"+m+":"+s); 
// }



//////////////////5) javascript Execution contests//////////

// var x=10;
// console.log(x);  //first this will be executed

// setTimeout(()=>{
//   console.log("hello world");
// },5000);     ///finally forth this is executed

// function add(){
//   console.log("ojs is a platform for youngsters to grow");
// }

// console.log("welcome");  /// second this will be executed
// add();  ///Third this will be executed





////////////////////////6)Global objects///////////////////

//By defalut the varibles or functions declared with var key words 
//will be set as properties of global object which is bydefault it is window object and you can check like this 
// in the below contest

// var x=20;
// let y=10;
// console.log(window.x);  //here it is a blocal object 
// console.log(window.y);  // here it is not because it is not declared with var..


/////////////7creating strings,numbers,objects,functions,arrays,booleans using "new" keyword

//Strings:
var name=new String("hello world");
console.log( typeof name);

//Number: "its something different"
var x=new Number(22);
console.log(typeof x);

//Boolean  "its something different"
var m=new Boolean();
console.log(m);

//Object:
var obj=new Object({name:"venkat","age":20});
console.log(obj.name);

//Function:
var add=new Function("x","y","return x+y");
console.log(add(2,3));

//Array:
var arr=new Array("venkat","shiva","ravi","geetha");
console.log(arr);

//Date:
var date=new Date();
console.log(date);


