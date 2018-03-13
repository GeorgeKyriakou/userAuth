const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

router.post('/register', (req, res, next)=>{
    const newUser = new User({
        email: req.body.email,
        password: req.body.password
    });

    User.addUser(newUser, (err, user)=>{
        if(err){
            console.error(err);
            res.json({registered: false})
        } else
        res.json({registered: true})

    });
});


router.post('/login', (req, res, next)=>{
    const email = req.body.email
    const password = req.body.password

    User.getUserByEmail(email, (err,user)=>{
        if(err) throw err
        if(!user){
            return res.json({success: false, msg:'User not found'});
        }
        User.comparePassword(password,user.password, (err, passCorrect)=>{
            if(err) throw err;
            if(passCorrect){
                const token = jwt.sign({data: user}, config.secret, {expiresIn: 302400});

                res.json({
                    success:true,
                    token: 'JWT ' + token,
                    user:{
                        id: user._id,
                        email:user.email,
                        aptNumber:user.apartmentNumber
                    }
                });
            } else{
                return res.json({success: false, msg:'Invalid credentials'});
            }
        });
    });
});

// Use passport.authenticate('jwt', {session:false}) as a parameter to the routes you want to protect,
// and dont forget to pass it in your request headers as {"Authorization", "your JWT token here"}
// Feel free to reach out if you have questions about how to do that.
router.get('/profile', passport.authenticate('jwt', {session:false}) ,(req, res, next)=>{
    const userProfile = {
        "id":req.user._id,
        "email": req.user.email
    };
    Booking.getOneBooking(userProfile.apartmentNumber, (err, response)=>{
        if (err) {
            throw err
        } else {
            if (response.length == 0)  {
                userProfile.hasTimeBooked = false
            } else {
                userProfile.hasTimeBooked = true
                userProfile.dateOfBooking = response.dateOfBooking
                userProfile.bookingZone= response.bookingZone
            }
        }
        res.json(userProfile)
    })
});

// a good excercise would be to try and create a method to remove a user account... ^^
module.exports = router
