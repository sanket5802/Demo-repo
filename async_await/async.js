
const p = new Promise(function (resolve , reject)
{
        resolve("promise is return ")
})

async function getdata()// will return a promise even afte you dont write a promise 
{
    return p;
}

 const temp=  getdata() // this p is promise
 console.log(temp);
 
p.then(function(value){
    console.log(value);
})