const express = require('express')
const app = express() 
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config() 



//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/tasks', tasks)

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI)
    app.listen(5000, console.log('listening to port 5000'))

  } catch (error) {
    console.log(error)
  }
}

start() 