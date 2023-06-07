const express = require('express');
const app = express()

require("dotenv").config()
require('./model/db')
const port = process.env.PORT
const cors = require("cors")


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api", require("./routes/user"))

app.listen(port, ()=> console.log(`listening on port ${port}`))