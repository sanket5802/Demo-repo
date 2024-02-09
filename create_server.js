const http = require("http");

// http.createServer((req , resp)=>{// using arraw function

//     resp.write("<h1>hello world using arraw function");
//     resp.end();
// }).listen(4500)

//without arraow function
// function dataControl(req, resp) {
//   resp.write("<h1>hello world using simple function");
//   resp.end();
// }

// http.createServer(dataControl).listen(4500);

// createserver takes funtion as parameter

const sayhi = (name) => {
  console.log(`hello, how are you ${name}`);
}

module.exports = sayhi;

// as many as time you referesh the page the hello will get printed 
http.createServer((req , res)=>{
  if (req.url === '/') {
    res.write("Welcome to your page");
    console.log("hello")
    res.end();
  } else if (req.url === '/about') {
    res.end("About page");
  } else {
    res.end(`
      <h1>Oops, page does not exist</h1>
      <a href="/">Back home</a>
    `);
  }
}).listen(4500)


// method 2

