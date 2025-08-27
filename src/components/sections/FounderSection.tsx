import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const founderImages = [
  'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];

const FounderSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % founderImages.length);
  };
  
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + founderImages.length) % founderImages.length);
  };

  return (
    <section id="founder" className="py-16 bg-neutral-50 dark:bg-neutral-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Meet Our Founder</h2>
          <p className="section-subtitle">
            The visionary behind hoMediCare's mission to revolutionize home healthcare
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-white dark:bg-neutral-700 p-4 rounded-2xl shadow-lg">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                {founderImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentImage ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Founder Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-neutral-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-neutral-700 transition"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-neutral-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-neutral-700 transition"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
                </button>
                
                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {founderImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === currentImage
                          ? 'bg-primary-700 dark:bg-primary-400'
                          : 'bg-white/60 dark:bg-neutral-500/60'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
              Hon. Dr. Iyyappan
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Founder & CEO
            </p>
            
            <div className="space-y-4">
              <p className="text-neutral-700 dark:text-neutral-300">
                Dr. Iyyappan established hoMediCare in 2015 with a vision to transform how healthcare is delivered across Tamil Nadu. With over 15 years of experience in healthcare management and services, he identified the critical need for professional medical care in the comfort of patients' homes.
              </p>
              
              <p className="text-neutral-700 dark:text-neutral-300">
                His approach combines medical excellence with compassionate care, ensuring that every patient receives personalized attention. Under his leadership, hoMediCare has grown to serve thousands of patients across Tamil Nadu with a team of dedicated healthcare professionals.
              </p>
              
              <p className="text-neutral-700 dark:text-neutral-300">
                Dr. Iyyappan holds multiple qualifications in healthcare management and has been recognized for his contributions to improving healthcare accessibility in the region. His commitment to quality and patient satisfaction remains the cornerstone of hoMediCare's philosophy.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-white dark:bg-neutral-700 px-6 py-4 rounded-xl shadow-sm">
                <p className="text-2xl font-bold text-primary-700 dark:text-primary-400">15+</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Years Experience</p>
              </div>
              
              <div className="bg-white dark:bg-neutral-700 px-6 py-4 rounded-xl shadow-sm">
                <p className="text-2xl font-bold text-primary-700 dark:text-primary-400">1,000+</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Patients Served</p>
              </div>
              
              <div className="bg-white dark:bg-neutral-700 px-6 py-4 rounded-xl shadow-sm">
                <p className="text-2xl font-bold text-primary-700 dark:text-primary-400">38+</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Districts Covered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;