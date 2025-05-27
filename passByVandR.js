function total(a,b,c){ // Function parameters
    console.log(arguments);
    let array = [...arguments];
    console.log(array);
    // console.log(a,b,c);
}
total(10,20,30);  // Arguments

let name = "Mike";
function test(text){
    text = "Jack";
    console.log(name);
}
test(name);
console.log(name);