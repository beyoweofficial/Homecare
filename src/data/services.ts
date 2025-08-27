import { Activity, Home, UserCheck, BabyIcon, Stethoscope, UserCog, Armchair as Wheelchair, Syringe, Truck, HeartPulse, AlarmClock, Waves, Microscope, Users, Bath } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: any;
  featured: boolean;
  whatsappMessage: string;
}

export const services: Service[] = [
  {
    id: 'icu-setup',
    title: 'ICU Setup at Home',
    shortDescription: 'Complete ICU setup at your home with all necessary equipment and 24/7 monitoring.',
    longDescription: 'Our comprehensive ICU setup brings hospital-grade care to your home. We provide all necessary medical equipment including ventilators, cardiac monitors, oxygen support, and more. Our service includes 24/7 monitoring by qualified healthcare professionals, regular doctor visits, and emergency response protocols. This service is ideal for patients requiring intensive care but preferring the comfort and familiarity of home.',
    icon: Activity,
    featured: true,
    whatsappMessage: 'Hello, I am interested in your ICU Setup at Home service. Could you please provide more information?'
  },
  {
    id: 'specialized-nurse',
    title: 'Specialized Nurse at Home',
    shortDescription: 'Experienced nurses providing specialized medical care in the comfort of your home.',
    longDescription: 'Our specialized nursing service brings highly qualified and experienced nurses to your doorstep. These professionals are trained to handle complex medical conditions, administer medications, perform medical procedures, and provide comprehensive care. All our nurses are certified, undergo rigorous background checks, and receive ongoing training to ensure they deliver the highest standard of care tailored to your specific health needs.',
    icon: UserCheck,
    featured: true,
    whatsappMessage: 'Hello, I am interested in your Specialized Nurse at Home service. Could you please provide more information?'
  },
  {
    id: 'trained-attendant',
    title: 'Trained Attendant at Home',
    shortDescription: 'Skilled attendants to assist with daily activities and provide companionship.',
    longDescription: 'Our trained attendants are specially equipped to assist with activities of daily living, including personal hygiene, mobility support, meal preparation, medication reminders, and companionship. They are trained to recognize health changes and alert medical professionals when necessary. This service is perfect for elderly individuals, patients recovering from surgery, or anyone needing assistance with daily activities while maintaining their independence at home.',
    icon: UserCog,
    featured: true,
    whatsappMessage: 'Hello, I am interested in your Trained Attendant at Home service. Could you please provide more information?'
  },
  {
    id: 'mother-child-care',
    title: 'Mother & Child Care at Home',
    shortDescription: 'Specialized care for new mothers and infants in the postnatal period.',
    longDescription: 'Our Mother & Child Care service provides comprehensive support during the crucial postnatal period. We offer lactation support, newborn care education, postnatal recovery assistance, and monitoring of both mother and baby\'s health. Our experienced professionals help with feeding techniques, bathing demonstrations, and addressing common concerns of new parents. This service ensures both mother and child receive the attention and care they need during this important transition period.',
    icon: BabyIcon,
    featured: true,
    whatsappMessage: 'Hello, I am interested in your Mother & Child Care at Home service. Could you please provide more information?'
  },
  {
    id: 'doctor-visit',
    title: 'Doctor Visit at Home',
    shortDescription: 'Qualified doctors providing consultations and medical care in your home.',
    longDescription: 'Our Doctor Visit service brings qualified physicians directly to your home, eliminating the need to travel when you\'re unwell. Our doctors can perform examinations, provide diagnoses, prescribe medications, offer follow-up care, and refer to specialists if necessary. This service is especially beneficial for elderly patients, those with mobility issues, immunocompromised individuals, or anyone seeking convenient and personalized medical attention without the hassles of hospital visits.',
    icon: Stethoscope,
    featured: false,
    whatsappMessage: 'Hello, I am interested in your Doctor Visit at Home service. Could you please provide more information?'
  },
  {
    id: 'physiotherapy',
    title: 'Physiotherapy at Home',
    shortDescription: 'Professional physiotherapy sessions delivered in the comfort of your home.',
    longDescription: 'Our home physiotherapy service brings certified physiotherapists to your doorstep, equipped with necessary tools and techniques to facilitate your recovery. Our therapists create personalized treatment plans addressing your specific conditions, whether it\'s post-surgical rehabilitation, sports injuries, neurological conditions, or chronic pain management. Regular sessions at home ensure consistent therapy without the strain of travel, promoting faster and more comfortable recovery in your familiar environment.',
    icon: Waves,
    featured: false,
    whatsappMessage: 'Hello, I am interested in your Physiotherapy at Home service. Could you please provide more information?'
  },
  {
    id: 'nursing-care',
    title: 'Male/Female Nursing Care',
    shortDescription: 'Gender-specific nursing care addressing unique health needs with sensitivity.',
    longDescription: 'Our gender-specific nursing care service addresses the unique health needs of both male and female patients with appropriate sensitivity and expertise. We assign nurses based on patient preference to ensure comfort, particularly for intimate care procedures. Our nurses are trained in gender-specific health conditions and provide compassionate, dignified care while respecting cultural and personal preferences, creating a comfortable healing environment tailored to individual needs.',
    icon: HeartPulse,
    featured: false,
    whatsappMessage: 'Hello, I am interested in your Male/Female Nursing Care service. Could you please provide more information?'
  },
  {
    id: 'post-surgical',
    title: 'Post-surgical Care',
    shortDescription: 'Comprehensive care for patients recovering from surgery at home.',
    longDescription: 'Our Post-surgical Care service provides comprehensive support during the critical recovery period after surgery. Our trained healthcare professionals monitor vital signs, manage pain, care for surgical wounds, assist with medication adherence, and help prevent complications. We also provide physical assistance with mobility and daily activities while coordinating with your surgeon for optimal recovery. This personalized approach ensures a smooth transition from hospital to home, promoting faster healing in a comfortable environment.',
    icon: Syringe,
    featured: false,
    whatsappMessage: 'Hello, I am interested in your Post-surgical Care service. Could you please provide more information?'
  },
  {
    id: 'ambulance',
    title: 'Ambulance Services',
    shortDescription: 'Prompt and reliable emergency transportation with medical support.',
    longDescription: 'Our Ambulance Services provide prompt, reliable emergency transportation with essential medical support. Our fleet of well-equipped ambulances includes basic and advanced life support options staffed by trained paramedics and EMTs. Available 24/7, we ensure rapid response times, proper patient stabilization, and safe transport to medical facilities. We coordinate with hospitals for seamless transfers and maintain communication with family members throughout the journey, offering peace of mind during medical emergencies.',
    icon: Truck,
    featured: false,
    whatsappMessage: 'Hello, I am interested in your Ambulance Services. Could you please provide more information?'
  },
  {
    id: 'elderly-care',
    title: 'Elderly Supportive Care',
    shortDescription: 'Compassionate assistance for seniors to maintain independence and quality of life.',
    longDescription: 'Our Elderly Supportive Care service provides compassionate assistance helping seniors maintain independence and quality of life. We offer personalized support with daily activities, medication management, mobility assistance, and nutritional guidance. Our caregivers provide companionship to combat loneliness while monitoring health changes. We create safe home environments and coordinate with family members and healthcare providers to ensure comprehensive care. Our approach emphasizes dignity, respect, and fostering independence, enhancing seniors\' quality of life.',
    icon: Wheelchair,
    featured: false,
    whatsappMessage: 'Hello, I am interested in your Elderly Supportive Care service. Could you please provide more information?'
  },
  {
    id: 'baby-care',
    title: 'Baby Care',
    shortDescription: 'Specialized care for infants by trained professionals in your home.',
    longDescription: 'Our Baby Care service provides specialized attention for infants by trained professionals in your home. Our caregivers assist with feeding, bathing, diaper changing, and establishing healthy sleep routines while monitoring developmental milestones and potential health concerns. We offer guidance on infant care techniques, creating safe environments, and supporting new parents through education and demonstrations. This service provides peace of mind for parents while ensuring proper care and development for your precious little one.',
    icon: BabyIcon,
    featured: false,
    whatsappMessage: 'Hello, I am interested in your Baby Care service. Could you please provide more information?'
  },
  {
    id: 'medical-equipment',
    title: 'Medical Equipment',
    shortDescription: 'High-quality medical equipment rental and sales for home healthcare needs.',
    longDescription: 'Our Medical Equipment service provides high-quality equipment rental and sales for home healthcare needs. We offer a comprehensive range including hospital beds, wheelchairs, oxygen concentrators, CPAP machines, mobility aids, and monitoring devices. Our service includes professional setup, usage training, regular maintenance, and prompt technical support. We help navigate insurance coverage and offer flexible rental plans, ensuring you have reliable, well-maintained equipment to support effective home healthcare without significant upfront investment.',
    icon: Microscope,
    featured: false,
    whatsappMessage: 'Hello, I am interested in your Medical Equipment service. Could you please provide more information?'
  },
  {
    id: 'caretakers',
    title: 'Male/Female Caretakers',
    shortDescription: 'Compassionate personal care assistants providing non-medical support at home.',
    longDescription: 'Our Male/Female Caretaker service provides compassionate personal care assistants offering non-medical support at home. Our caretakers assist with daily activities, meal preparation, light housekeeping, medication reminders, and companionship. We match caretakers based on personality compatibility and specific needs, offering both male and female staff to ensure client comfort. All caretakers undergo thorough background checks and training, providing reliable, trustworthy assistance that enhances independence and quality of life while giving family members peace of mind.',
    icon: Users,
    featured: false,
    whatsappMessage: 'Hello, I am interested in your Male/Female Caretakers service. Could you please provide more information?'
  },
  {
    id: 'nursing-procedures',
    title: 'Nursing Procedures',
    shortDescription: 'Professional execution of specific nursing procedures in the comfort of your home.',
    longDescription: 'Our Nursing Procedures service provides professional execution of specific medical procedures in the comfort of your home. Our qualified nurses perform wound dressing, injection administration, catheterization, nasogastric/Ryles tube management, IV therapy, and other specialized procedures. All services follow strict protocols for infection control and safety. We coordinate with your physician, maintain detailed documentation, and provide education on post-procedure care. This service eliminates hospital visits for routine procedures while ensuring professional medical standards are maintained in your home environment.',
    icon: Bath,
    featured: false,
    whatsappMessage: 'Hello, I am interested in your Nursing Procedures service. Could you please provide more information?'
  }
];

export const getFeaturedServices = () => services.filter(service => service.featured);

export const getNonFeaturedServices = () => services.filter(service => !service.featured);

export const getServiceById = (id: string) => services.find(service => service.id === id);

export const getRelatedServices = (currentId: string, count: number = 3) => {
  const otherServices = services.filter(service => service.id !== currentId);
  return otherServices.sort(() => 0.5 - Math.random()).slice(0, count);
};