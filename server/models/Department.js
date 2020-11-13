const mongoose = require("mongoose");

const DepartmentSchema = mongoose.Schema(
  {
    name: String,
    numOfEmployees: Number
  }
  );

module.exports = mongoose.model("department", DepartmentSchema);


  