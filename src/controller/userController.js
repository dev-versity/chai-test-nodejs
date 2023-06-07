const User = require('../model/userModel')

exports.getUsers = async (req, res) => {
  try {
    const userList = await User.find({}).sort({ date: 'desc' })
    res.status(200).json(userList)
  } catch (err) {
    console.error(err)
  }
}

exports.createUser = async (req, res) => {
  try {
    const userInfo = await new User(req.body)
    const userPost = await User.create(userInfo)
    res.status(200).json(userPost)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

exports.getUser = async (req, res) => {
  try {
    let userQuery = { _id: req.params.id }
    const user = await User.findOne(userQuery)
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({ error: 'User not found' })
  }
}

exports.updateUser = async (req, res) => {
  try {
    const { name, email, age } = req.body
    let userQuery = { _id: req.params.id }
    const data = { name, email, age }
    const user = await User.findByIdAndUpdate(userQuery, {
      $set: data,
    })
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({ error: 'User not found' })
  }
}
