const express = require("express");

const employees = require("../routes/employees");

const routes = (app) => {
  app.use(express.json());

  app.use("/api/v1/employees", employees);
};

module.exports = routes;
