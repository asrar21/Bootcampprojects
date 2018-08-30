const express=require('express');
const router=express.Router();
router.get('/',function(req,res,next){
    res.status(200).json({
        message:"get !!"
    });
});
router.post('/',function(req,res,next){
    res.status(200).json({
        message:"post !!"
    });
});
router.get('/:productID',function(req,res,next){
var id=req.params.productID;
if(id==="special"){
    res.status(200).json({
        message:"hello",
        id:id

    });
}
else{
    res.status(200).json({
        message:"hi",
    })
}
});
module.exports=router;
