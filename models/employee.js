const mongoose = require("mongoose");

const employeeScheme = new mongoose.Schema({
  firstName: { type: String, min: 1, max: 255, required: true },
  lastName: { type: String, min: 1, max: 255, required: true },
  age: { type: Number, min: 18, max: 65, required: true },
  phoneNumber: { type: String, min: 11, max: 11, required: true },
  email: { type: String, min: 1, max: 255, required: true },
  address: { type: String, min: 1, max: 255, required: true },
});

const Employee = mongoose.model("Employee", employeeScheme);

exports.employeeScheme = employeeScheme;
exports.Employee = Employee;
