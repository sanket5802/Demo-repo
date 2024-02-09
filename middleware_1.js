const express = require('express');
const app = express();
const logger = require('./logger')

// for any route
const auth = (req,res,next)=>{
    console.log('AUth');
    if(req.query.admin ==='true')
    {  
        req.query.admin = 'true';
        next();
        return
    }else{
        res.send('not AUth');
    }
   
}
app.use(logger);// this will envoke befor evry route
app.use(auth);
// this is for specific route
app.get('/' , logger, (req,res)=>{
    console.log('home page')
    res.send('HOme');
}) 
app.get('/about' , auth, (req,res)=>{
    console.log(`Admin status is ${req.query.admin}`)
    res.send('About')
})


// app.get('/*', logger , (req,res)=>{

//     res.send('....')
// })
app.listen(5000)

