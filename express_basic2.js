const express = require('express');
const app = express();

app.use(express.static('./website'));

app.listen(5000 , ()=>{
    console.log("listing i=on port 5000")
})