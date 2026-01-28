import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Scissors, MessageSquare } from 'lucide-react';
import api from '../utils/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    serviceName: '',
    date: '',
    time: '',
    notes: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const services = [
    'FUE Hair Transplant',
    'PRP Treatment',
    'Consultation',
    'Hair Analysis',
    'Follow-up'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.serviceName || !formData.date || !formData.time) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      const response = await api.post('/appointments', formData);
      
      if (response.data.success) {
        setSuccess('Appointment booked successfully!');
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to book appointment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-medical-dark mb-4">
                Book Your Appointment
              </h1>
              <p className="text-xl text-gray-600">
                Schedule your consultation with our expert team
              </p>
            </div>

            <div className="card">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6"
                >
                  {error}
                </motion.div>
              )}

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6"
                >
                  {success}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Selection */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2 flex items-center">
                    <Scissors className="mr-2 text-medical-teal" size={20} />
                    Select Service *
                  </label>
                  <select
                    name="serviceName"
                    value={formData.serviceName}
                    onChange={handleChange}
                    className="input-field"
                    required
                  >
                    <option value="">Choose a service...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2 flex items-center">
                    <Calendar className="mr-2 text-medical-teal" size={20} />
                    Select Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={today}
                    className="input-field"
                    required
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2 flex items-center">
                    <Clock className="mr-2 text-medical-teal" size={20} />
                    Select Time *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="input-field"
                    required
                  >
                    <option value="">Choose a time slot...</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2 flex items-center">
                    <MessageSquare className="mr-2 text-medical-teal" size={20} />
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="4"
                    className="input-field resize-none"
                    placeholder="Any specific concerns or questions you'd like to discuss..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Booking...' : 'Confirm Appointment'}
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Your appointment will be confirmed within 24 hours. 
                  You'll receive a confirmation via email and phone.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookAppointment;