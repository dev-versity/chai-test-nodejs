const expect = require('chai').expect
const { before } = require('mocha')
const axios = require('axios')
let chai = require('chai')

let should = chai.should()
const { apiUrl, createUser } = require('./test_utils')

before(async () => {
  newuser = await createUser()
})

describe('update user info', function () {
  it('should update single user with all information together', async () => {
    const payload = { name: 'john doe', email: 'johndoe@example.com', age: 21 }
    const response = await axios.put(`${apiUrl}/${newuser._id}`, payload)
    expect(response.status).to.be.equal(200)
    expect(response.data).to.be.an('object')
  })
  it('should update single user with a name', async () => {
    const payload = { name: 'john doe' }
    const response = await axios.put(`${apiUrl}/${newuser._id}`, payload)
    expect(response.status).to.be.equal(200)
    expect(response.data.name).not.to.be.equal(payload)
  })
  it('should update single user with an email', async () => {
    const payload = { email: 'doe@live.com' }
    const response = await axios.put(`${apiUrl}/${newuser._id}`, payload)
    expect(response.status).to.be.equal(200)
    expect(response.data.email).not.to.be.equal(payload)
  })
  it('should update single user with an age', async () => {
    const payload = { age: 28 }
    const response = await axios.put(`${apiUrl}/${newuser._id}`, payload)
    expect(response.status).to.be.equal(200)
    expect(response.data.age).not.to.be.equal(payload)
  })
})
