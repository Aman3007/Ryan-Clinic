import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, Plus, AlertCircle } from 'lucide-react';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await api.get('/appointments/my');
      if (response.data.success) {
        setAppointments(response.data.appointments);
      }
    } catch (err) {
      setError('Failed to fetch appointments');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'completed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-medical-teal"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-medical-dark mb-2">
              Welcome back, {user?.name}!
            </h1>
            <p className="text-gray-600">Manage your appointments and profile</p>
          </motion.div>

          {/* User Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card mb-8"
          >
            <h2 className="text-2xl font-bold text-medical-dark mb-4">Your Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <User className="text-medical-teal" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-semibold text-gray-900">{user?.name}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-medical-teal" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold text-gray-900">{user?.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-medical-teal" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-semibold text-gray-900">{user?.phone || 'Not provided'}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Appointments Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-medical-dark">Your Appointments</h2>
              <Link to="/book" className="btn-primary">
                <Plus className="inline mr-2" size={20} />
                New Appointment
              </Link>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            {appointments.length === 0 ? (
              <div className="card text-center py-12">
                <AlertCircle className="mx-auto text-gray-400 mb-4" size={48} />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No appointments yet
                </h3>
                <p className="text-gray-600 mb-6">
                  Book your first appointment to get started
                </p>
                <Link to="/book" className="btn-primary">
                  Book Appointment
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {appointments.map((appointment, index) => (
                  <motion.div
                    key={appointment._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card hover:scale-105 transition-transform duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-medical-dark">
                        {appointment.serviceName}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                          appointment.status
                        )}`}
                      >
                        {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="text-medical-teal mr-3 flex-shrink-0" size={20} />
                        <span className="text-sm">{formatDate(appointment.date)}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Clock className="text-medical-teal mr-3 flex-shrink-0" size={20} />
                        <span className="text-sm">{appointment.time}</span>
                      </div>
                    </div>

                    {appointment.notes && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                          <strong>Notes:</strong> {appointment.notes}
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;