'use strict';
 let counter=1;
let sign=1;
let sum=0;
 while (counter<=1000000){
    
    let term=sign*1/counter;  
    sum+=term;  
    // console.log(sum);
    sign*=-1
    counter+=2;
 }
 console.log("pi is: ",sum*4);
 console.log(Math.PI);