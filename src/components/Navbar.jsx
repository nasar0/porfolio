import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Efecto para detectar scroll y cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md py-3 shadow-xl border-b border-purple-900/30' : 'bg-gray-900/80 backdrop-blur-sm py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="font-bold text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 flex items-center"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mr-2 border border-purple-500/50 shadow-lg">
            <span className="text-white font-mono">N</span>
          </div>
          <span className="hidden sm:inline">Nasaro El Kaboussi</span>
          <span className="sm:hidden">Nasaro</span>
        </Link>

        {/* Menú desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link 
            to="/" 
            className={`relative group transition-all duration-300 px-3 py-2 rounded-lg ${location.pathname === '/' ? 'text-white bg-purple-700/20 border border-purple-500/30' : 'text-gray-300 hover:text-white hover:bg-gray-800/50'}`}
          >
            Inicio
            <span className={`absolute -bottom-1 left-3 right-3 h-0.5 bg-purple-500 transition-all duration-300 ${location.pathname === '/' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
          </Link>
          <Link 
            to="/projects" 
            className={`relative group transition-all duration-300 px-3 py-2 rounded-lg ${location.pathname === '/projects' ? 'text-white bg-purple-700/20 border border-purple-500/30' : 'text-gray-300 hover:text-white hover:bg-gray-800/50'}`}
          >
            Proyectos
            <span className={`absolute -bottom-1 left-3 right-3 h-0.5 bg-purple-500 transition-all duration-300 ${location.pathname === '/projects' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
          </Link>
          <Link 
            to="/contact" 
            className="relative group transition-all duration-300 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50"
          >
            Contacto
            <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-purple-500 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
          </Link>
          <div className="flex space-x-3 ml-4 pl-4 border-l border-gray-700">
            <a 
              href="https://github.com/nasar0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 p-2 hover:bg-gray-800/50 rounded-lg"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/nasaro/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 p-2 hover:bg-gray-800/50 rounded-lg"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Botón menú móvil */}
        <button 
          className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menú"
        >
          {!isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          )}
        </button>
      </div>

      {/* Menú móvil */}
      <div className={`md:hidden bg-gray-900/95 backdrop-blur-md transition-all duration-300 overflow-hidden border-t border-gray-800 ${isMenuOpen ? 'max-h-64 py-4' : 'max-h-0 py-0'}`}>
        <div className="container mx-auto px-4 flex flex-col space-y-3">
          <Link 
            to="/" 
            className={`py-3 px-4 rounded-lg transition-all duration-300 ${location.pathname === '/' ? 'text-white bg-purple-700/20 border border-purple-500/30' : 'text-gray-300 hover:text-white hover:bg-gray-800/50'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link 
            to="/projects" 
            className={`py-3 px-4 rounded-lg transition-all duration-300 ${location.pathname === '/projects' ? 'text-white bg-purple-700/20 border border-purple-500/30' : 'text-gray-300 hover:text-white hover:bg-gray-800/50'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Proyectos
          </Link>
          <a 
            href="#contact" 
            className="py-3 px-4 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </a>
          <div className="flex space-x-4 pt-3 px-4 border-t border-gray-800">
            <a 
              href="https://github.com/nasar0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 p-2"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/nasaro/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 p-2"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;