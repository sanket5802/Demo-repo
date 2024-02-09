// calback function
const {readFile, writeFile} = require('fs');
console.log("start")
readFile('./NODE/world.txt' ,'utf8' , (err , result)=>{
   
    if(err)
    {
        console.log(err);
    }
     console.log(result);

     const first = result;

     readFile('./NODE/hello.txt' , 'utf8' , (err, result)=>{
          if(err)
          {
            console.log(err);
          }
          console.log(result);

          const second = result;

          writeFile('./NODE/file.txt', `here is the content of ${first} , ${second}` , (err, result)=>{
            if(err)
            {
              console.log(err);
            }
            console.log(result);
            console.log("done with this")
          })
     })
})

console.log("start new task")


//output = start 
// start iwith new task
// done with this 
// now in async approach what happens is that when we called the readfile function we start doing next task offloading this readind task 
// so now many users can came to read the file which is better than synch appocah where we have to wait to each read thus is may users came
// it just lead to waste of time 