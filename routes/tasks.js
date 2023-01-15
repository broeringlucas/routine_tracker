const express = require('express')
const router = express.Router()

const { getAll, getOne, taskCreate, taskDelete, taskUpdate } = require('../controllers/tasks')


router.get('/' , getAll)
router.post('/', taskCreate)
router.get('/:id', getOne)
router.patch('/:id', taskUpdate)
router.delete('/:id', taskDelete)


module.exports = router