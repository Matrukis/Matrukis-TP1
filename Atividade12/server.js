const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/pagina1", (req, res) => {
  res.render("pagina1");
});

app.get("/pagina2", (req, res) => {
  res.render("pagina2");
});

app.get("/pagina3", (req, res) => {
    res.render("pagina3");
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Servidor rodando na porta " + port));
