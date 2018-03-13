const JwtStrategy= require('passport-jwt').Strategy; //check here: https://jwt.io/ to find out exactly what this is
const ExtractJwt= require('passport-jwt').ExtractJwt;
const User= require('../models/user');
const configDB = require('../config/database');


module.exports= function(passport){
    let opts={};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey= configDB.secret;

    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        User.getUserById(jwt_payload.data._id, (err, user)=>{
            if(err){
                return done(err,false);
            }
            if(user){
                return done(null,user);
            }else{
                return done(null, false);
            }
        });
    }));
}
