
const getallproduct =  async (req, res)=>{
    res.status(200).json({msg:'i am getting product'});
} 

const getallproductdetails = async (req,res)=>{
    res.status(200).json({msg:'i recieve product details'});
}


module.exports = {getallproduct , getallproductdetails};