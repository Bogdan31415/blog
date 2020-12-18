const JwtStrategy = require('passport-jwt').Strategy ,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const keys = require('../config/keys')
const User = require('../models/User')

opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secret;

module.exports = function (passport){passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
    await User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}))}
