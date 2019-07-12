const appointmentRouter = require('./appointment.route');
const router = require('express').Router();

module.exports = router.use('/appointments', appointmentRouter);
