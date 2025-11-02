const mongoose = require("mongoose");

const connectDadabase = () => {
  console.log("Conectando ao banco de dados...");
  mongoose
    .connect(
      "mongodb+srv://root:c5rdZFp0SOSjeHf5@breakingnews.uzyntsw.mongodb.net/?appName=BreakingNews"
    )
    .then(() => console.log("MongoDB Atlas Conectado!"))
    .catch((error) => console.log(error));
};

module.exports = connectDadabase;
