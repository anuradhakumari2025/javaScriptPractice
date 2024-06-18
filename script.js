//Synchrous progrming
// let a = prompt(" whats your name?");
// let b = prompt( " whats your age?");
// let c = prompt(" tell me more your about yourself");

//Asynchrous programing
// console.log(" start")
// setTimeout (function(){
//     console.log(" hey i am good");
// },2000)
// console.log(" end")

// co

// let heroes = ["anu","radha","rani","papa" ,"mammi","mayank"];
// console.log(heroes);
// console.log(heroes[1]);

//print each element of array
// for(let i=0;i<heroes.length;i++){
//     console.log(heroes[i]);
// }

// for(let val of heroes){
//     console.log(val);
// }

//find avg of marks
// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for(let val of marks){
//     sum = sum + val;
// }
// console.log(sum);
// let avg = sum/marks.length;
// console.log(avg);

//calculate value after discount
// let arr = [250, 645, 300, 900, 50];
// let i = 0;
// for (let val of arr){
//     let newVal = val/10;
//     val = val - newVal;
//     console.log(`Value after applying 10% offer on index ${i} is ` +val);
//     i++;
// }

// for(let i=0;i<arr.length;i++){
//     let newVal = arr[i]/10;
//     arr[i] -= newVal;
// }
// console.log(arr);

//arrow function
// const arrowSum =(a,b)=>{
//     console.log(a+b);
// };

// function mul(a,b){
//     return a*b;
// }
// mul(4,5);
// let printAnu = ()=>{
//     console.log("I am strong");
// }

//calculate vowels in strings
// function countVowel(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }

// let countVowel = (str) =>{
//     let count = 0;
//     for(const char of str){
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//         console.log(count);
//     }
// }

//Myntra bag
// let cartQuantity = 0;
// document.querySelector('#cartSummary').innerText = `  Your Bag has ${cartQuantity} items` ;

// let name = "Anuradha";
// document.querySelector('#nameDisplay').innerText = name;

// const GSTpercentage = 18;
// let cartValue = ((15748+ 2359) - (435* 245)) * (100 + GSTpercentage) /100;
// console.log(cartValue);

// console.log(eval('2+4+3*9-1'));

//Guard Operator
// let age ;
// let finalAge = age || 18;
// console.log(age);
// console.log(finalAge);//first will print age and if age is not defined then it will print 18

//Default Operator
// let age;
// let finalAge = age ?? 18;//consider only null and undefine as falsy
// console.log(age);
// console.log(finalAge);

//Return Statement
// function determineDriveStatus(){
//     let age=21;
//     let status;
//     console.log('checking drive status')
//     if(age === undefined){
//         return 'You are from other world'
//     }
//     if(age > 18){
// status  = 'you can drive';
//     }else{
//         status  =`You can't drive`;
//     }
//     return status;//if return is not written then output will be undefine
// }
// console.log(determineDriveStatus());

// function sum(a,b){
//     let sum=a+b;
//    return sum;
// }
// let num = sum(4,5);
// console.log(num);

// function greeting(name = 'Pyare'){
//     console.log(`Namaste ${name} Uncle`)
// }
// greeting('Sam')//by default pyare name will be printed

//to check if no is odd or even
// let num ;
// function checkEvenOdd(num){
//     if(num%2 == 0){
//         console.log('num is even') ;
//     }else{
//         console.log('num is odd') ;
//     }
// }
// checkEvenOdd(5)

//to check which is greater
// function findGreatNum(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// }
// let check = findGreatNum(3, 5)
// console.log(check);

//TO convert celsius to farhenheit
// function convertCelsiusToFarhen(val){
//     val = (9/5) * val + 32;
//     return val;
// }
// let check = convertCelsiusToFarhen(0);
// console.log(check)

//object practice
// let obj ={
//     name:"mango",
//     price: 34,
//     quantity:45,
//     type:'Alphonso',
//     displayPrice: function(){
//         console.log(`price of obj is ${obj.price}`)
//     }
// };
// console.log(obj);
// console.log(obj.name);
// obj.quantity = 65;
// console.log(obj);
// console.log(obj['price'])
// delete obj.type;
// obj.displayPrice()

