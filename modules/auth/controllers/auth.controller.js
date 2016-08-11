var passport = require('passport');

module.exports = {
    login: login,
    getUser: getUser,
    logout: logout
};

function login(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.json({
                success: false,
                error: 'Authentication failed: ' + info.message
            });
        }
        req.logIn(user, function(err) {
            if (err) {
                return next(err);
            }
            return res.json({
                login: user.login,
                firstName: user.firstName,
                lastName: user.lastName
            });
        });
    })(req, res, next);
}

function getUser(req, res, next) {
    if (req.isAuthenticated()) {
        return res.json({
            success: true,
            user: req.user
        });
    } else {
        return res.json({
            success: false,
            message: 'You are not logged in.'
        });
    }
}

function logout(req, res, next){
  req.logOut();
  return res.json({
    success: true
  });
}
