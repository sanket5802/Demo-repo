//promise.all wait for all of them to finish all the promise 
// ex p1 -2 , p2 - 3 , p3- 5 = so total time will be 5 sec


// in case of error it will thorow err 
// will have to waitt for 8sec or max time amoung all
const p1 = new Promise(function (resolve, reject) {
    setInterval(function () {
        resolve("success");
    }, 1000);
});

const p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject("fail");
    }, 1500);
});

const p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("success");
    }, 8000);
});

Promise.all([p1, p2, p3]).then(function (res) {
    console.log(res);
}).catch(function (err){
console.log(err);
});
