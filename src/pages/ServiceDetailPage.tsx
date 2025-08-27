import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import { getServiceById, getRelatedServices, Service } from '../data/services';

const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [service, setService] = useState<Service | undefined>(undefined);
  const [relatedServices, setRelatedServices] = useState<Service[]>([]);
  
  useEffect(() => {
    if (id) {
      const serviceData = getServiceById(id);
      if (serviceData) {
        setService(serviceData);
        document.title = `${serviceData.title} - hoMediCare`;
        setRelatedServices(getRelatedServices(id, 3));
      } else {
        // Service not found, redirect to home
        navigate('/', { replace: true });
      }
    }
  }, [id, navigate]);
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-700"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16"
    >
      <div className="container-custom">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/#services"
            className="inline-flex items-center text-neutral-600 dark:text-neutral-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
        </div>
        
        {/* Service Header */}
        <div className="bg-primary-50 dark:bg-primary-900/10 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="bg-white dark:bg-neutral-800 w-24 h-24 rounded-full flex items-center justify-center">
              <service.icon size={48} className="text-primary-700 dark:text-primary-400" />
            </div>
            
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">{service.shortDescription}</p>
              
              <a
                href={`https://wa.me/917502119022?text=${encodeURIComponent(service.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Inquire via WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        {/* Service Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">About This Service</h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {service.longDescription.split('. ').map((sentence, index) => (
                <p key={index}>{sentence}.</p>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-700 dark:text-primary-400 mr-2">✓</span>
                  <span>Personalized care in the comfort of your own home</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 dark:text-primary-400 mr-2">✓</span>
                  <span>Qualified and experienced healthcare professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 dark:text-primary-400 mr-2">✓</span>
                  <span>Flexible scheduling to accommodate your needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 dark:text-primary-400 mr-2">✓</span>
                  <span>Reduced risk of hospital-acquired infections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 dark:text-primary-400 mr-2">✓</span>
                  <span>Lower costs compared to extended hospital stays</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 dark:text-primary-400 mr-2">✓</span>
                  <span>Family involvement in the care process</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm mb-8">
              <h3 className="text-xl font-semibold mb-4">Quick Information</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Service Type</h4>
                  <p className="text-neutral-800 dark:text-neutral-200">{service.title}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Availability</h4>
                  <p className="text-neutral-800 dark:text-neutral-200">All districts in Tamil Nadu</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Duration</h4>
                  <p className="text-neutral-800 dark:text-neutral-200">Flexible as per requirements</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Contact</h4>
                  <p className="text-neutral-800 dark:text-neutral-200">+91 7502119022 (WhatsApp only)</p>
                </div>
              </div>
              
              <div className="mt-6">
                <a
                  href={`https://wa.me/917502119022?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-center"
                >
                  Inquire Now
                </a>
              </div>
            </div>
            
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                Have questions about this service? Our team is available to assist you.
              </p>
              
              <a
                href="tel:917502119022"
                className="btn btn-outline w-full justify-center mb-3"
              >
                Request a Call
              </a>
              
              <a
                href="https://wa.me/917502119022?text=Hello, I have some questions about your services. Could you please help me?"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 px-4 bg-[#25D366] text-white rounded-lg text-center font-medium hover:bg-[#128C7E] transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        {/* Related Services */}
        <div>
          <h2 className="text-2xl font-semibold mb-8">Related Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((relatedService) => (
              <motion.div
                key={relatedService.id}
                whileHover={{ y: -5 }}
                className="service-card"
              >
                <div className="service-icon">
                  <relatedService.icon size={40} />
                </div>
                <h4 className="text-lg font-semibold mb-2">{relatedService.title}</h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">{relatedService.shortDescription}</p>
                <div className="mt-auto pt-4 flex flex-col gap-2 w-full">
                  <Link
                    to={`/service/${relatedService.id}`}
                    className="text-primary-700 dark:text-primary-400 text-sm font-medium hover:underline"
                  >
                    Learn More
                  </Link>
                  <a
                    href={`https://wa.me/917502119022?text=${encodeURIComponent(relatedService.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary text-sm py-2"
                  >
                    Inquire Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetailPage;