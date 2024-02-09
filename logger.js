const logger = (req,res,next)=>{
    console.log('before')
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear()
    console.log(method , url , time);
    next();
    console.log('after')
}

module.exports = logger