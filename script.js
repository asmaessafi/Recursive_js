// // Leap Year Checker:

// let year=prompt('Enter a year:')
// function LeapYear(year) {
//     if((year % 4==0 && year % 100 !== 0)||(year % 4==0 && year % 100 === 0 && year % 400 ==0)){
//         return `${year} is a leap year`
//     }
//   return `${year} isn't leap year`
// }
// console.log(LeapYear(year));




//  //Ticket Pricing: 
// let age=prompt('Enter your age:')
// function TicketPrice(age){
//     switch(true)   {
//     case(age <= 12): 
//     return `Ticket price is $10`
//     case(13<= age <= 17): 
//     return `Ticket price is $15`
//     case(age >= 18): 
//     return `Ticket price is $20`
//     }
// }
// console.log(TicketPrice(age));



//////// recursive :

// //Fibonacci Sequence: 
// function Fibonacci(n) {
//     if (n===0){
// return 0
//     }
//     else if(n==1){
//         return 1
//     }
//     else {
//     return  Fibonacci(n-2)+Fibonacci(n-1)
//     }
// }
// console.log(Fibonacci(12));



// //Power Function:
// function paw(num,p) {
//     if (p===1){
//         return num
//     }
//     else{
//         return num*paw(num,p-1)
//     }
// }
// console.log(paw(5,3));



// // Palindrome Checker:
// function IsPalindorom(str) {
//     let l=str.length
//     if(l<=1){
//         return true 
//     }
//     if(str[0]==str[l-1]){
// return IsPalindorom(str.slice(1,-1))
//     }
//     return false
//     }

// console.log(IsPalindorom('kiooik'));






