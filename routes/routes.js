const express = require('express');
const route = express.Router();
const controller = require('../controller/controller');
const authController = require('../controller/authController');

route.post('/career',controller.DataCareer);
route.post('/create-user',authController.create);
route.get('/login', authController.login);

module.exports = route;