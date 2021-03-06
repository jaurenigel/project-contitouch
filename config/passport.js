const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Load Admin model
const Admin = require('../models/Admin');


module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email'}, (email, password, done) =>{
            // match user
            Admin.findOne({ email:email })
            .then(user => {
                if(!user){
                    return done(null, false, {message: 'That email cannot be found'});
                }

                // Match password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if(err) throw err;

                    if(isMatch){
                        return done(null, user);
                    }else{
                        return done(null, false, {message: 'Password incorrect'});
                    }
                });
            })
            .catch(err => console.log(err));
        })
    );

    passport.serializeUser(function(user, done){
        done(null, user.id)
    });

    passport.deserializeUser(function(id, done){
        Admin.findById(id, function(err, user){
            done(err, user);
        });
    });
}