// let a  = 3;
// let b =a;
// console.log(`a=${a}, b= ${b}`);
//  a = 5;
//  console.log(`a=${a}, b= ${b}`);

// let x = {val: 5};
// let y = x;
// console.log(`x=${x.val}, y= ${y.val}`);
// x.val = 7;
// console.log(`x=${x.val}, y= ${y.val}`);

// let p = {val: "lasjefi"}
// let q = {val: "lasjefi"}
// console.log(p==q)
// console.log(p===q)//object is only reference so cant check its inner value using comparison operator

// let obj ={
//     name:"mango",
//     price: 34,
//     quantity:45,
//     type:'Alphonso',
//     displayPrice: function(){
//         console.log(`price of obj is ${obj.price}`)
//     }
// };
// let {quantity} = obj;//use instead of obj.quantity
// let {type} = obj;
// console.log(quantity);
// console.log(quantity,type);

//create object to represent a product from myntra
// let product={
//     size:'s',
//     name: 'jeans',
//     price: 678,
//     'delivery-time': 'same day delivery',
// };
// let copyProduct = product;
// console.log(product)
// console.log(copyProduct)
// copyProduct.size = 'm'
// console.log(product)
// console.log(copyProduct)

// let {'delivery-time'} = product//throw error
// console.log(delivery-time)
// console.log(product['delivery-time'])
// console.log(product.delivery-time)//throw error

// let obj = {
//     message: 'good job',
//     status: 'complete'
// };
// let {message,status} = obj;
// console.log(status);
// console.log(message);

// function isIdenticalProduct(product1,product2){
//     if(typeof product1 !== 'object' || typeof product2 !== 'object'){
//         console.warn('parameter passed is not an object');
//         return false;
//     }
//     if(product1 == product2){
//         return true;
//     }
//     if(product1.name === product2.name &&
//         product1.fit === product2.fit &&
//         product1.price === product2.price){
//             return true;
//         }else{
//             return false;
//         }
// }

// let product2={
//     size:'s',
//     name: 'jeans',
//     price: 689,
//     'delivery-time': 'same day delivery',
// };

// console.log(isIdenticalProduct(product,product2))

//DATE
// let date = new Date();
// console.log(date.getTime())

// let btn = document.createElement('button')
// btn.innerText = 'Click Me'
// document.querySelector('.myDiv').appendChild(btn)

//greeting on different times
// function doGreeting(name = 'Dear'){
// let date = new Date();
// // let name = 'Anuradha'
//  let hours = date.getHours();
// //let hours = 19;
// let heading = document.querySelector('#greeting');
// if(hours >= 6 && hours <12 ){
//     heading.innerText = `Good Morning ${name}`;
// }else if(hours >=12 && hours <18){
//     hours.innerText = `Good Afternoon ${name}`;
// }
// else{
//     heading.innerText = `Good Night ${name}`;
// }
// }
// doGreeting('Anuradha');

//click btn and change color and store it
// let noOfTimesClick = localStorage.getItem('noOfTimesClick')||0;
// function timesClick() {
//     noOfTimesClick++;
//     localStorage.setItem('noOfTimesClick',noOfTimesClick)
//     updateBtn();
// }

// function updateBtn() {
//     let button = document.querySelector('#btn');

//     if (noOfTimesClick % 2 === 0) {
//         button.classList.remove('js-odd');
//         button.classList.add('js-even');

//     } else {
//         button.classList.remove('js-even');
//         button.classList.add('js-odd');
//     }
//     //  let button = document.querySelector('#btn')
//     button.innerText = `You have clicked ${noOfTimesClick} times`;
// }

//  updateBtn();//to update button at 0 time click also

//array practise
// let arr = [45,56,7,8];
//  [a,b,c,d ] = arr;
//  console.log(arr);

//  //destructuring of array
//  console.log(a + ' ' + b + ' ' + c + ' ' + d + '') ;

