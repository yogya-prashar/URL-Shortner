const express = require('express')
const router = express.Router()
const {getS,
    createUser,
} = require('../controllers')

router.route('/')
.get(getS)
.post(createUser)

module.exports = router