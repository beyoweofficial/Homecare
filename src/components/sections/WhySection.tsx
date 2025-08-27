import { motion } from 'framer-motion';
import { Shield, Award, Heart, Clock, Users, Sparkles } from 'lucide-react';

const WhySection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Safe & Secure Environment",
      description: "Avoid exposure to hospital-acquired infections and enjoy treatment in the familiar comfort of your home."
    },
    {
      icon: Award,
      title: "Experienced Professionals",
      description: "Our team consists of qualified doctors, nurses, and therapists with specialized training in home healthcare."
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Receive individualized attention and care plans tailored specifically to your unique health needs."
    },
    {
      icon: Clock,
      title: "Time & Cost Efficient",
      description: "Eliminate travel time, waiting rooms, and reduce overall costs compared to hospital stays."
    },
    {
      icon: Users,
      title: "Family Involvement",
      description: "Enable family members to participate in the care process while building confidence."
    },
    {
      icon: Sparkles,
      title: "Faster Recovery",
      description: "Patients often recover faster and experience better outcomes in their home environment."
    }
  ];

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
          <h2 className="section-title">Why Choose hoMediCare?</h2>
          <p className="section-subtitle">
            Experience the difference of premium home healthcare services
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <reason.icon className="w-8 h-8 text-primary-700 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">{reason.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-primary-50 dark:bg-primary-900/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">Why is Home Care Important?</h3>
          <p className="text-neutral-700 dark:text-neutral-300 text-center max-w-3xl mx-auto">
            In today's fast-paced world, hospital visits can be challenging. Our home healthcare services provide professional medical care in the comfort of your home, reducing stress and promoting faster recovery while ensuring continuous support from our experienced healthcare team.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;