const { Employee } = require("../models/employee");
const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  const employees = await Employee.find().select("-__v");
  res.send(employees);
});

router.post("/", async (req, res) => {
  console.log(req.body.firstName);
  let employee = new Employee(req.body);

  employee = await employee.save();

  employee = await Employee.findById(employee._id).select("-__v");

  res.send(employee);
});

module.exports = router;
