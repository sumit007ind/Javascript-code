// console.log("i am going to learn javascript"); 
// name="sumit sharma";
// age = 20;
// x=undefined;
// isfollow = true;
// let name ="sumit shamra";

// const student ={
// fullname: "sumit sharma",
// age : 20,
// cgpa : 7.12,
// isPass: true,

// };
// const product ={
// title: "ballpen",
// rating: 5,
// offer:10, 
// price: 270,

// };

// console.log(product);
// let a = 5;
// let b = 4;
// console.log("a=" , a , " & b=" , b);
// console.log("a%b =" , a%b);
// console.log("a**b =" , a**b); 

// unary operator
// let a = 10 ;
// let b = 20 ;
// console.log("a = ", a, " & b = ", b );
//  a++;
//  console.log("a=",a);
//  let a = 10 ;
  
//  let b = 20 ;
//  console.log("a = ", a, " & b = ", b );
//  a--;
//  console.log("a=",a);
//  assignment operators
//  let a = 10 ;
  
//  let b = 20 ;
//  console.log("a = ", a, " & b = ", b );
//  a++;
//  console.log("a=",a);
//  let a = 5;
//  let b= 4;
//  a -= 5 ;
//  console.log("a =", a);

//  comparison operator
//  let a = 5; 
//  let b = 4;
  
//  console.log("a==b", a!==b );
//  let a = 5; //number
//  let b = "4"; // string 
  
//  console.log("a==b", a!==b );
// logical operator
// let a = 10;
// let b = 20;

//  console.log("cond1 || cond2 =" , a < b || a===10); // pipe

// conditional statement
//  let age = 20;
//   if (age> 18){
//    console.log(" you can vote");
//  }
// if ( age>18){
//     console.log(" you can not vote ");
// }
// let mode = "dark";
// let color;
// if (mode ==="dark"){
//     color="black";

// }
// if ( mode === "light"){
//     color="white";

// }
// console.log(color);

// let mode = "light";
// let color;
// if (mode ==="dark"){
//     color="black";

// }
// else{
//     color = "white";
// }


// console.log(color);

//  let num =15;
//   if ( num%2 === 0){
//     console.log ( num," is even");
//   }
//  else{
//     console.log( num ," is odd");
//  }

//   let mode = "blue";
//   let color;

//   if ( mode === "dark")
//     {
//     color = "black";
//   }
//    else if (mode=== "blue"){
//     color = " blue";

//    }
//    else{
//     color = "white";

//    }

//    console.log (color ); 
 //ternary operator
//   let age = 16;

//    let result =  age >= 18 ? "adult" : "not adult";

//    console. log (result);

//    let name =  prompt("hello ");
//     console.log ("name");

    // let num = prompt("enter a number ");

    // if ( num%5 === 0){
    //     console.log( num , "is multiple of 5");

    // }
    // else{
    //     console.log( num, " is not multiple of 5");

    // }
//     let score = prompt("enter your score");

//      let grade;
//       if ( score>= 90 && score<=100){
//         grade = "A";
        
//       }
//       else if (
//         score>= 70 && score<= 89
// ){
//     grade = "B";

// } else if (score>= 60&& score<= 69){
//     grade = "C";

// } else if (score>=50 && score<=59){
//     grade= "D";
// }
// console.log ("according to my score, your grade was", grade);
// for(let count = 1; count <=10000; count++)

// {
//     console.log("sumit sharma");
// }
// let sum =0 ;
// let n = 100;
// for(let i=1; i<=n ; i ++){
//     sum = sum +i ;


// }
// console.log ("sum", sum );
// console.log ("loop has ended");
//    let i = 1; 
//    while(i<=5){
//     console.log("i" , i );
//     i ++;

//}
// let i = 1 ;
// do {
//     console.log("i ", i);
//     i++;
// }
// while(i <= 12);

//  let str = "  raj sharma";
//   for ( let i of str){
//     console.log("i" , i);

//   }
//  let student = {
//     name : "sumit sharma ",
//     age: 20 ,
//     cgpa: 7.12,
//     ispass: true,


//  };
//  for (let key in student){
//     console.log("key = " , key , "value", student [key]);
//  }
// for (let num = 0; num<=100; num++){
//     if(num%2 !== 0){
//         console.log("num=" ,  num);

//     }
   

// }

//   let gameNum = 25;
//   let userNum = prompt( " guess the number: ");
//   while(userNum!== gameNum)
//   {
//     userNum = prompt("you entered the wrong number , guess again");
//   }

  
// console . log ("congratulation , ypu entered rught number");
// let str = "   sumit          sharma         ";
// console.log(str.trim());

  
//  let str = "12345678";
//  console.log(str.slice (1,4));
// let str1 = "raj";
// let str2 = "sharma";
//  let res = str1.concat(str2);
//  console.log(res);

// let fullName = prompt("enter your full name without spaces");
// let username = "@" + fullName + fullName.length;
// console . log ( username);

// ARRAYS IN JS 
// let marks = [ 25,26,26,626];
// console.log(marks);
// console.log(marks.length);

