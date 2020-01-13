const Category = require('../models/category');
const Product = require('../models/product');
const ObjectId = require('mongoose').Types.ObjectId;
module.exports = {
    all: (req, res) =>{
        Category.find()
        .then( categories => res.json(categories))
        .catch( err => res.status(500).json(err));
        },

    create: (req,res) =>{
        const category= new Category(req.body);
        category.image = req.file.filename;
        category.save()
        .then(category => res.status(201).json(category))
        .catch( err => res.status(400).json(err));
    },
    getById: (req,res) => {
        Category.findById(req.params.id)
        .then(category => {
            if(!category){
                res.status(404).send();
                return;
            }
            res.json(category);
        })
        .catch(err => res.status(500).json(err));
    },
    products: (req,res) => {
        Product.find({categoryId: req.params.id})
        .then(products => res.json(products))
        .catch( err => res.status(500).json(err));
    },
    update: (req,res) => {
        if(req.body.changeImage == "true"){
            req.body.image=req.file.filename;
            delete req.body.changeImage;
        }
        else{
            delete req.body.changeImage;
        }
        Category.findOneAndUpdate({ _id: new ObjectId(req.params.id)},req.body, {new: true})
        .then(function (category) {
          res.status(201).json(category);
        })
        .catch(function (err) {
            res.status(403).send(err);
        });
    },
    remove: (req,res) => {
        Category.findOneAndDelete({ _id: new ObjectId(req.params.id)})
        .then(function () {
            res.status(201).send();
          })
          .catch(function (err) {
              res.status(403).send(err);
          });    }

};