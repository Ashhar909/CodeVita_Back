const express = require('express');
const route = express.Router();
const controller = require('../controller/controller');


route.post('/career',controller.DataCareer);

module.exports = route;