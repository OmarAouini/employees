const employee = require("../models/Employee");

//business logics

//create new employee
exports.create = async (req, res) => {
  try {
  } catch (error) {}
};

//find all employees
exports.findAll = async (req, res) => {
  try {
    let employees = await employee.findAll();
    res.status(200).send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
};

//find employee by id
exports.findOne = async (req, res) => {
  try {
    const id = req.param.id;
    await employee.findById(id).then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found employee with id: " + id });
      } else {
        res.send(data);
      }
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

// edit an employee
exports.update = async (req, res) => {
  try {
  } catch (error) {}
};

// delete an employee
exports.delete = async (req, res) => {
  try {
  } catch (error) {}
};


// delete all employees
exports.deleteAll = async (req, res) => {
  try {
  } catch (error) {}
};
