const express = require('express')
const passport = require('passport')
const controller = require('../controllers/post')
const upload = require('../middleware/upload')
const router = express.Router()

//http://localhost:5000/api/post/
router.get('/',controller.getAll)
//http://localhost:5000/api/post/
router.post('/',passport.authenticate('jwt',{session:false}), upload.single('image'),controller.create)
//http://localhost:5000/api/post/postId
router.get('/:id',controller.getById)
//http://localhost:5000/api/post/
router.post('/user',passport.authenticate('jwt',{session:false}), controller.getAllByUserId)
//http://localhost:5000/api/post/
router.patch('/:id',passport.authenticate('jwt',{session:false}),upload.single('image'),controller.update)
//http://localhost:5000/api/post/
router.delete('/:id',passport.authenticate('jwt',{session:false}),controller.remove)



module.exports = router
