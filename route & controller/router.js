const express = require('express');
const router = express.Router();
const { getallproduct, getallproductdetails } = require('./controller');

router.route('/').get(getallproduct);
router.route('/user').get(getallproductdetails);
router.route('/:id').get((req,res)=>{
    const idi = req.params.id;
    res.send(`user id is ${idi}`);
})
module.exports = router;
