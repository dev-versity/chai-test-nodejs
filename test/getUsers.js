let chai = require('chai')
const axios = require('axios')
const { apiUrl, createUser } = require('./test_utils')
const { before } = require('mocha')

const expect = chai.expect
let should = chai.should()

// before(async() => {
//   const newUser = await createUser()
// })

describe('get users info', () => {
  it('should return a list of all users', async () => {
    const response = await axios.get(`${apiUrl}`)
    expect(response.status).to.be.equal(200)
    expect(response.data).to.be.an('array')
  })
  it('should create a user', async () => {
    before(async() => {
      const newUser = await createUser()
      const response = await axios.post(`${apiUrl}/register`, newUser.payload)
      expect(response.status).to.be.equal(200)
      expect(response.data).to.be.an('object')
    })
  })
  it('should return a single user', async () => {
    before(async() => {
      const newUser = await createUser()
      const response = await axios.get(`${apiUrl}/${newUser._id}`)
      expect(response.status).to.be.equal(200)
      expect(response.data).to.be.an('object')
    })
  })
  it('should have all the properties for each user', async() => {
    before(async() => {
      const newUser = await createUser()
      const response = await axios.get(`${apiUrl}/${newUser._id}`)
      expect(response.data.name).to.be.equal('johny')
      expect(response.data.email).to.be.equal('johny@example.com')
      expect(response.data.age).to.be.equal(591)
      response.data.should.have.property('name')
      response.data.should.have.property('email')
      response.data.should.have.property('age')
      expect(response.status).to.be.equal(200)
      expect(response.data).to.be.an('object')
    })
  })
})

