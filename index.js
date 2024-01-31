const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const cors = require('cors');


// local imports 
const connectDb = require('./db.js')
const taskRoutes = require('./controllers/task.controller')

const app = express()
app.use(cors());

// middleware 
app.use(bodyParser.json())
app.use('/api/tasks', taskRoutes)



connectDb()
    .then(() => {
        console.log('mongodb connection succeeded.')
        app.listen(3000, () => console.log('server started at 3000'))
    })
    .catch(err => console.log(err))

