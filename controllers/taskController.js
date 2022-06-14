const TaskSchema =require('../models/Task')
const asyncWrapper = require('../middleware/async')
const getAllTasks =asyncWrapper(async(req,res)=>{
    
    const tasks = await TaskSchema.find({})
    res.json({tasks})
    
})

const createTask =asyncWrapper(async(req,res)=>{
        const task =await TaskSchema.create(req.body)
        res.json({task})
    
})

const getSingleTask =asyncWrapper(async(req,res)=>{

        const {id:taskId} = req.params
        const task = await TaskSchema.findOne({_id:taskId})
        if(!task){
           return res.status(404).json({msg:`there is no task with id: ${taskId}`})
        }
        return res.json({task})   


})

const updateTask =asyncWrapper(async(req,res)=>{

        const {id:taskId}= req.params
        const task = await TaskSchema.findOneAndUpdate({_id:taskId},req.body,{new:true,runValidators:true})
        res.status(200).json({task})

    })
const deleteTask =asyncWrapper(async (req,res)=>{

        const {id:taskId} = req.params
        const task = await TaskSchema.findOneAndDelete({_id:taskId})
        if(!task){
            return res.status(404).json({msg:`there is no task with id: ${taskId}`})
        }
        return res.json({task:null,msg:'task deleted'})
    
    })


module.exports ={
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}