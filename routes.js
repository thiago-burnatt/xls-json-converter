const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const multerConfig = require('./src/middlewares/multerConfig');
const downloadController = require('./src/controllers/downloadController');

// Rotas da home
route.get('/',homeController.homePage); // Não executa a função
route.post('/', multerConfig, homeController.fileConversion);

route.get('/thanks', downloadController.downloadIndex);

module.exports = route;