const express = require('express')
const app = express()
require('dotenv').config()

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/home',(req,res)=>{
    res.send('Home')
})

app.listen(process.env.PORT,()=>{
    console.log("Listening")
})