const express = require('express')
const router = express.Router()
module.exports = router

const logupdate = [
    { id: 1, text: "09:24 Joe เข้าสู่ระบบ    " },
    { id: 2, text: "09:30 Joe ขายนมหมีปั่น 1 รายการ 40 บาท    " },
    { id: 3, text: "09:45 Joe ขายมะพร้าวปั่นนมสด 1 รายการ 40 บาท    " },
    { id: 4, text: "10:00 Joe ขายมะพร้าวปั่นนมสด 1 รายการ 40 บาท    " },
    { id: 5, text: "10:24 Joe ขายมะพร้าวปั่นนมสด 1 รายการ 40 บาท    " },
  ];


router.get('/', (req, res) =>{
    const sortedTexts = logupdate.sort((a, b) => b.id - a.id);
    const latestTexts = sortedTexts.slice(0, 1);
    res.json({ logupdate: latestTexts });
});
    
