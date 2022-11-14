const express = require("express");
const routerApi=require('./routes');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hola desde el server express');
});

routerApi(app);

app.listen(port, () => {
  console, console.log("espress server activo:" + port);
});


