const axios = require("axios");

const apiUrl = "http://localhost:4000/api/"
const createUser = async() => {
  const payload = {name:"johny", email:"johny@example.com", age:591}
  const response = await axios.post(`${apiUrl}/users/register`, payload)
  return response.data
}

module.exports = { apiUrl, createUser }