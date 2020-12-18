const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const passport = require('passport')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
const cors = require('cors')
const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/post')
const commentRoutes = require('./routes/comment')
const app = express()

mongoose.set('useCreateIndex', true)
mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('mongo db connected'))
    .catch(error => console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/uploads', express.static('uploads'))
app.use('/api/post', postRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/comment', commentRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('angular-blog/dist/angular-blog'))
  app.get('*', (req, res) => {
    res.sendFile(
        path.resolve(
            __dirname,'angular-blog','dist','angular-blog','index.html'
        )
    )
  })
}


module.exports = app
