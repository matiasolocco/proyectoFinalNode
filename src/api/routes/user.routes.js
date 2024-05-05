const express = require('express');
const router = express.Router();
const { register, login, modifyProfile, addUser, selectUser, updateUser } = require('../controllers/user.controller');
const { isAuth } = require("../../middleware/auth");


router.post('/register', register);
router.post("/login", login);
router.put("/update", [isAuth], modifyProfile);
router.post('/add', addUser);
router.get('/select', selectUser);
router.put('/update/:id', updateUser);


module.exports = router;
