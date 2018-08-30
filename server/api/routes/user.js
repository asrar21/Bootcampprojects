

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const mongoose = require('mongoose');
const User = require("../models/user");

// router.post("/signup",(req,res,next)=>{
//     bcrypt.hash(req.body.password,10,(err,hash)=>{
//     if(err){
//         return res.status(501).json({
//             Error:err
//         });
//     }
//     else{
//         const user=new User({

//             _id:mongoose.Schema.Types.ObjectId(),
//             email:req.body.email,
//             password:hash
//         });

//         user
//         .save()
//         .then(result=>{
//             console.log(result);
//             res.status(201).json({
//                 message:'User Created'
//             });
//         })
//         .catch(err=>{
//             console.log(err);
//             res.status(500).json({
//                 error:err
//             })
//         })

//     }
// });
router.post("/signup", (req, res, next) => {
    console.log('req', req.body)
    const user = new User({


        email: req.body.email,
        password: req.body.password
    })
    user.save(function (err, result) {
        console.log("err, result", err, result);
        //     }).then(result=>{
        // console.log(result);
        // res.status(201).json({
        //     message:'User Created'
        // });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })




    })

    router.post('/login', (req, res, next) => {
        User.find({ email: req.body.email })
            .exec()
            .then(user => {
                if (user.length < 1) {
                    return res.status(401).json({
                        message: 'AuthFailed'
                    });
                }
                bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                    if (err) {
                        return res.status(401).json({
                            message: 'Auth failed'
                        });
                    }
                    if (result) {
                        return res.status(200).json({
                            message: 'Auth succesful'
                        });
                    }
                    res.status(401).json({
                        message: 'Authfailed'

                    });
                });
            })
            .catch(err => {
                res.status(500).json({
                    Error: err
                })
            });
    });








})

module.exports = router;























module.exports = router;