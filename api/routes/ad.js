// const express=require('express');
// const router=express.Router();
// // router.get('/',function(req,res,next){
// //     Bicycle={
// //         id:1,
// //         name:"Bicycle",
    
        
// //     };
   
// //     mobile={
// //         id:2,        
// //         name:"Mobile"
// //     };
// //     res.status(200).json({
// //         Bicycle:Bicycle,
      
// //         mobile:mobile


       
// //     });
// // });
// router.get('/',function(req,res,next){
//     var category =
//     new Product({
//         // imagePath: 'C:\Users\admin\Desktop\project1\olx\public\images\cycle.jpg',
//         name: 'Bicylce',
//         description: 'used',
//         price: 10
//     })
// new Product({
//     // imagePath:'C:\Users\admin\Desktop\project1\olx\public\images\cycle.jpg',
//     title:'mobile',
//     description:'used',
//     price:10
//     })
//     category.save(function (err, result) {
//         console.log("err, result", err, result);
       
//     });
// });
// module.exports=router;
var Ad = require('../models/ad');
var mongoose = require('mongoose');
const express=require('express');
const router=express.Router();
var connection = mongoose.connect('mongodb://localhost:27017/olx1');
var db = mongoose.connection;
db.on('error', function(){console.log("error in connection ")})
db.once('open', function(){
    console.log("connection  opened")
});




router.post('/', (req, res, next) => {
    console.log("request");
    console.log(req.body);
    console.log('req', req.body);
    // const user = new User({
    
    const ad = new Ad({


        name:req.body.name,
    })
        
            // Category.find(function(err,result){
            //     if(name===name){
              ad.save(function (err, result) {
                console.log("err, result", err, result);
                //     }).then(result=>{
                // console.log(result);
                // res.status(201).json({
                //     message:'User Created'
                // });
            })       
            //         return res.status(200).json({
            //             message: 'Auth succesful',
            //             redirect: true
            //         });
            //     }else{
            //         return res.status(200).json({
            //             message: 'Auth failed',
            //             redirect: false
            //         });
            //     }
            // })
            
            // bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            //     if (err) {
            //         return res.status(401).json({
            //             message: 'Auth failed'
            //         });
            //     }
                // if (result) {
                //     return res.status(200).json({
                //         message: 'Auth succesful'
                //     });
                // }
                // res.status(401).json({
                //     message: 'Authfailed'

                // });
            // });
        })
        .catch(err => {
            res.status(500).json({
                Error: err
            })
        });

    

    

       
        
        
            


       
    


module.exports=router;
