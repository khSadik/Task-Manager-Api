const express= require('express')

const router = express.Router()

const {getAllTasks,createTask,getSingleTask,updateTask,removeTask} = require("../controllers/taskController")

router.route('/').get(getAllTasks).post(createTask)

router.route('/:id').get(getSingleTask).patch(updateTask).delete(removeTask)


module.exports = router