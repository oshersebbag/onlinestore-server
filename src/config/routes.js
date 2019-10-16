const express = require('express');
const users = require('../controllers/users.js');
const products = require('../controllers/products.js');
const categories = require('../controllers/categories.js');
const apiRouter=express.Router();
const authorization = require('./middlewares/authorization');
const multerProducts = require('./multer/products');

apiRouter.get('/user',users.all);
apiRouter.put('/user',users.create);
apiRouter.post('/user/login',users.login);
apiRouter.get('/user/me', authorization, users.me);
apiRouter.post('/user/:id',users.update);


apiRouter.get('/product',products.all);
apiRouter.put('/product', multerProducts.single('image'),products.create);
apiRouter.get('/product/:id',products.getById);
apiRouter.post('/product/bulk', products.getByIds);



apiRouter.get('/category',categories.all);
apiRouter.put('/category',categories.create);
apiRouter.get('/category/:id/product',categories.products);



module.exports =apiRouter;