const express = require('express')
const app = express()
const port = 5001



const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://root:1111@cluster0.xoy1m.mongodb.net/?retryWrites=true&w=majority', {
   
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))
    

app.get('/', (req, res) => res.send('Hello World! 안녕하세요!')) 

app.listen(port, () => console.log('Example app listening on port ${port}!'))