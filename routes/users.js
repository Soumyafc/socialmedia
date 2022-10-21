const express = require('express');

const userController = require('../controllers/user_controller');
const router = express.Router();
router.get('/profile', userController.profile);

console.log('router for user loaded');



module.exports = router;