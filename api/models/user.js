const mongose = require('mongose');

const userScheme = new mongose.Schema({
    name: {
        type: String,
        reqquired: true
    },
    email: {
        type: String,
        reqquired: true,
        unique: true
    },
    password: {
        type: String,
        reqquired: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    verificationToken: String,
    address: [
        {
            name: String,
            mobileNo: String,
            houseNo: String,
            street: String,
            city: String,
            country: String,
            postalCode: String

        }
    ],
    orders: [
        {
            type: mongose.Schema.Types.ObjectId,
            ref: 'Order'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }

})

const User = mongose.model('User', userScheme);
module.exports = User