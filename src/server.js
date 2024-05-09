import app from "./app";
const gateway = 3333;
app.listen(gateway, (req, res) => {
  console.log(`Servidor rodando na porta ${gateway}`);
});
