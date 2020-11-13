const department = require('../models/Department')

//business logics

//create new department
exports.create = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({ message: "department not valid!" });
      return;
    }

    //prepare for saving
    let toBeSaved = new department({
      name: req.body.name,
      numOfEmployees: req.body.numOfEmployees,
    });

    //saving
    await toBeSaved.save().then((data) => res.status(201).send(data))
  } catch (error) {
    res.status(500).send({message: `error while creating new department: + ${error}`});
  }
};

//find all department
exports.findAll = async (req, res) => {
  try {
    await department.find().then((data => res.status(200).send(data)));
  } catch (error) {
    res.status(500).send(error);
  }
};

//find department by id
exports.findOne = async (req, res) => {
  try {
    const id = req.param.id;
    await department.findById(id).then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found department with id: " + id });
      } else {
        res.send(data);
      }
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

// edit a department
exports.update = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({message: "element to update cannot be empty!"});
    }

    const id = req.param.id;

    department.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update department with id=${id}. Maybe employee was not found!`
        });
      } else {
        res.status(200).send({message: "department successfuly updated!"});
      }
    })

  } catch (error) {
    res.status(500).send({message: `error while updating department \n ${error}`});
  }
};

// delete a department
exports.delete = async (req, res) => {
  try {
    const id = req.param.id;

    department.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete department with id=${id}. Maybe department was not found!`
        });
      } else {
        res.status(200).send({
          message: "department was deleted successfully!"
        });
      }
    });

  } catch (error) {
    res.status(500).send({
      message: `Could not delete department  n\ ${error}`
    });
  }
};

// delete all departments
exports.deleteAll = async (req, res) => {
  try {
    department.deleteMany({})
    .then(data => {
      res.status(200).send({
        message: `${data.deletedCount} departments were deleted successfully!`
      });
    })
  } catch (error) {
    res.status(500).send({message: `error while deleting all the departments! \n ${error}`})
  }
};
