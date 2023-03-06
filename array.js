'use strict';
let days=['Sunday','Monday','Tuesday'];

for(let i=0;i<3;i++){
    console.log(days[i]);

}

console.log(days.length);

let arrays2D=[['dog','cat'],['Tiger','Lion', 'Capybara']];

let animal=arrays2D[0][0];

console.log(animal);

for(const element of arrays2D){
    let arow=element;
    for(const element of arow){
        console.log(element);
    }
}