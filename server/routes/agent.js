const express = require('express');
const ensureLoggedIn = require('../config/ensureLoggedIn');

const router = express.Router();
const passport = require('passport');

const  agentController = require('../controllers/agentController.js')




// Get customer details --> Customer router

router.get('/agent/add',ensureLoggedIn,agentController.addAgent);
router.post('/agent/add',ensureLoggedIn,agentController.postAgent);








module.exports = router;

