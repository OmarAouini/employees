const employee = require("../models/Employee");

//business logics

//create new employee
exports.create = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({ message: "employee not valid!" });
      return;
    }

    const toBeSaved = new Employee({
      name: req.body.name,
      surname: req.body.surname,
      dob: req.body.dob,
      fiscalCode: req.body.fiscalCode,
      address: {
        addressRoad: req.body.address.addressRoad,
        city: req.body.address.city,
        country: req.body.address.country,
        postalCode: req.body.address.postalCode,
      },
      salaries: [],
      roles: [],
      departments: [],
    });
    req.body.salaries.forEach((element) => {
      toBeSaved.salaries.push(element);
    });
    req.body.roles.forEach((element) => {
      toBeSaved.roles.push(element);
    });
    req.body.departments.forEach((element) => {
      toBeSaved.roles.push(element);
    });

    await employee.save(toBeSaved).then((data) => res.status(201).send(data));
  } catch (error) {
    res.status(500).send({message: `error while creating new employee: + ${error} + n\ ${toBeSaved}`});
  }
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
    if (!req.body) {
      res.status(400).send({message: "element to update cannot be empty!"});
    }

    const id = req.param.id;

    employee.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update employee with id=${id}. Maybe employee was not found!`
        });
      } else {
        res.status(200).send({message: "employee successfuly updated!"});
      }
    })

  } catch (error) {
    res.status(500).send({message: `error while updating employee with id: ${id} \n ${error}`});
  }
};

// delete an employee
exports.delete = async (req, res) => {
  try {
    const id = req.param.id;

    employee.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete employee with id=${id}. Maybe employee was not found!`
        });
      } else {
        res.status(200).send({
          message: "employee was deleted successfully!"
        });
      }
    });

  } catch (error) {
    res.status(500).send({
      message: `Could not delete employee with id= ${id} n\ ${error}`
    });
  }
};

// delete all employees
exports.deleteAll = async (req, res) => {
  try {
    employee.deleteMany({})
    .then(data => {
      res.status(200).send({
        message: `${data.deletedCount} employees were deleted successfully!`
      });
    })
  } catch (error) {
    res.status(500).send({message: `error while deleting all the employees! \n ${error}`})
  }
};
