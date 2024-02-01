const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

// CRUD
// Create - POST, Read - GET, Update - PUT, Delete - DELETE
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', (req, res) => {
    return res.send('Server on!')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server is running on the port ', PORT)
})