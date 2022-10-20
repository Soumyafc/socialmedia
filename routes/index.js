const express = require('express');

const homeController = require('../controllers/homecontroller');
const router = express.Router();
router.get('/', homeController.home);
console.log('router loaded');



module.exports = router;