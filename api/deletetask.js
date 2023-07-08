const express = require('express')
const router = express.Router()
module.exports = router

router.get('/', (req, res) =>{
    res.send("<h1>Delete TASK API</h1>")
})