// let heroes = ["raj ", "sumit sharma" , "sudhanshu" , "manish", "prateek"];

// for (let ind= 0; ind<heroes.length; ind++)
// {
//   console.log(heroes[ind]);
// }
   
// let marks =[ 85, 97, 44, 37,76,60];
// let sum = 0;
// for (let val of marks){
//   sum=sum + val;

// }
// let avg = sum/ marks.length;
// console.log(`average marks of class =${avg}`);


// let price =[250,645,300,900,50]; 
// let idx = 0;
// for(let val of price){
//   console.log(`value at index  ${idx} = ${val}`);
//   let offer = val/10;
//   price[idx]= price [idx] - offer;
//   console.log (`value after offer = ${price[idx]}`)

//   idx++;


// }
// let  fooditems = ["tomato", "potato","chips","kurure"
// ]
// fooditems.pop("pizza",
//   "burger","choclate"
// )
// console.log(fooditems.toString);

// let componies= ["bloomberg","google","microshoft","uber","amazon"
// ];
// componies.shift();
// componies.splice(3,1,"apple");
// console.log (componies);

//  function myname(){
//     console.log("welcome to my home");
//     console.log("we are learning javascript");

//  }
//  myname();
// function sum(a,b)
// {
//     s= a+b;
//     return s;


// }
// let val = sum(3,4);
// console.log(val);
//

// function countVowels(str){
//     let count = 0 ;

//      for (const char of str){
//         if(char==="a"||char==="e"|| char==="i"||char==="o" || char==="u"){
            

//         }
//         count++;

//         }
//         return count;

        
// };


//  let arr = [1,2,3,4,5];
//  arr.forEach(function printVal(val){
//     console.log(val);
    
//  })
// let nums =[ 2,3,4,5,6];

// let newArr= nums.map((val)=>{
//     return val / 2;
// }
// );
// console.log(newArr);

// let arr =[1,2,3,4,5,6,7,8,9];
// let evenArr = arr.filter((val)=>{
//     return val%2 !== 0;

// });
// console.log(evenArr);
// let arr =[1,2,3,4,5];
// const output = arr.reduce((res , curr) =>{
//     return res+curr;

// });
// console.log(output);
// let h2 = document.querySelector("h2")
// console.dir(h2);
// h2.innerText = h2.innerText +   "from varanasi";
// let divs = document.querySelectorAll(" .box")


// divs[0].innerText = "new uniqe value 1";
// divs[1].innerText = "new uniqe value 2";
// divs[2].innerText = "new uniqe value 3";
// let div = document.querySelector("div")
// console.log(div);
// let id = div.getAttribute("id")
// console.log(id);
// let name = div.getAttribute("name");
// console.log(name);
// let newBtn = document.createElement("button");
// newBtn.innerText ="click me ";
// console.log(newBtn);
// let div = document.querySelector("div");
// div.after(newBtn);
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me ";
//   newBtn.style.color = "white";
//   newBtn.style.backgroundColor = "red";
//   document.querySelector ("body").prepend(newBtn);

// let para = document.querySelector("para");
// let para=document.setAttribute=("class", "newclass")
// let arr = [10];
// console.log(arr);
// var arr = [1, 66, 20, 32, 5];
// arr.length = 3;

// console.log(arr[2]);
// var nums = [1, 2, 3];
// nums.shift();
// console.log(nums);
// var nums = [1, 2, 3];
// delete nums[0];
// console.log(nums);
// var nums = [1, 2, 3];
// console.log(nums.map());
// var nums = [1, 2, 3, 4];
// console.log(nums.map((n) => n ** 2));
// var nums = [50, 10, 88];

// let res = nums.filter(function (n) {
//   return n > 10;
// });

// console.log(res);
// var nums = [10, 50, 88];

// nums.filter(function(n) {
//     return n > 10;
// });

// const arrgk = ['A', 'B', 'E', 'S' ,'I' ,'T'];
// arr[10] = 10;
// console.log(arrgk.length);
// console.log(nums);
// var arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(3,2));

// var marks = [67, 60, 89, 90, 67, 42];

// var passed = marks.every(function(m) {
//     return m >= 50;
// });
// console.log(passed);


// var arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(2,0));
// var values = [1, 2, 3, 4];
// var ans = values.slice(2);
// console.log(ans);
// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((accumulator, currentValue, index, array) => {
//   array[index ] = array[index ] * 2;
//   return array;
// // });
// console.log(result);
// var arr = [1, 66, 20, 32, 5];
// arr.length = 3;

// console.log(arr[4]);
// console.log([1, 2] instanceof Array);
// let array = [1, 2, 3, 4, 5];
// array.length = 0;
// console.log(array)
// var a = [ ];
// a.unshift(1);
// a.unshift(22);
// a.shift();
// a.unshift(3, [4, 5]);
// a.shift();
// a.shift();
// var output = a.shift();
// console.log(output);
// function compare(a, b) {
//     if (a.year < b.year) return -1;
//     if (a.year > b.year) return 1;
  
