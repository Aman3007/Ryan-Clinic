
import { Link } from 'react-router-dom';
import { Scissors, Droplet, Users, Award, CheckCircle, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Home = () => {
  const services = [
    {
      icon: <Scissors size={40} />,
      title: 'FUE Hair Transplant',
      description: 'Advanced Follicular Unit Extraction technique for natural-looking results with minimal scarring.',
      features: ['Minimally Invasive', 'Quick Recovery', 'Natural Results']
    },
    {
      icon: <Droplet size={40} />,
      title: 'PRP Treatment',
      description: 'Platelet-Rich Plasma therapy to stimulate hair growth and improve hair density.',
      features: ['Non-Surgical', 'Safe & Effective', 'Promotes Growth']
    },
    {
      icon: <Users size={40} />,
      title: 'Expert Consultation',
      description: 'Personalized consultation with Turkish specialist techniques adapted for Indian clients.',
      features: ['Free Assessment', 'Custom Plans', 'Expert Guidance']
    }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Patients' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Success Rate' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 gradient-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                
                <span className="text-yellow-300">Advanced Hair Restoration</span>
              </h1>
              <p className="text-xl text-black mb-8">
                Experience world-class hair transplant services with Turkish specialist techniques, 
                bringing natural-looking results with minimal scarring.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/book" className="btn-primary bg-white text-medical-teal hover:bg-gray-100">
                  <Calendar className="inline mr-2" size={20} />
                  Book Consultation
                </Link>
                <a href="#services" className="btn-secondary border-white text-white hover:bg-white hover:text-medical-teal">
                  Learn More
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://media.istockphoto.com/id/1359870624/photo/the-head-of-a-balding-man-before-and-after-hair-transplant-surgery-a-man-losing-his-hair-has.jpg?s=612x612&w=0&k=20&c=9JfkQPXknKkfdymUtNit-VrXJtIo5PolslTLBXkcIt0="
                  alt="Hair Restoration"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-medical-teal mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive hair restoration solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-medical-teal mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-medical-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle size={18} className="text-medical-green mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=600&fit=crop"
                alt="About Ryan Clinic"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">About Ryan Clinic India</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ryan Clinic India is a premier hair restoration center specializing in advanced 
                hair transplant techniques. We bring Turkish specialist methods to India, offering 
                world-class FUE procedures and PRP treatments.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of experienced surgeons and medical professionals is dedicated to 
                delivering natural-looking results with minimal scarring and quick recovery times.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Award className="text-medical-teal flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-medical-dark">Certified Experts</h4>
                    <p className="text-gray-600 text-sm">International training & certifications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-medical-green flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-medical-dark">Proven Results</h4>
                    <p className="text-gray-600 text-sm">98% patient satisfaction rate</p>
                  </div>
                </div>
              </div>
              <Link to="/book" className="btn-primary">
                Schedule Your Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue mb-6">
              Ready to Transform Your Look?
            </h2>
            <p className="text-xl text-blue-600 mb-8">
              Book your free consultation today and take the first step towards restoring your confidence
            </p>
            <Link to="/book" className="btn-primary bg-white text-medical-teal hover:bg-gray-100">
              <Calendar className="inline mr-2" size={20} />
              Book Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;