const mongoose = require('mongoose')



const connectDB = (url)=>{
    //returning promise
  return  mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false,
        useCreateIndex:true
    })
}

module.exports = connectDB  