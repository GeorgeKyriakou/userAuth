const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required:true
    },
    password:{
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('user',UserSchema,'users');


module.exports.getUserById = (id, callback) =>{
    User.findById(id, callback);
}
module.exports.getUserByEmail = (email, cb) =>{
    const query = {email:email}
    User.findOne(query, cb);
}

module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
            if(err) {
                throw err;
            }
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function(inputPass, hash, callback){
    bcrypt.compare(inputPass, hash, (err, passCorrect)=>{
        if(err)
        console.error(err);
        callback(null, passCorrect);
    });
}
