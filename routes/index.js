const express = require('express');
const pagoRouter = require('./pago.router');

function routerApi(app){
   const routerv1 = express.Router();
   app.use('/api/v1',routerv1);
   routerv1.use('/pago',pagoRouter);
  }

module.exports  = routerApi;
