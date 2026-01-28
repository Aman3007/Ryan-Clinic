import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-medical-dark text-green-500 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">Ryan Clinic India</h3>
            <p className="text-green-500 mb-4">
              Leading the way in advanced hair restoration and transplant services with Turkish specialist techniques.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-500 hover:text-medical-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-green-500 hover:text-medical-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-green-500 hover:text-medical-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-green-500 hover:text-medical-teal transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

        
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#services" className="text-green-500 hover:text-medical-teal transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#about" className="text-green-500 hover:text-medical-teal transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <Link to="/book" className="text-green-500 hover:text-medical-teal transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <a href="/#contact" className="text-green-500 hover:text-medical-teal transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-green-500">FUE Hair Transplant</li>
              <li className="text-green-500">PRP Treatment</li>
              <li className="text-green-500">Hair Analysis</li>
              <li className="text-green-500">Consultation</li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-medical-teal flex-shrink-0 mt-1" />
                <span className="text-green-500">123 Medical Plaza, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-medical-teal flex-shrink-0" />
                <span className="text-green-500">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-medical-teal flex-shrink-0" />
                <span className="text-green-500">info@ryanclinic.in</span>
              </li>
            </ul>
          </div>
        </div>

       
        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="text-violet-800">
            &copy; {new Date().getFullYear()} Ryan Clinic India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;