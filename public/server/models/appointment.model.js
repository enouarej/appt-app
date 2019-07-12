const mongoose = require('mongoose');
const { Schema } = mongoose;

const AppointmentSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Name is required'],
        minlength: [3, 'Name should have at least 3 characters']
    },
    time: {
        type: Date,
        required: [true, 'Please select a time for the appointment'],
        min: Date.now
    },
    complaint: {
        type: String,
        required: [true, 'Please add a complaint'],
    }
}, {timestamps: true});

module.exports = mongoose.model('Appointment', AppointmentSchema);
