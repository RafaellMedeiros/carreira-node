const express = require("express");
const pessoas = require("./pessoasRoute.js");
const categoria = require("./categoriaRoute.js");
const curso = require("./cursoRoute.js");


module.exports = app => {
  app.use(
    express.json(),
    pessoas,
    categoria,
    curso
  );
};