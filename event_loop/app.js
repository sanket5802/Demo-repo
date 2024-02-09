// this is called event lopping where when we used async methods they will run after the execution of the program 
// this is done such that if many users came they if we dont use async then eah have to wait for every other in queue to wait . 
console.log("first")    

setTimeout(()=>{//async function they get offloaded
    console.log("second");
} , 0)

console.log("third")