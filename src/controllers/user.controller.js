const soma = (req, res) => {
  const result = 100 + 1;
  res.send({ soma: result });
};

module.exports = { soma };
