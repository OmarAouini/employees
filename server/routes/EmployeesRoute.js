const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employeesController')

//routes
router.get('/', employeesController.findAll)
router.get('/:id', employeesController.findOne)
router.post('/', employeesController.create)
router.put('/:id', employeesController.update)
router.delete('/:id', employeesController.delete)
router.delete('/', employeesController.deleteAll)


module.exports = router;