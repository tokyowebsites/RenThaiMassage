import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'ホーム', href: '#home' },
    { name: 'メニュー', href: '#services' },
    { name: 'ご予約', href: '#booking' },
    { name: 'お知らせ', href: '#promotions' },
    { name: 'アクセス', href: '#location' },
  ];

  const scrollToSection = (href: string) => {
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#home')}
              className={`text-2xl md:text-3xl transition-colors duration-300 ${
                isScrolled ? 'text-[#4A4543]' : 'text-[#4A4543]'
              }`}
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, letterSpacing: '0.02em' }}
            >
              Ren Thai Massage
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`transition-colors duration-300 hover:text-[#C4B5A7] ${
                    isScrolled ? 'text-[#4A4543]' : 'text-[#4A4543]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a
                href="tel:070-1614-1177"
                className="px-6 py-2 bg-[#4A4543] text-white rounded-full hover:bg-[#6B6562] transition-colors duration-300"
              >
                お電話
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#4A4543]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-[#C4B5A7]"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left py-2 text-[#4A4543] hover:text-[#C4B5A7] transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                ))}
                <a
                  href="tel:070-1614-1177"
                  className="block w-full text-center px-6 py-3 bg-[#4A4543] text-white rounded-full hover:bg-[#6B6562] transition-colors duration-300"
                >
                  お電話
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}