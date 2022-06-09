
const express = require('express')

const app = express()

const connectDB = require('./db/connect')

require('dotenv').config()

const port = 5000

const task = require('./routes/tasks')

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello there")
})
app.use('/api/v1/tasks',task)

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`the server is listening on port ${port}`))
        
    } catch (error) {
        console.log(error)
    }
    
}
start()
