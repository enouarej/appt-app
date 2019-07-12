const { AppointmentController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/', AppointmentController.index)
  .post('/', AppointmentController.create)
  .get('/:appointment_id', AppointmentController.show)
  .put('/:appointment_id', AppointmentController.update)
  .delete('/:appointment_id', AppointmentController.destroy)
