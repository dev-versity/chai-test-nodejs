const express = require('express');
const app = express()

const port = 4000
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(port, ()=> console.log(`listening on port ${port}`))