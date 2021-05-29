const express = require("express");
const { I18n } = require("i18n-js");
const en = require("./locales/en.json");
const ptBR = require("./locales/pt-BR.json");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use((req, res, next) => {
  // You must instantiate I18n per request.
  // Otherwise, users may override each other's locale.
  const i18n = new I18n();

  i18n.defaultLocale = "en";
  i18n.store(en);
  i18n.store(ptBR);
  i18n.locale = i18n.translations[req.query.locale] ? req.query.locale : "en";

  req.i18n = i18n;

  next();
});

app.get("/", (req, res) => {
  res.render("home", { i18n: req.i18n });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
