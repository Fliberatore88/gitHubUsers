const express = require('express');
const router = express.Router();
const usersController = require('../controllers/tasksControllers')

/* GET users listing. */

router.get('/', usersController.list);

router.post('/create', usersController.create)

router.post('/update', usersController.update)

router.post('/delete', usersController.delete)


module.exports = router;
