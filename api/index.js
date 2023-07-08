const express = require('express')
const router = express.Router()
module.exports = router

//set api กำหนดเส้นทาง
router.use('/', require('./home'))
router.use('/home', require('./home'))
router.use('/addtask', require('./addtask'))
router.use('/deletetask', require('./deletetask'))
router.use('/updatetask', require('./updatetask'))
/* router.use('/fishdata', require('./fishdata')) */