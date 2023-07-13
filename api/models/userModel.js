const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: 'username cannot be blank'
        },
        password: {
            type: String,
            required: 'password cannot be blank'
        },
        displayname: {
            type: String,
            required: 'displayname cannot be blank'
        },
        userrole: {
            type: String,
            required: 'userrole cannot be blank'
        },
        status: {
            type: Boolean,
            required: 'status cannot be blank'
        }
    },
    { collection: 'user' }
)
module.exports = mongoose.model('user', userSchema)