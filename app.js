const express = require('express')
const articleRouter = require('./routes/tasks')
const path = require('path')
const mongoose = require('mongoose')
const app = express() 

const DB_URL = "mongodb://127.0.0.1:27017/demo"
mongoose.set('strictQuery', true)
// rever nome depois // 
mongoose.connect('mongodb://localhost/routine_tracker')


app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: false}))
app.use('/tasks', articleRouter)


app.get('/', (req, res) => {
  const tasks = [{
    title: 'test task title',
    description: 'test task description',
    time: '9 AM',
    date: '1/5/2023'
  },
  {
    title: 'test task title',
    description: 'test task description',
    time: '9 AM',
    date: '1/5/2023'
  }]
  res.render('tasks/index', { tasks: tasks })
})

app.listen(3000)