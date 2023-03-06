'use Strinct';

let array2d=[];

for( let i=0;i<10;i++){
    let row=[];
    for(let j=0;j<10;j++){
       row.push((i+1)*(j+1));      

    }
    array2d.push(row);
}

for(let i=0; i<array2d.length;i++){
    let val=array2d[i];
    process.stdout.write(val.toString());
}

// for(  let i=0;i<array2d.length;i++){
//     let row=array2d[i];
//     for(let j=0;j<row.length;j++){
//         let value=row[j];
//        process.stdout.write(value.toString());
//        process.stdout.write('\t');
//     }
//     console.log();
// }