function sum(number){
 let counter = 0;
return function(){
    counter++;
    console.log(counter);
 }
}
const result= sum(10);   // This variable holds a function
result();
result();
result();
result();
const resultTwo = sum(10);
// console.log(resultTwo);
resultTwo();
resultTwo();
resultTwo();
resultTwo();

result();