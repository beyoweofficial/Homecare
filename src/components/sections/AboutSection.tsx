import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Stethoscope } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-neutral-50 dark:bg-neutral-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">About hoMediCare</h2>
          <p className="section-subtitle">
            A unit of Holistic Health Care Consultancy Services Pvt. Ltd.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-neutral-700 dark:text-neutral-300 mb-6">
              Established in 2015, hoMediCare is a premier home healthcare service provider committed to delivering exceptional medical care in the comfort of patients' homes across Tamil Nadu. As a unit of Holistic Health Care Consultancy Services Pvt. Ltd., we bring together expertise in healthcare management, clinical excellence, and compassionate service.
            </p>
            
            <p className="text-neutral-700 dark:text-neutral-300 mb-6">
              Our comprehensive range of services includes specialized nursing care, physiotherapy, post-surgical care, elderly support, and much more. We understand that each patient's needs are unique, which is why we take a personalized approach to healthcare, creating tailored care plans that address individual requirements and preferences.
            </p>
            
            <p className="text-neutral-700 dark:text-neutral-300 mb-6">
              What sets us apart is our team of highly qualified healthcare professionals who are not only skilled in their respective fields but also trained specifically in home healthcare delivery. They bring a combination of expertise, empathy, and dedication to every patient interaction.
            </p>
            
            <p className="text-neutral-700 dark:text-neutral-300">
              At hoMediCare, we're not just providing medical services—we're enhancing quality of life. We believe that healing happens best in environments where patients feel comfortable and supported, which is why we're committed to bringing professional healthcare directly to your doorstep.
            </p>
          </motion.div>
          
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-neutral-700 p-6 rounded-2xl shadow-sm">
                <div className="bg-primary-100 dark:bg-primary-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary-700 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Our Mission</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  To transform healthcare delivery by providing accessible, high-quality medical services at home, enhancing patient comfort and recovery while reducing healthcare burdens.
                </p>
              </div>
              
              <div className="bg-white dark:bg-neutral-700 p-6 rounded-2xl shadow-sm">
                <div className="bg-primary-100 dark:bg-primary-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-primary-700 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Our Vision</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  To be the leading home healthcare provider in South India, recognized for excellence, innovation, and compassionate care that significantly improves patient outcomes.
                </p>
              </div>
              
              <div className="bg-white dark:bg-neutral-700 p-6 rounded-2xl shadow-sm">
                <div className="bg-primary-100 dark:bg-primary-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary-700 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Our Team</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  A dedicated network of healthcare professionals including doctors, nurses, physiotherapists, and caregivers, all committed to delivering exceptional patient-centered care.
                </p>
              </div>
              
              <div className="bg-white dark:bg-neutral-700 p-6 rounded-2xl shadow-sm">
                <div className="bg-primary-100 dark:bg-primary-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Stethoscope className="w-6 h-6 text-primary-700 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Our Approach</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  We take a holistic view of health, considering physical, emotional, and environmental factors to create personalized care plans that support complete well-being.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;