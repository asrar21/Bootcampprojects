const express=require('express');
const router=express.Router();
router.get('/',function(req,res,next){
    
    res.status(200).json({
        id:1,
        name:"Bicycle",
        id:2,        
        name:"Mobile"


       
    });
});
module.exports=router;