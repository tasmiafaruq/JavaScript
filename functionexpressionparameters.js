'use strict';

function factorial1(value){
    let fact=1;
    for(let n=2;n<=value;n++){
         fact=fact*n;
    }

    return fact;
}

let value=factorial1(5);

console.log(value);

let factorial2=function(value){
    let fact=1;
    for(let n=2;n<=value;n++){
         fact=fact*n;
    }

    return fact;
}

console.log(factorial2(6));

let factorial3=(value)=>{
    let fact=1;
    for(let n=2;n<=value;n++){
         fact=fact*n;
    }

    return fact;
}

console.log(factorial3(7));