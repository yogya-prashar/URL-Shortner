const express = require('express')
const {
   getAll,
   getUrl,
   createNew,
   getAnalytics
} = require('../controllers') 
const router = express.Router()

router.route('/')
.get(getAll)
.post(createNew)

router
.get('/:url',getUrl)

router
.get('/analytics/:url', getAnalytics)

module.exports = router