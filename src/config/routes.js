const express = require('express');
const users = require('../controllers/users.js');
const products = require('../controllers/products.js');
const categories = require('../controllers/categories.js');
const apiRouter=express.Router();
const authorization = require('./middlewares/authorization');
const multerProducts = require('./multer/products');
const multerCategories = require('./multer/categories');

apiRouter.get('/user',users.all);
apiRouter.put('/user',users.create);
apiRouter.post('/user/login',users.login);
apiRouter.get('/user/me', authorization, users.me);
apiRouter.post('/user/:id',users.update);


apiRouter.get('/product',products.all);
apiRouter.put('/product', multerProducts.single('image'),products.create);
apiRouter.get('/product/:id',products.getById);
apiRouter.post('/product/bulk', products.getByIds);
apiRouter.post('/product/:id', multerProducts.single('image'), products.update);
apiRouter.delete('/product/:id', products.remove);



apiRouter.get('/category',categories.all);
apiRouter.get('/category/:id',categories.getById);

apiRouter.put('/category',multerCategories.single('image'),categories.create);
apiRouter.get('/category/:id/product',categories.products);
apiRouter.post('/category/:id', multerCategories.single('image'), categories.update);
apiRouter.delete('/category/:id', products.removeByCategory,categories.remove);




module.exports =apiRouter;