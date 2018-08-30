const express=require('express');
const router=express.Router();
router.get('/',function(req,res,next){
    res.status(200).json({
      message:"orders"
    });
});
router.get('/:orderID',function(req,res,next){
    res.status(200).json({
      message:"orders id is",
      ID:req.params.ID
    });
});

module.exports=router;