const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employeesController')

//routes
router.get('/', employeesController.findAll)

module.exports = router;