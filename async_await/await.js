const { removeAllListeners } = require("nodemon")

const p = new Promise(function (resolve , reject){
   
  setTimeout(function (){
     resolve("promise p is resolve")
  } , 5000)
 
})

const q = new Promise(function (resolve , reject)
{
  
    setTimeout(function ()
    {
         resolve("promise q is resolve ")
    } , 10000)
})
 // older way 
// function getdata()
// {
//     p.then(function (value){
//         console.log(value);
//     })
//     console.log("pending")// this will be printed 1st after console.log(value)
// }

// using await
 async function getdata()
{    
    console.log("hello")
    const data = await q ;
    console.log(data)
    //console.log("world")// this is will wait untill promise is resolved 

    const data2 = await p;
    console.log(data2);
   
}
getdata();