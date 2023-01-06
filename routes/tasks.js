const express = require('express')
const router = express.Router() 
const Task = require('./../models/task')

module.exports = router 

router.get('/new', (req, res) => {
  res.render('tasks/new', { task: new Task() })
})

router.get('/:id', (req, res) => {
  res.send(req.params.id)
})


router.post('/', async (req, res) => {
  let task = new Task({
    title: req.body.title,
    description: req.body.description,
    time: req.body.time,
    date: req.body.date
  })
  try {
    task = await task.save() 
    res.redirect(`/tasks/${task.id}`)
  } catch(e) {
    res.render('tasks/new', { task: task })
  }
})