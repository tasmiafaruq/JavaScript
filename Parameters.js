'use strict';

function greet(name, day){
    console.log('Hello',name,".It is ", day);
}

greet("Tasmia", "Monday");

function square(number){
    return number*number;
}

console.log(square(7));

let greet2=function(){
    console.log("Hello Tasmia");
}

greet2();

let greet3=(number)=>{
    console.log("Tasmia again",number);
}

greet3(3);