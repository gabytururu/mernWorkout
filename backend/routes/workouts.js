const express = require('express')
const router = express.Router()
const Workout = require('../models/workoutModel') 
const {createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout} = require ('../controllers/workoutController')

router.get('/', getWorkouts)
// router.get('/', (req, res) => {
//     res.json({mssg:'GET all workouts'})
// })

router.get('/:id', getWorkout)
// router.get('/:id',(req,res)=>{
//     res.json({mssg: 'GET single workout'})
// })

router.post('/', createWorkout)
// router.post('/', async(req,res)=>{
//         //req.body <--- only possible if parsed middleware is set --> app.use(express.json())
//     const {title, load, reps} = req.body
//     try{
//         const workout = await Workout.create({title, load, reps})
//         res.status(200).json(workout)
//     }catch (error){
//         res.status(400).json({error: error.message})
//     }

//         // res.json({mssg: 'POST a workout'})<-- no longer needed as responses have been set above
// })

router.delete('/:id', deleteWorkout)
// router.delete('/:id',(req,res)=>{
//     res.json({mssg: 'DELETE a single workout'})
// })

router.patch('/:id', updateWorkout)
// router.patch('/:id',(req,res)=>{
//     res.json({mssg: 'update(PATCH) a workout'})
// })


module.exports = router