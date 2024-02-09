// will return the 1st promise which gets setteled 1st

const p1 = new Promise(function (resolve , reject){
    setTimeout(function(){
        resolve("success");
    },1000
    )
});

const p2 = new Promise(function (resolve , reject){
    setTimeout(function ()
    {
        resolve("success");
    }, 8000)
});

const p3 = new Promise(function (resolve , reject)
{
    setTimeout(function()
    {
        resolve("success")
    },2000)
})

Promise.race([p1,p2,p3]).then(function (res)
{
    console.log(res)
}).catch(function(err){
    console.log(err)
})