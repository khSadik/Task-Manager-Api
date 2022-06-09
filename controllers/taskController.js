const getAllTasks =(req,res)=>{
    res.send('Get All Tasks')
}
const createTask =(req,res)=>{
    res.json(req.body)
}
const getSingleTask =(req,res)=>{
    res.send("Get the task with the id ")
}
const updateTask =(req,res)=>{
    res.json({id:req.params.id})
}
const removeTask =(req,res)=>{
    res.json({id:req.params.id, msg:"delete"})
}


module.exports ={
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    removeTask
}