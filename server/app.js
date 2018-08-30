const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongodb = require('mongodb');
const User = require("./api/models/user");
const Ad = require("./api/models/ad");

const app = express();

var connection = mongoose.connect('mongodb://localhost:27017/olx1');


var db = mongoose.connection;
db.on('error', function () { console.log("error in connection ") })
db.once('open', function () {
    console.log("connection  opened")
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Credentials',"true");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
    next();
});
//ROuting

// var productRoutes = require('./api/routes/products');
// var orderRoutes = require('./api/routes/orders');
var categoryRoutes = require('./api/routes/category');
var bicycleRoutes = require('./api/routes/bicycle');
var mobileRoutes = require('./api/routes/mobile');
var postRoutes = require('./api/routes/post');
var caRoutes = require('./api/routes/ca');
// var adRoutes = require('./api/routes/ad');
// var userRoutes = require('./api/routes/user');
// app.use(morgan('dev'));

// app.use(function(req,res,next){
// res.header('Access-Control-Allow-origin','*');
// res.header('Access-control-Allow-Headers','*');

//     // res.header('Access-Control-Allow-Methos','PUT,POST,DELETE,GET')

// });

// app.use('/products', productRoutes);
// app.use('/orders', orderRoutes);
app.use('/category', categoryRoutes);
app.use('/bicycle', bicycleRoutes);
// app.use('/user', userRoutes);
app.use('/mobile', mobileRoutes);
app.use('/post', postRoutes);
app.use('/ca', caRoutes);
// app.use('/ad', adRoutes);
// app.use('/ad/cart', adRoutes);

app.post("/user/signup", (req, res) => {
    console.log('req', req.body);
    // const user = new User({
    
    const user = new User({


        email: req.body.email,
        password: req.body.password
    })
    // res.send({status:true});
    user.save(function (err, result) {
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
app.post('/user/login', (req, res, next) => {
    console.log("request");
    console.log(req.body);
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'AuthFailed'
                });
            }
            User.find(function(err,result){
                if(req.body.password===result.password){
                    console.log("passwordmatches")
                    return res.status(200).json({
                        message: 'Auth succesful',
                        redirect: true
                    });
                }else{
                    return res.status(200).json({
                        message: 'Auth failed',
                        redirect: false
                    });
                }
            })
            
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






// app.use(function (req, res, next) {
//     const error = new Error();
//     error.status(404);
//     next(error);
// });
// app.use(function (error, req, res, next) {
//     res.status(error.status || 500);
//     res.json({
//         error: {
//             message: error.message
//         }
//     });
// });
module.exports = app;