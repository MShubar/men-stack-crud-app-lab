const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const methodOverride = require('method-override')
require('dotenv').config()

const dogRoutes = require('./routes/dogs')
const PORT = process.env.PORT
const app = express()

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB: ${mongoose.connection.name}.`)
})

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use('/dogs', dogRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`)
})
