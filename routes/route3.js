const express = require('express')
const router = express.Router()
const {getSign,
    login,
    authenticate,
} = require('../controllers')

router.route('/sign')
.get(getSign)

router.route('/login')
.get(login)

router.post('/authenticate',authenticate)
module.exports = router