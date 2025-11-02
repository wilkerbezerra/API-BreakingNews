const express = require("express");
const app = express();
const connectDadabase = require("./src/databases/db");
const userRoute = require("./src/routes/user.route");
const port = 3000;

connectDadabase();

app.use(express.json());
app.use("/user", userRoute);
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
