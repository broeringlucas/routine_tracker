const Task = require('../models/task')

// get all  tasks 
const getAll = async (req, res) => {
  try {
    const tasks = await Task.find( {} )
    res.status(200).json( [ tasks ])
  } catch(error) {
    res.status(500).json({ msg: error })
  }
}

// get one task 
const getOne = async (req, res) => {
  try{
    const task = await Task.findById( req.params.id )
  if (!task) {
    return res.status(404).json({msg:`task with id ${req.params.id} doesnt exist`})
  }

    res.status(200).json({ task })
  } catch(error) {
    res.status(500).json({ msg: error })
  }
}

// create a task 
const taskCreate = async (req, res) => {
  try{
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

// delete a task 
const taskDelete = async (req, res) => {
  try{
    const task = await Task.findByIdAndDelete( req.params.id )

  if (!task) {
    return res.status(404).json({msg:`task with id ${req.params.id} doesnt exist`})
  }
    res.status(200).json({ msg: `task with id ${ req.params.id } was deleted`})
    // res.status(200).send()
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

// update a task
const taskUpdate = async (req, res) => { 
  try{
    task = await Task.findByIdAndUpdate( req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(200).json( task )
    }catch (error) {
    res.status(500).json({ msg: error })
  }
}

module.exports = {
  getAll,
  getOne, 
  taskCreate, 
  taskUpdate, 
  taskDelete,
}