import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, MapPin, Moon, Sun } from 'lucide-react';
import Logo from '../ui/Logo';
import { useTheme } from '../../context/ThemeContext';
import { useLocation } from '../../context/LocationContext';
import { tamilNaduDistricts } from '../../data/districts';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  
  const { theme, toggleTheme } = useTheme();
  const { selectedDistrict, setSelectedDistrict } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.location-dropdown') && !target.closest('.location-button')) {
        setIsLocationDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-neutral-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
            <span className="text-xl font-bold text-primary-700 dark:text-primary-400">hoMediCare</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="relative location-button">
              <button
                onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                className="flex items-center text-sm text-neutral-700 dark:text-neutral-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
              >
                <MapPin className="w-4 h-4 mr-1" />
                <span>{selectedDistrict}</span>
              </button>
              
              {isLocationDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50 location-dropdown">
                  <div className="max-h-60 overflow-y-auto py-1">
                    {tamilNaduDistricts.map((district) => (
                      <button
                        key={district}
                        onClick={() => {
                          setSelectedDistrict(district);
                          setIsLocationDropdownOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          selectedDistrict === district
                            ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'
                            : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700'
                        }`}
                      >
                        {district}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <button
              onClick={toggleTheme}
              className="text-neutral-700 dark:text-neutral-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            
            <a
              href="https://wa.me/917502119022?text=Hello, I'm interested in hoMediCare services. Could you please provide more information?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Contact Us
            </a>
          </div>
          
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="text-neutral-700 dark:text-neutral-300"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-700 dark:text-neutral-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-neutral-900 shadow-lg"
        >
          <div className="container-custom py-4">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <button
                  onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                  className="flex items-center text-neutral-700 dark:text-neutral-300"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{selectedDistrict}</span>
                </button>
                
                {isLocationDropdownOpen && (
                  <div className="mt-2 bg-white dark:bg-neutral-800 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                    {tamilNaduDistricts.map((district) => (
                      <button
                        key={district}
                        onClick={() => {
                          setSelectedDistrict(district);
                          setIsLocationDropdownOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          selectedDistrict === district
                            ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'
                            : 'text-neutral-700 dark:text-neutral-300'
                        }`}
                      >
                        {district}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <a
                href="https://wa.me/917502119022?text=Hello, I'm interested in hoMediCare services. Could you please provide more information?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;