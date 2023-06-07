const {
  getUsers,
  createUser,
  getUser,
  updateUser,
} = require('../controller/userController')
const router = require('express').Router()

router.post('/register', createUser)
router.get('/', getUsers)
router.get('/:id', getUser)
router.put('/:id', updateUser)

module.exports = router
