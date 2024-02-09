// let x =10;
// let y = 8 ;
// if(x === "10")
// {
//     console.log("hello");
// }
let x  = require('./app')
console.log(x.z())

const arr= [1,2,3,4,4,4];
let res = arr.filter((item)=>{
    return item>2;
})
console.log(res);

// console is global module 
// fs is non globa module we need to import it 

const fs = require('fs');
fs.writeFileSync("hello.txt" , "hellow world form non gloabl module");

console.log(__dirname)







const sayHI = require('./create_server');

sayHI("snaket");
