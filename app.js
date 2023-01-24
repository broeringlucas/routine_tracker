const express = require('express')
const app = express() 
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not_found')
const errorHandler = require('./middleware/error_handler')
require('dotenv').config() 



//middleware
// app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/tasks', tasks)

app.use(notFound)
app.use(errorHandler)

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI)
    app.listen(5000, console.log('listening to port 5000'))

  } catch (error) {
    console.log(error)
  }
}

start() 