//  let num= [3,5,6,8,9];
//  let sum =0;
//  for(let i=0;i<num.length;i++){
//     sum = sum + num[i];
//  }
//  console.log(sum);
//  let squares =[];
//  for(let i=0;i<num.length;i++){
//     squares[i] = num[i]*num[i];
//  }
//  console.log(squares)

// let arr = [5,6]
// arr.unshift(4);
// arr.push(7)
// console.log(arr)

//find position of element of array
// function returnElement(arr , position){
//     return arr[position-1];
// }
// console.log(returnElement(arr,2));

// let i;
// for(i=10;i>0;i--){
//     console.log(i);
// }

// let arr2 = ['KG','Coding','Js','Course','is','Best']
// let sum =0;
// for(let i=0;i<arr2.length;i++){
//    sum = sum + arr2[i];
// }
// console.log(sum);
// console.log(arr2.join())

//Check prime
// let num=2;
// function isPrime(num) {
//     for (let i = 2; i < num; i++) {
//         if
//             (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(4));

//count five prime numbers
// let i = 0;
// while(i<5){
//     if(isPrime(num)){
//         console.log(num);
//         i++
//     }
//     num++;
// }

//print only positive number
// let num = [1,-6,5,7,-98]
// for(let i = 0;i<num.length;i++){
//     if(num[i]<0){
//         continue;
//     }else{
//         console.log(num[i])
//     }
// }

//Arrow Function
// let sum = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(sum(4, 6))

// let mul = function (num1, num2) {
//     return num1 * num2
// }
// console.log(mul(4, 5))

// let square = num =>
//     num * num;
// console.log(square(5))

//SetTimeOut and SetTimeInterval
// setTimeout(function () {
//     console.log("Good morning")
// }, 2000)

// let alarm = () =>
//     console.log(`Other method of setTimeOut in ${new Date}`);
// let timerId = setTimeout(alarm, 1000);
// console.log(`alarm set with timerId ${timerId}`)
// clearTimeout(timerId)//never execute timerout

// let interval = setInterval(alarm, 1000)
// setTimeout(() => clearInterval(interval), 5000)

//Event Listener
// let button = document.querySelector('.btn');
// button.addEventListener("click",event =>{
//     console.log("hello");
// })
// let behaviour1 = event =>console.log("meri adaa!");
// button.addEventListener("click",behaviour1);
// let behaviour2 = event => console.log("meri baaten!");
// button.addEventListener("click",behaviour2);
// button.removeEventListener('click',behaviour1)//remove behaviour1 event

//for Each loop
// let foods = ['apple','bread','chai'];
// foods.forEach(function(food){
//     console.log(food)
// })

// foods.forEach((food) => console.log(food))//other way of writing food function

// for(let i=0;i<foods.length;i++){
//     console.log(foods[i])
// }//other method of for each loop

//Array.filter and array.map  method
// let arr = [1,2,3,4,5,6,7,8,9]
// let odd = arr.filter((num,index) => {
// if(num %2 === 1){
//     return true;
// }
// return false;
// });
// console.log(odd)

// let odd = arr.filter((num,index) => { return num%2 === 1;}
// );
// console.log(odd);

// let odd = arr.filter((num,index) =>  num%2 === 1
// );
// console.log(odd);//other way of writing above code in less lines

// let square = arr.map((num)=>{
//     return num*num;
// })
// console.log(square)

// let square = arr.map((num) => num*num)//other way of writing in less lines
// console.log(square)

//Practice Question
// let mul = (num1, num2) =>
//    num1 * num2
// console.log(mul(4, 5))//multiply two num by creating a var mul and assign function to it

//create a function that takes a function as a parameter and then runs that method twice
// let printGreeting = () => console.log("namaste");
// let runTwice = (inputGreeting) => {
//   inputGreeting();
//   inputGreeting();
// };
// runTwice(printGreeting);

//button on click grow in size double
function doubleSize() {
  let button = document.querySelector(".btn");
  button.classList.add("js-updateBtn");
}

let button = document.querySelector(".btn");
let format = event => setTimeout(doubleSize,2000)
button.addEventListener('click',format)