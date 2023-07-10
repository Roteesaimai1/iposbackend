const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
module.exports = router

mongoose.connect('mongodb://127.0.0.1:27017/ipos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const menuSchema = new mongoose.Schema({
    name: String,
    price: Number,
});

const Menu = mongoose.model('Menu', menuSchema);

router.post('/', (req, res) => {
    const newMenu = new Menu({
      name: req.body.name,
      price: req.body.price,
    });
  
    newMenu.save()
      .then(() => {
        // เพิ่มโค้ดที่คุณต้องการเมื่อบันทึกสำเร็จ
        console.log('Food saved successfully!');
        res.status(201).json({ message: 'Food saved successfully!' });
      })
      .catch((error) => {
        // เพิ่มโค้ดเพื่อจัดการข้อผิดพลาดที่เกิดขึ้น
        console.error('Error saving food:', error);
        res.status(500).json({ error: 'Error saving food' });
      });
});
