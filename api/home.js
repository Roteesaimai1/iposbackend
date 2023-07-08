const express = require('express')
const router = express.Router()
module.exports = router

//จัดการ API **ส่งข้อมูลจาก db > fontend
router.get('/', (req, res) =>{
    const data = [
        { id: 1, name: 'Prayut'},
        { id: 2, name: 'Pita'}
    ];
    const datatask = [
        {id: 1, name: 'task1'},
        {id: 2, name: 'task2'}
    ];
    res.json({data, datatask})
})

router.get('/task', (req, res) =>{
    res.send("<h1>Home Task API</h1>")
})