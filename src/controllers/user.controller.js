const UserService = require("../services/user.services");

const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res
      .status(400)
      .send({ messagem: "Preecha todos os campos para registrar" });
  }

  const user = await UserService.create(req.body);

  if (!user) {
    return res.status(400).send({ messagem: "Erro ao registrar o usuário" });
  }

  res.status(201).send({
    messagem: "Usuário registrado com sucesso",
    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
      background,
    },
  });
};

module.exports = { create };
