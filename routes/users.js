const express = require('express');

const userController = require('../controllers/user_controller');
const router = express.Router();
router.get('/users', userController.users);

console.log('router for user loaded');



module.exports = router;