// /routes/api/users.js
const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);

router.get("/",usersCtrl.get);

router.put('/:id', usersCtrl.put);

router.delete('/:id', usersCtrl.destroy);


router.get('/:id', usersCtrl.show);


// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);







module.exports = router;