let chai                     = require('chai')
const axios                  = require('axios')
const { apiUrl, createUser } = require("./test_utils");

const expect = chai.expect
let should   = chai.should()

/*before(async() => {
  const newUser = await createUser()
})*/

describe("get users info", () => {

  it("should return a list of all users", async() => {
    const response = await axios.get(`${ apiUrl }/users`)
    console.log(response.data)
    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an('array');
  })
  it("should create a user", async() => {
    const payload = {name:"johny", email:"johny@example.com", age:591}
    const response = await axios.post(`${ apiUrl }/users/register`, payload)
    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an('object');
  })
})
