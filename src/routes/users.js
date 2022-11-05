const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersControllers')

/* GET users listing. */

router.get('/:user', usersController.findUser);


module.exports = router;
