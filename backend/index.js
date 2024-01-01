const express = require('express')


const cors =require('cors')
require('dotenv').config()
const app = express()
const PORT =  3000
app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    res.status(200).send({msg:"Welcome to backend of BookHub: An online platform for Bookaholics !!"})
})


app.listen(PORT,async()=>{
    try{
        // await connection
        console.log('Connected to DB')
        console.log(`App is listening to port ${PORT}`)
    }
    catch(error){
        console.log(error)
    }
    
})