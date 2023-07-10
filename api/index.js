const express = require('express')
const router = express.Router()
module.exports = router

//set api กำหนดเส้นทาง
router.use('/', require('./home'))
router.use('/home', require('./home'))
router.use('/menu', require('./menu'))
router.use('/addtask', require('./addtask')) /* demo */
router.use('/deletetask', require('./deletetask')) /* demo */
router.use('/updatetask', require('./updatetask')) /* demo */
/* router.use('/fishdata', require('./fishdata')) */