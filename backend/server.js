const express = require('express')
require('dotenv').config()
const WorkoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')
const cors = require('cors')

//======= express app ========//
const app = express()

//======== middleware=========//
app.use(cors())
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})
app.use(express.json()) //<-- parses the body of any document posted trhu post requests+ attaches it to the request object so req.body is accessible

//========  Routes =========//
// no longer needed bc i have a router setup :)
// app.get('/', (req, res)=>{
//     res.json({mssg: 'welcome to the app'})
// })
app.use('/api/workouts',WorkoutRoutes)


//======== Connect to DB =========//
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log('listening on selected port', process.env.PORT)
        })
    })
    .catch((err)=>{
        console.log('there was an error:', err)
    })

//====== Listen to client =======//
// Moved to MONGOOSE connect method (then section)
// app.listen(process.env.PORT, ()=>{
//     console.log('listening on selected port')
// })

