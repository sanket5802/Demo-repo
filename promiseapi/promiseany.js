// will return the 1st successs promise wich is settled
// if all fail it will wait for all the promise to get setteld 
// and will wait for ageragate error 
const p1 = new Promise(function (resolve , reject){
    setTimeout(function(){
        reject("fail");
    },1000
    )
});

const p2 = new Promise(function (resolve , reject){
    setTimeout(function ()
    {
        reject("fail");
    }, 8000)
});

const p3 = new Promise(function (resolve , reject)
{
    setTimeout(function()
    {
        reject("fail")
    },2000)
})

Promise.any([p1,p2,p3]).then(function (res)
{
    console.log(res)
}).catch(function(err){
    console.log(err);
    console.log(err.errors);// this will print the error array
})