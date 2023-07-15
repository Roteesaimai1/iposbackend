const mongoose = require('mongoose');

const { Schema } = mongoose;

const billSchema = new Schema(
    {
        id: {
            type: Number,
            required: true
        },
        menu: {
            type: Schema.Types.ObjectId,
            ref: 'Menu',
            required: true
          },
        ice: {
            type: Schema.Types.ObjectId,
            ref: 'Ice',
            required: true
          },
        sweet: {
            type: Schema.Types.ObjectId,
            ref: 'Sweet',
            required: true
          },
        topping: {
            type: Schema.Types.ObjectId,
            ref: 'Topping'
          },
    },
    { collection: 'bill' }
)
module.exports = mongoose.model('bill', billSchema)