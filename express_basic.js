const express = require('express');
const app = express();

app.get('/', function (req, res) {
    console.log('user hit the homepage');
    res.status(200).send('Home page');
});

app.get('/about' , function(req,res){
    console.log('user hit about page');
    res.status(200).send('about page')
});
app.get('*' , function(req,res){
    res.status(404).send('<h1>Not found</h1>')
})
app.listen(5000, function () {
    console.log('listening on port 5000');
});
