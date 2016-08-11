var passport = require('passport');
var passportLocalStrategy = require('passport-local').Strategy;
var userService = require('../../projectManager/services/users.service');

module.exports = {
    initPassport: initPassport
};

function initPassport() {
    passport.use('local', new passportLocalStrategy({
            usernameField: 'login',
            passwordField: 'password'
        },
        function(login, password, done) {
            userService.getUserBy('login', login).then(
                function(user) {

                    if (!user) {
                        return done(null, false, {
                            message: 'Incorrect login.'
                        });
                    }
                    if (user.password !== password) {
                        return done(null, false, {
                            message: 'Incorrect password.'
                        });
                    }
                    return done(null, user);
                }).catch(function() {
                return done(err);
            });
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        userService.getUser(id).then(function(user) {
          if(user){
            done(null, user);
          } else{
            done(null, false);             
          }
        }).catch(function(err){
          done(err);
        });
    });
}
