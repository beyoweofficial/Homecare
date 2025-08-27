import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, ChevronRight, Search } from 'lucide-react';
import { chatbotData, searchQuestions, getQuestionById, ChatQuestion } from '../data/chatbot';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hi there! I'm your hoMediCare virtual assistant. How can I help you today?", isUser: false }
  ]);
  const [inputText, setInputText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ChatQuestion[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Search functionality
  useEffect(() => {
    if (searchQuery.length > 2) {
      const results = searchQuestions(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSend = () => {
    if (inputText.trim() === '') return;
    
    // Add user message
    setMessages(prev => [...prev, { text: inputText, isUser: true }]);
    
    // Simulate thinking
    setTimeout(() => {
      // Check if input matches any known questions
      const matchingQuestions = searchQuestions(inputText);
      
      if (matchingQuestions.length > 0) {
        // Get the best match
        const bestMatch = matchingQuestions[0];
        setMessages(prev => [...prev, { text: bestMatch.answer, isUser: false }]);
      } else {
        // Default response
        setMessages(prev => [
          ...prev,
          { 
            text: "I'm not sure I understand that question. Could you try asking something else, or select from one of the categories below?", 
            isUser: false 
          }
        ]);
      }
    }, 1000);
    
    setInputText('');
  };

  const selectQuestion = (question: ChatQuestion) => {
    // Add user question
    setMessages(prev => [...prev, { text: question.question, isUser: true }]);
    
    // Add bot answer
    setTimeout(() => {
      setMessages(prev => [...prev, { text: question.answer, isUser: false }]);
    }, 500);
    
    // Reset search and category
    setSearchQuery('');
    setSelectedCategory('');
    setSearchResults([]);
  };

  const selectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-30 bg-primary-700 hover:bg-primary-800 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        aria-label="Toggle chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
      
      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-30 bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden border border-neutral-200 dark:border-neutral-700"
          >
            {/* Chat Header */}
            <div className="bg-primary-700 dark:bg-primary-800 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MessageCircle className="w-6 h-6 mr-2" />
                  <div>
                    <h3 className="font-semibold">hoMediCare Assistant</h3>
                    <p className="text-xs text-primary-200">Online 24/7</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-primary-600 p-1 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto p-4 bg-neutral-50 dark:bg-neutral-900">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${message.isUser ? 'flex justify-end' : 'flex justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-primary-700 text-white rounded-tr-none'
                        : 'bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 shadow-sm rounded-tl-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Categories or Search Results */}
            {(searchQuery === '' && selectedCategory === '') && (
              <div className="border-t border-neutral-200 dark:border-neutral-700 p-3 bg-white dark:bg-neutral-800">
                <h4 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
                  Select a category
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {chatbotData.map(category => (
                    <button
                      key={category.id}
                      onClick={() => selectCategory(category.id)}
                      className="text-left text-sm p-2 rounded bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Show questions for selected category */}
            {selectedCategory !== '' && (
              <div className="border-t border-neutral-200 dark:border-neutral-700 p-3 bg-white dark:bg-neutral-800">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    {chatbotData.find(c => c.id === selectedCategory)?.name}
                  </h4>
                  <button
                    onClick={() => setSelectedCategory('')}
                    className="text-xs text-primary-700 dark:text-primary-400"
                  >
                    Back
                  </button>
                </div>
                <div className="space-y-2">
                  {chatbotData
                    .find(c => c.id === selectedCategory)
                    ?.questions.map(q => (
                      <button
                        key={q.id}
                        onClick={() => selectQuestion(q)}
                        className="flex items-center w-full text-left text-sm p-2 rounded bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition"
                      >
                        <ChevronRight className="w-4 h-4 mr-1 flex-shrink-0 text-primary-700 dark:text-primary-400" />
                        <span>{q.question}</span>
                      </button>
                    ))}
                </div>
              </div>
            )}
            
            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="border-t border-neutral-200 dark:border-neutral-700 p-3 bg-white dark:bg-neutral-800">
                <h4 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
                  Search Results
                </h4>
                <div className="space-y-2">
                  {searchResults.map(q => (
                    <button
                      key={q.id}
                      onClick={() => selectQuestion(q)}
                      className="flex items-center w-full text-left text-sm p-2 rounded bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition"
                    >
                      <ChevronRight className="w-4 h-4 mr-1 flex-shrink-0 text-primary-700 dark:text-primary-400" />
                      <span>{q.question}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Chat Input */}
            <div className="p-3 border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
              <div className="flex items-center">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    value={searchQuery !== '' ? searchQuery : inputText}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSearchQuery(value);
                      setInputText(value);
                    }}
                    placeholder="Type your question..."
                    className="w-full py-2 pl-10 pr-4 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        if (searchResults.length > 0) {
                          selectQuestion(searchResults[0]);
                        } else {
                          handleSend();
                        }
                      }
                    }}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500 dark:text-neutral-400 w-5 h-5" />
                </div>
                <button
                  onClick={() => {
                    if (searchResults.length > 0) {
                      selectQuestion(searchResults[0]);
                    } else {
                      handleSend();
                    }
                  }}
                  disabled={inputText.trim() === '' && searchQuery.trim() === ''}
                  className={`ml-2 p-2 rounded-full ${
                    inputText.trim() === '' && searchQuery.trim() === ''
                      ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-400 dark:text-neutral-500'
                      : 'bg-primary-700 text-white hover:bg-primary-800'
                  }`}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;