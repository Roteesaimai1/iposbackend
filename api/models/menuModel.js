const mongoose = require('mongoose');

const { Schema } = mongoose;

const menuSchema = new Schema(
    {
        menuname: {
            type: String,
            required: 'Menuname cannot be blank'
        },
        menuprice: {
            type: Number,
            required: 'Menuprice cannot be blank'
        }
    },
    { collection: 'menu' }
)

module.exports = mongoose.model('menu', menuSchema)