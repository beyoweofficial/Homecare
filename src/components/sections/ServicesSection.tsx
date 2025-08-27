import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { getFeaturedServices, getNonFeaturedServices } from '../../data/services';

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredServices = getFeaturedServices();
  const otherServices = getNonFeaturedServices();
  
  // For auto-sliding featured services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredServices.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [featuredServices.length]);
  
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  // Scroll references for horizontal scrolling
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  
  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      
      ref.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="services" className="py-16 bg-white dark:bg-neutral-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Our Healthcare Services</h2>
          <p className="section-subtitle">
            Professional medical care delivered to your doorstep with compassion and expertise
          </p>
        </motion.div>
        
        {/* Featured Services - Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-neutral-800 dark:text-neutral-200">
            Featured Services
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredServices.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-lg border border-neutral-100 dark:border-neutral-700"
              >
                <div className="flex items-center gap-6">
                  <div className="bg-primary-50 dark:bg-primary-900/30 w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon size={32} className="text-primary-700 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">{service.shortDescription}</p>
                    <div className="flex gap-3">
                      <Link
                        to={`/service/${service.id}`}
                        className="text-primary-700 dark:text-primary-400 text-sm font-medium hover:underline"
                      >
                        Learn More
                      </Link>
                      <a
                        href={`https://wa.me/917502119022?text=${encodeURIComponent(service.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-700 dark:text-primary-400 text-sm font-medium hover:underline"
                      >
                        Inquire Now
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Support Services */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
              Support Services
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => scroll(scrollRef2, 'left')}
                className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll(scrollRef2, 'right')}
                className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div ref={scrollRef2} className="flex overflow-x-auto hide-scrollbar gap-6 pb-4">
            {otherServices.map((service) => (
              <div key={service.id} className="flex-shrink-0 w-[280px]">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="service-card h-full"
                >
                  <div className="service-icon">
                    <service.icon size={40} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">{service.shortDescription}</p>
                  <div className="mt-auto pt-4 flex flex-col gap-2 w-full">
                    <Link
                      to={`/service/${service.id}`}
                      className="text-primary-700 dark:text-primary-400 text-sm font-medium hover:underline"
                    >
                      Learn More
                    </Link>
                    <a
                      href={`https://wa.me/917502119022?text=${encodeURIComponent(service.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary text-sm py-2"
                    >
                      Inquire Now
                    </a>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        
        {/* All Services Text List */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="mt-12 bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Complete Service Listing</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[...featuredServices, ...otherServices].map((service) => (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 }
                  }
                }}
                className="flex items-start bg-white dark:bg-neutral-700 p-4 rounded-xl shadow-sm"
              >
                <service.icon className="w-6 h-6 text-primary-700 dark:text-primary-300 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">{service.title}</h4>
                  <div className="flex gap-3 mt-2">
                    <Link
                      to={`/service/${service.id}`}
                      className="text-sm text-primary-700 dark:text-primary-400 hover:underline"
                    >
                      Details
                    </Link>
                    <a
                      href={`https://wa.me/917502119022?text=${encodeURIComponent(service.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary-700 dark:text-primary-400 hover:underline"
                    >
                      Inquire
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;