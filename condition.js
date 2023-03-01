'use strict';
 let temperature=process.argv[2];

 if(temperature<20){
        console.log('Activating Heating');

 }
 else if(temperature>21){
    console.log('De-Activating Heating');

}
else {
    console.log("Temperature in normal");
}