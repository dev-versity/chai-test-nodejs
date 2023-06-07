const { getUsers, createUser } = require("../controller/userController");
const router = require("express").Router()


router.get('/users', getUsers )
router.post('/users/register', createUser )

module.exports = router