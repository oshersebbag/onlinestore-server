const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/enviroment');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;




module.exports = {
    all: (req, res) =>{
        User.find()
        .then( users => res.json(users))
        .catch( err => res.status(500).json(err));
        },
    create: (req,res) =>{
        const user= new User(req.body);
        User.exists({email: user.email})
        .then(answer => {
            if(answer){
                res.status(400).json("exist").send();
            }
            else {
                user.save()
                .then(user => res.status(201).json(user))
                .catch( err => res.status(500).json(err));
            }
        });

    },
    login: (req,res) =>{
        User.findOne({
            email: req.body.email,
            password: req.body.password
        })
        .then( user => {
            if(user){
                const token = jwt.sign({id: user._id}, config.secret);
                res.json({token});
            }
            else {
                res.status(403).json({});
            }
        }).catch( err => res.status(500).json(err));
    },
    me: (req,res) => {
        User.findOne({
            _id: req.user.id
        })
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
    },
    update: (req,res) =>{
        User.updateOne({ _id: mongoose.Types.ObjectId(req.params.id)},req.body)
        .then(function () {
          res.json();
        })
        .catch(function (err) {
            res.status(404).send(err);
        });

    }
};