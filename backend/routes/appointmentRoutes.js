import express from 'express';
import {
  createAppointment,
  getMyAppointments,
  getAppointment,
  updateAppointment,
  cancelAppointment
} from '../controllers/appointmentController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();


router.use(protect);

router.route('/')
  .post(createAppointment);

router.route('/my')
  .get(getMyAppointments);

router.route('/:id')
  .get(getAppointment)
  .put(updateAppointment)
  .delete(cancelAppointment);

export default router;