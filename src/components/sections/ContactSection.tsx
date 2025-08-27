import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { services } from '../../data/services';

const ContactSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-neutral-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Quick Inquiry</h2>
          <p className="section-subtitle">
            Get in touch with us for personalized healthcare solutions tailored to your needs
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6">Looking for something specific?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`https://wa.me/917502119022?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors"
                >
                  <service.icon className="w-5 h-5 text-primary-700 dark:text-primary-400 mr-3 flex-shrink-0" />
                  <span className="text-neutral-800 dark:text-neutral-200">{service.title}</span>
                </a>
              ))}
            </div>
          </motion.div>
          
          {/* Call and WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-primary-50 dark:bg-primary-900/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">Request a Call?</h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                Want to speak directly with our team? Click the button below to initiate a call.
              </p>
              
              <a
                href="tel:917502119022"
                className="btn btn-primary w-full justify-center mb-6"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              
              <div className="bg-white dark:bg-neutral-800 rounded-xl p-6">
                <h4 className="font-medium mb-3">Contact via WhatsApp</h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                  For faster responses and to share specific requirements, reach out to us on WhatsApp.
                </p>
                
                <a
                  href="https://wa.me/917502119022?text=Hello, I'm interested in hoMediCare services. Could you please provide more information?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-4 bg-[#25D366] text-white rounded-lg text-center font-medium hover:bg-[#128C7E] transition-colors"
                >
                  WhatsApp: +91 7502119022
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            Visit us at our office in Poonamallee or reach out for home healthcare services across Tamil Nadu.
          </p>
          
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-md h-[400px]">
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
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;