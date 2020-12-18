const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')


module.exports.login = async function (req, res){
   const candidate = await User.findOne({email : req.body.email})
    if (candidate){
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult){
            const token = jwt.sign({
                email: candidate.email.toString().toLowerCase(),
                userid: candidate._id
            }, keys.secret,{expiresIn: '1h'})

            res.status(200).json({
                token : `Bearer ${token}`
            })
        }
        else {
            res.status(401).json({
                message : 'Ви ввели не правельний пароль. Спробуйте знову.'
            })
        }

    }
    else {
        res.status(404).json({
            message : 'Користувача з таким email не найдено'
        })
    }
}

module.exports.register = async function (req, res){
    const candidate = await User.findOne({email : req.body.email})
    if (candidate){
        res.status(409).json({
            massage : 'Такий email вже заннятий. Попробуйте інший'
        })
    }
    else {
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = new User({
            email: req.body.email.toString().toLowerCase(),
            password : bcrypt.hashSync(password,salt)
        })
        try{
            await user.save()
            res.status(201).json({
                message : `Користувач з адресою ${user.email} створенний успішно`
            })
        }
        catch (e){
            errorHandler(res,e)
        }
    }
}
