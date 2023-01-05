const express = require('express')
const articleRouter = require('./routes/task')
const path = require('path')

const app = express() 

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))


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
  res.render('index', { tasks: tasks })
})

app.listen(3000)