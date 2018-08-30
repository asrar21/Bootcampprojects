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
var Mobile = require('../models/mobile');
var mongoose = require('mongoose');
const express=require('express');
const router=express.Router();
var connection = mongoose.connect('mongodb://localhost:27017/olx6');
var db = mongoose.connection;
db.on('error', function(){console.log("error in connection ")})
db.once('open', function(){
    console.log("connection  opened")
});


// var mobile=
//     new Mobile({
//         // imagePath: 'C:\Users\admin\Desktop\project1\olx\public\images\cycle.jpg',
//         name: 'samsung',
      
//         price: 80
//     })

//     // imagePath:'C:\Users\admin\Desktop\project1\olx\public\images\cycle.jpg',
    


//     mobile.save(function (err, result) {
// console.log("err, result", err, result);
//         // done++;
//         // if (done === products.length) {
//         //     exit();
//         // }
//     })
// var done = 0;
// for (var i = 0; i < products.length; i++) {
//     products[i].save(function (err, result) {
//         done++;
//         if (done === products.length) {
//             exit();
//         }
//     })
// }




router.get('/', (req, res, next) => {
    // console.log("request");
    // console.log(req.body);
    Mobile.find({})
        .exec()
        .then(users => {
            console.log(users);
                return res.status(200).json({
                   
                    data: users
                });
        
            // Category.find(function(err,result){
            //     if(name===name){
            //         console.log("passwordmatches")
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
});

    

    




       
    


module.exports=router;
