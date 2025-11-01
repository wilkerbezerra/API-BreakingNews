const create = (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res
      .status(400)
      .send({ messagem: "Preecha todos os campos para registrar" });
  }

  res.status(201).send({
    messagem: "Usuário registrado com sucesso",
    user: { name, username, email, avatar, background },
  });
};

module.exports = { create };
