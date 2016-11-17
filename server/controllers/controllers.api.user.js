const User = require('../models/user')
const jwt = require('jsonwebtoken')
const passport = require('passport')

module.exports = {
    registerUser: function (req, res) {
        User.register(new User({
            username: req.body.username,
            email: req.body.email
        }), req.body.password, function (err, data) {
            if (err) res.json(err)
            else {
                passport.authenticate('local')(req, res, function () {
                    req.session.save(function (err) {
                        if (err) res.json(err)
                        else {
                            return res.status(200).json({
                                token: jwt.sign({
                                    userId: data._id,
                                    username: data.username,
                                    email: data.email
                                }, process.env.SECRET)
                            })
                        }
                    })
                })
            }
        })
    },

    loginUser: function (req, res) {
        passport.authenticate('local', {

        }, function (err, user, info) {
            console.log(user)
            if (err) return res.json(err)
            else if (!user) return res.status(400).json('no user found')
            else {
                return res.status(200).json({
                    token: jwt.sign({
                        email: user.email
                    }, process.env.SECRET)
                })
            }
        })(req, res, next)
    }
}