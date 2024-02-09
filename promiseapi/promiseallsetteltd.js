
// promise all wait till all the promise will setteled
//it will give you an object i.e array of object will have status , value
const p1 = new Promise(function (resolve , reject){
    setTimeout(function(){
        resolve("success");
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
        resolve("success")
    },2000)
})

Promise.allSettled([p1,p2,p3]).then(function (res)
{
    console.log(res)
}).catch(function(err){
    console.log(err)
})