const express = require('express');

const homeController = require('../controllers/homecontroller');

const router = express.Router();


router.get('/', homeController.home);
// router.use('/users', require('./users'));
console.log('home router loaded');



module.exports = router;