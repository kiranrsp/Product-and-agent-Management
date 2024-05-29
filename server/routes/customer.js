const express = require('express');
const ensureLoggedIn = require('../config/ensureLoggedIn');

const router = express.Router();
const passport = require('passport');

const  customerController = require('../controllers/customerController')




// Get customer details --> Customer router
//router.get('/',customerController.mainhomepage);
router.get('/allproducts',ensureLoggedIn,customerController.homepage);
router.get('/add',ensureLoggedIn,customerController.addCustomer);
router.post('/add',ensureLoggedIn,customerController.postCustomer)
router.get('/view/:id',ensureLoggedIn,customerController.view)
router.get('/edit/:id',ensureLoggedIn,customerController.edit)
router.put('/edit/:id',ensureLoggedIn,customerController.editpost)
router.delete('/edit/:id',ensureLoggedIn,customerController.deleteCustomer)












module.exports = router;

