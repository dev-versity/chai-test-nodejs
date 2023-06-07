const { getUsers } = require("../controller/userController");
const router = require("express").Router()


router.get('/user', getUsers )

module.exports = router