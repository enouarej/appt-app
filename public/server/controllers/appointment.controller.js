const Appointment = require('mongoose').model('Appointment');
const { Http } = require('@status/codes');

module.exports = {
  index(_req, res) {
    Appointment.find({})
      .then(appointments => res.json(appointments))
      .catch(error => res.status(Http.BadRequest).json(error));
  },
  create(req, res) {
    Appointment.create(req.body)
      .then(appointment => res.json(appointment))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },
  show(req, res) {
    const { appointment_id: AppointmentId } = req.params;
    Appointment.findById(AppointmentId)
      .then(appointment => res.json(appointment))
      .catch(error => res.status(Http.NoContent).json(error));
  },
  update(req, res) {
    const { appointment_id: AppointmentId } = req.params;
    Appointment.findByIdAndUpdate(AppointmentId, req.body)
      .then(appointment => res.json(appointment))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },
  destroy(req, res) {
    const { appointment_id: AppointmentId } = req.params;
    Appointment.findByIdAndRemove(AppointmentId)
      .then(appointment => res.json(appointment))
      .catch(error => res.status(Http.Conflict).json(error));
  },
};
