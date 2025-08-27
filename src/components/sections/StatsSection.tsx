import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-16 bg-primary-700 dark:bg-primary-800 text-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl md:text-6xl font-bold mb-2">1000+</div>
            <div className="text-xl font-medium mb-3">Patients Served</div>
            <p className="text-primary-100">
              Helping thousands across Tamil Nadu with quality healthcare
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl md:text-6xl font-bold mb-2">1000+</div>
            <div className="text-xl font-medium mb-3">Healthcare Professionals</div>
            <p className="text-primary-100">
              Qualified and experienced caregivers
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl md:text-6xl font-bold mb-2">10+</div>
            <div className="text-xl font-medium mb-3">Years of Excellence</div>
            <p className="text-primary-100">
              A decade of trusted healthcare service
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;