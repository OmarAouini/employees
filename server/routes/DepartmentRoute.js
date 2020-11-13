const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentsController')

//routes
router.get('/', departmentController.findAll)
router.get('/:id', departmentController.findOne)
router.post('/', departmentController.create)
router.put('/:id', departmentController.update)
router.delete('/:id', departmentController.delete)
router.delete('/', departmentController.deleteAll)

module.exports = router;