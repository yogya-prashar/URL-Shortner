const express = require('express')
const userRouter1 = require('./routes')
const userRouter2 = require('./routes/route2')
const userRouter3 = require('./routes/route3')
const connnectDb = require('./connection')
const app = express()
const PORT = 3306


connnectDb('mongodb://127.0.0.1:27017/sampleDb')
app.set('view engine','ejs')
app.set('views','./view')
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use('/url',userRouter1)
app.use('/home',userRouter2)
app.use('/user',userRouter3)

app.listen(PORT, () => console.log("server started"))