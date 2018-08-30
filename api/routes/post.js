
var Post = require('../models/post');
var mongoose = require('mongoose');
const express=require('express');
const router=express.Router();
var connection = mongoose.connect('mongodb://localhost:27017/olx5');
var db = mongoose.connection;
db.on('error', function(){console.log("error in connection ")})
db.once('open', function(){
    console.log("connection  opened")
});

router.post("/", (req, res) => {
    console.log('req', req.body);
    // const user = new User({
    
    const post = new Post({


        name: req.body.name,
        description: req.body.description,
        price:req.body.price
    })
    // res.send({status:true});
    post.save(function (err, result) {
        console.log("err, result", err, result);
        //     }).then(result=>{
        // console.log(result);
        // res.status(201).json({
        //     message:'User Created'
        // });
    })
    //     email: req.body.email,
    //     password: req.body.password
    // })
})






    

    




       
    


module.exports=router;
