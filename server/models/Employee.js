const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema(
    {
      name: String,
      surname: String,
      dob: Date,
      fiscalCode: String,
      address: {
        addressRoad: String,
        city: String,
        country: String,
        postalCode: Number,
      },
      salaries: [
        {
          salary: Number,
          fromDate: Date,
          toDate: Date,
        },
      ],
      roles: [
        {
          roleName: String,
          fromDate: Date,
          toDate: Date,
        },
      ],
      departments: [
        {
          id: String,
          fromDate: Date,
          toDate: Date,
        },
      ],
    }
  );

module.exports = mongoose.model("employee", EmployeeSchema);
