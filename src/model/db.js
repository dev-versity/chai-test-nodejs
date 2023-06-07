const mongoose = require('mongoose')
require("dotenv").config()
async function main() {
  await mongoose.connect(process.env.LOCAL_DB);
  console.log("Connected to MongoDB");
}
main().catch(err => console.log(err));
