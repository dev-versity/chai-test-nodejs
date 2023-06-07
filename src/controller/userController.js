const User = require('../model/userModel')

exports.getUsers = async(req, res) => {
  try {
    const userList = await User.find({}).sort({date: "desc"})
    res.status(200).json(userList)
  }catch(err) {
    console.error(err)
  }
}

exports.createUser = async(req, res) => {
  try {
    const userInfo = await new User(req.body)

    const userPost = await User.create(userInfo)


    res.status(200).json(userPost)
  } catch ( err ) {
    console.log(err)
    res.status(500).json(err)
  }
}