import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  serviceName: {
    type: String,
    required: [true, 'Please select a service'],
    enum: ['FUE Hair Transplant', 'PRP Treatment', 'Consultation', 'Hair Analysis', 'Follow-up']
  },
  date: {
    type: Date,
    required: [true, 'Please select a date']
  },
  time: {
    type: String,
    required: [true, 'Please select a time']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  },
  notes: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


appointmentSchema.index({ userId: 1, date: 1 });

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;