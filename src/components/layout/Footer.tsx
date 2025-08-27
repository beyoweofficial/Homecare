import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-800 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo />
              <span className="text-xl font-bold text-primary-700 dark:text-primary-400">hoMediCare</span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Home Care Services across Tamil Nadu
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Since 2015
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              A unit of Holistic Health Care Consultancy Services Pvt. Ltd.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-700 dark:text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-neutral-600 dark:text-neutral-400">
                  No.531, Ring Road, Poonamallee, Thiruvallur District, Tamil Nadu
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary-700 dark:text-primary-400 mr-2 flex-shrink-0" />
                <a
                  href="https://wa.me/917502119022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                >
                  +91 7502119022 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary-700 dark:text-primary-400 mr-2 flex-shrink-0" />
                <a
                  href="mailto:holistichealthcare19@gmail.com"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                >
                  holistichealthcare19@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/#services"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/#founder"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                >
                  Our Founder
                </Link>
              </li>
              <li>
                <Link
                  to="/#why-choose-us"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                >
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Find Us</h4>
            <div className="h-48 bg-neutral-200 dark:bg-neutral-700 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0338369962277!2d80.1108!3d13.0490!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzU2LjQiTiA4MMKwMDYnMzkuMCJF!5e0!3m2!1sen!2sin!4v1625661234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="hoMediCare Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-200 dark:border-neutral-700 mt-12 pt-8 text-center text-sm text-neutral-500 dark:text-neutral-500">
          <p>&copy; {currentYear} hoMediCare. All rights reserved.</p>
          <p className="mt-2">A unit of Holistic Health Care Consultancy Services Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;