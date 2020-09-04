const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const request = require('request');


router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
        if (err) {
            res.json({
                error: err
            })
        }
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            username: req.body.username,
            password: hashedPass
        })
        user.save()
        .then(user => {
            res.json({
                message: 'User added successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured!'
            })
        })
    })
    console.log(request.body);
})

router.post('/login', (req, res) => {
    var username = req.body.username
    var password = req.body.password

    User.findOne({$or: [{email:username},{phone:username}]})
    .then(user => {
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                res.json({
                    error: err
                })
            }
            if (result) {
                let token = jwt.sign({name: username}, 'verySecretValue', {expiresIn: '1h'})
                res.json({
                    message: 'Login Successful!',
                    token
                })
            }else{
                res.json({
                    message: 'Password didnot match!'
                })
            }
        })
    })
    .catch(err => {
        res.json({
            error: err
        })
    })
})

module.exports = router