const express = require("express");
const app = express();

//ROTA
//Método HTTP
//Name
//Function (callback)
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
app.get("/soma", (req, res) => {
  const soma = 100 + 1;
  res.send({ soma: soma });
});

app.listen(3000);
