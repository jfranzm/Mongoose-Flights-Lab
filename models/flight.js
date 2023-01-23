const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String, 
        enum: ['American', 'Delta', 'Southwest', 'United'],
        default: 'n/a'
    },
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        default: 'n/a'
    },
    departs: {
        type: Date,
        default: () => {Date.now() + 365*24*60*60000}
    }
})