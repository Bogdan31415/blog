const express = require('express')
const passport = require('passport')
const controller = require('../controllers/comment')
const router = express.Router()

//http://localhost:5000/api/position/
router.get('/:postId',controller.getByCategoryId)

//http://localhost:5000/api/position/
router.post('/',controller.create)
/*
//http://localhost:5000/api/position/
router.patch('/:id', passport.authenticate('jwt',{session:false}),controller.update)

//http://localhost:5000/api/position/
router.delete('/:id', passport.authenticate('jwt',{session:false}),controller.remove)
*/

module.exports = router
