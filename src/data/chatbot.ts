export interface ChatCategory {
  id: string;
  name: string;
  questions: ChatQuestion[];
}

export interface ChatQuestion {
  id: string;
  question: string;
  answer: string;
}

export const chatbotData: ChatCategory[] = [
  {
    id: 'address',
    name: 'Address & Location',
    questions: [
      {
        id: 'address-1',
        question: 'Where is hoMediCare located?',
        answer: 'hoMediCare is located at No.531, Ring Road, Poonamallee, Thiruvallur District, Tamil Nadu.'
      },
      {
        id: 'address-2',
        question: 'Do you provide services across Tamil Nadu?',
        answer: 'Yes, we provide home care services across all districts in Tamil Nadu. You can select your district from our location dropdown to see specific services available in your area.'
      },
      {
        id: 'address-3',
        question: 'How can I reach your office?',
        answer: 'You can find our office at No.531, Ring Road, Poonamallee, Thiruvallur District. You can use the Google Maps integration on our website for directions. If you need assistance, please WhatsApp us at 7502119022.'
      }
    ]
  },
  {
    id: 'founder',
    name: 'About the Founder',
    questions: [
      {
        id: 'founder-1',
        question: 'Who is the founder of hoMediCare?',
        answer: 'hoMediCare was founded by Hon. Dr. Iyyappan, who has extensive experience in healthcare services and is dedicated to providing quality home healthcare across Tamil Nadu.'
      },
      {
        id: 'founder-2',
        question: 'What is Dr. Iyyappan\'s background?',
        answer: 'Dr. Iyyappan has a strong background in healthcare management and services. He established hoMediCare in 2015 with a vision to provide accessible, high-quality healthcare services at home, focusing on patient comfort and personalized care.'
      },
      {
        id: 'founder-3',
        question: 'How can I contact Dr. Iyyappan?',
        answer: 'For any inquiries directed to Dr. Iyyappan, please contact us through our official WhatsApp number 7502119022 or email at holistichealthcare19@gmail.com, and your message will be forwarded appropriately.'
      }
    ]
  },
  {
    id: 'services',
    name: 'Our Services',
    questions: [
      {
        id: 'services-1',
        question: 'What services does hoMediCare provide?',
        answer: 'hoMediCare offers a wide range of home healthcare services including ICU setup at home, specialized nursing care, trained attendants, mother & child care, doctor visits, physiotherapy, post-surgical care, ambulance services, elderly supportive care, baby care, medical equipment rental/sales, and nursing procedures.'
      },
      {
        id: 'services-2',
        question: 'Do you provide 24/7 nursing care?',
        answer: 'Yes, we provide 24/7 nursing care services with qualified nurses who can work in shifts to ensure continuous care for patients requiring round-the-clock attention. Contact us on WhatsApp at 7502119022 for more details.'
      },
      {
        id: 'services-3',
        question: 'How quickly can you set up ICU at home?',
        answer: 'We can typically set up an ICU at home within 24-48 hours of confirming the service, depending on equipment availability and location. For urgent requirements, please contact us immediately on WhatsApp at 7502119022.'
      },
      {
        id: 'services-4',
        question: 'What equipment is included in the home ICU setup?',
        answer: 'Our home ICU setup typically includes essential equipment such as hospital beds, cardiac monitors, ventilators (if required), oxygen support, suction machines, and other necessary medical devices based on the patient\'s specific needs as advised by their physician.'
      },
      {
        id: 'services-5',
        question: 'Do you provide physiotherapy services?',
        answer: 'Yes, we provide professional physiotherapy services at home. Our qualified physiotherapists create personalized treatment plans and conduct regular sessions at your home, eliminating the need to travel for therapy.'
      }
    ]
  },
  {
    id: 'faqs',
    name: 'FAQs',
    questions: [
      {
        id: 'faq-1',
        question: 'How do I book a service?',
        answer: 'To book any of our services, simply click on the WhatsApp icon next to the service you\'re interested in, or contact us directly on WhatsApp at 7502119022. Our team will respond promptly to discuss your requirements and arrange the service.'
      },
      {
        id: 'faq-2',
        question: 'What are your operating hours?',
        answer: 'Our customer service team is available from 8:00 AM to 8:00 PM, 7 days a week. However, our care services operate 24/7, and we have emergency support available round the clock for existing clients.'
      },
      {
        id: 'faq-3',
        question: 'How are your healthcare professionals selected?',
        answer: 'All our healthcare professionals undergo a rigorous selection process including verification of qualifications, experience checks, background verification, and skill assessment. They also receive regular training to ensure they meet our high standards of care.'
      },
      {
        id: 'faq-4',
        question: 'What if I\'m not satisfied with the service?',
        answer: 'Client satisfaction is our priority. If you\'re not satisfied with any aspect of our service, please contact us immediately on WhatsApp at 7502119022. We will address your concerns promptly and take appropriate measures to resolve any issues.'
      },
      {
        id: 'faq-5',
        question: 'Since when has hoMediCare been operating?',
        answer: 'hoMediCare has been providing home healthcare services since 2015. We are a unit of Holistic Health Care Consultancy Services Pvt. Ltd. and have served thousands of patients across Tamil Nadu.'
      }
    ]
  }
];

export const getAllQuestions = () => {
  return chatbotData.flatMap(category => category.questions);
};

export const searchQuestions = (query: string) => {
  const allQuestions = getAllQuestions();
  return allQuestions.filter(question => 
    question.question.toLowerCase().includes(query.toLowerCase()) || 
    question.answer.toLowerCase().includes(query.toLowerCase())
  );
};

export const getQuestionById = (id: string) => {
  const allQuestions = getAllQuestions();
  return allQuestions.find(question => question.id === id);
};