//     if (a.name < b.name) return -1;
//     if (a.name > b.name) return 1;
//     return 0;
//   }
  
//   var langs = [
//     {name: 'JavaScript', year: 1995},
//     {name: 'Python', year: 1991},
//     {name: 'Java', year: 1995},
//     {name: 'C++', year: 1989}
//   ];
  
//   console.log(langs.sort(compare));

// const arrgk = ['A', 'B', 'E', 'S' ,'I' ,'T'];
// arr[10] = 10;
// console.log(arrgk.length);

// let btn1 = document.querySelector('#btn1');

//     btn1.onclick = () =>{
//         console.log("btn1 was clicked");
//         let a = 25;
//         console.log(a);

//     }
// let div = document.querySelector("div");
// div.onmouseover = ( ) =>
// {
//     console.log(" you are inside the div ");
//
// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click" ,  () =>{
//     console.log ("button1 was clicked");

// }) 
// let mode1 = document.querySelector("#mode1");
// let currmode = "light"
//  mode1.addEventListener("click" , () =>{

 
//     if(currmode === "light"){
//         currmode= "dark";
//         document.querySelector("body").style.backgroundColor =  "red";

//     }
//     else{
//         currmode="light";
//         document.querySelector("body").style.backgroundColor =  "green";


//     }
//     console.log(currmode);


//  });
// const student = {
//     fullname : "sumit sharma ",
//     marks : 90,
//     printmarks :  function (){
//         console.log("marks = ", this.marks);

//     },
// };
// class Toyotacar{
// constructor(brand){
//     console.log("creating new object");
//     this.brand  = brand;
//     this.mileage = mileage;
// }


//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }
// let fortuner = new Toyotacar("fortuner , 10");

// console.log(fortuner);
// class Parent{
//     hello(){
//         console.log("hello");

//     }
// }
// class Child extends Parent{

// }
// let obj = new Child();
// class Person{
//     eat (){
//         console.log("eat");

//     }
//     sleep(){
//         console.log("sleep");
//     }
// }
// class Engineer extends Person{
//     constructor(branch){
//         console.log("enter child constructor");
//         super();
//         this.branch;
//     }
//     work(){
//         console.log("solve the problems , build somthing");
//     }
// }

// let engobj = new Engineer('chemical engineer');
// let DATA = ("secret information");
// class User{
//     constructor(name,email){
//         this.name  = name;
//         this .email = email;

//     }
//     viewData(){
//         console.log("data = " , DATA);4
//     }
// }
// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         DATA = "some new value";
//     }
// }
// let student1 = new User("sumit","sumit@email.com");
// let student2 = new User("raj", "raj@email.com");
// let admin1 = new Admin("admin" , "admin@gmail.com");
// console.log("one");
// console.log("two");
// function hello (){
//     console.log("hello");
// } 
// setTimeout(hello , 2000)
// console.log("three");
// console.log("four");
// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b ,sumcallback){
//     sumcallback(a,b);
    
// }
// calculator(1,2,sum);
// function getdata(dataId , getnextdata)
// {
//     setTimeout(() =>{
//         console.log("data",dataId);
//         if(getnextdata){
//             getnextdata();
//         }

//     }, 2000);
// }
// getdata(1 ,()=>{
//     console.log("getting data 2 ....");
//     getdata(2 , ()=>{
//         console.log("getting data 3...");
//         getdata(3 , ()=>{
//             console.log("getting data 4 ...");
//             getdata(4)
//         })
//     });
// });

// let promise = new Promise((resolve, reject)=>{
//     console.log("i am a promise");
//     resolve(123);
// })
// const getPromise = ()=>{
//      return new Promise((resolve, reject)=>{
//         console.log("i am a Promise");
//         resolve("success");
//     })
// };
// let promise = getPromise();
// promise.then(()=>{

//     console.log ("promise fullfilled");
// });
// function asyncfunc(){
//     return new Promise((resolve ,reject)=>{
//         setTimeout(()=>{
//         console.log("some data1");
//         resolve("success");
//         } , 4000);
//     });
// }
// console.log("fething data1 ")
// let p1 = asyncfunc();
// p1.then((res)=>{
//     console.log(res);

// });
// function asyncfunc2(){
//     return new Promise((resolve ,reject)=>{
//         setTimeout(()=>{
//         console.log("some data2");
//         resolve("success");
//         } , 4000);
//     });
// }
// console.log("fething data 2  ...")
// let p2 = asyncfunc2();
// p2.then((res)=>{
//     console.log(res);

// })
//  function api(){
//     return new Promise((resolve, rejecct)=>{
//         setTimeout(() => {
//             console.log("weather data");
//             resolve("success");
            
//         }, 2000);
//     });
//  }
// async function getweatherdata(){
// await api()
// }
// const URL = "https://cat-fact.herokuaoo.com/facts";
// const factpara = document.querySelector("#class")
// const btn = document.querySelector("#btn") 
// const getFacts = async()=>{
//     console.log("getting data.... ");
//     let responce = await fetch(URL);
//     console.log(responce);
// }
// btn.addEventListener("click" , getFacts);