import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import tfg from '../assets/tfg.webm';
import loopzxy from '../assets/loopzxy.webm';
import API from '../assets/API.webm';
function Landing() {
  // Array de habilidades
  const skills = [
    "Python", "FastAPI", "Node.js", "React", "Tailwind CSS",
    "PostgreSQL", "MySQL", "JavaScript", "HTML5", "CSS3", "Git"
  ];

  // Array de educación
  const education = [
    {
      title: "Formación en Desarrollo de Aplicaciones Web (DAW)",
      description: "Formación completa en desarrollo web fullstack con tecnologías modernas y mejores prácticas."
    },
    {
      title: "Bootcamp y proyectos personales",
      description: "Especialización en Python, Node.js y React a través de bootcamps intensivos y desarrollo de proyectos personales."
    }
  ];

  // Array de proyectos
  const projects = [
    {
      title: "API Pokémon con FastAPI",
      description: "Backend con FastAPI, autenticación por email y JWT, endpoints para filtrar y consultar Pokémon. Incluye documentación. /help",
      tech: ["Python", "FastAPI", "JSON" , "JWT"],
      github: "https://github.com/nasar0/API",
      demo: "https://pokemon-n2ku.onrender.com/",
      video: API
    },
    {
      title: "E-commerce con React y Node.js",
      description: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pago y panel de administración.",
      tech: ["React", "PHP", "Tailwind CSS", "MySQL"],
      github: "https://github.com/nasar0/ecommerce-app",
      demo: "https://front-tfg-lqab.vercel.app/",
      video: tfg
    },
    {
      title: "Chat en tiempo real Node + React",
      description: "Chat con Node.js, Express y React, usando WebSockets para mensajería instantánea. Interfaz moderna con Tailwind CSS y funcionalidades en tiempo real.",
      tech: ["Node.js", "Express", "React", "Tailwind CSS", "WebSocket"],
      github: "https://github.com/nasar0/chat-app",
      demo: null,
      video: loopzxy
    }
  ];

  // Estado para la animación del título
  const [animatedTitle, setAnimatedTitle] = useState("");
  const fullTitle = "Hola, soy Nasaro";

  // Efecto para animación de escritura del título
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullTitle.length) {
        setAnimatedTitle(fullTitle.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      {/* Header con animaciones */}
      <header className="text-center py-12 md:py-24">
        <div className="inline-block mb-6 p-3 rounded-full bg-purple-900/20 border border-purple-500/30 animate-float">
          <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto flex items-center justify-center text-3xl text-purple-500 font-bold border border-purple-500/50">
            N
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
          {animatedTitle}<span className="animate-pulse">|</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-purple-200 animate-pulse-slow">
          Junior Fullstack Developer | Python, FastAPI, Node, React
        </p>
        <Link
          to="/projects"
          className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded-full font-medium purple-glow hover:from-purple-700 hover:to-purple-900 transition-all duration-300 inline-flex items-center transform hover:scale-105"
        >
          Ver mis proyectos
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </Link>
      </header>

      {/* Educación */}
      <section className="my-16 md:my-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block section-title">
          Educación
          <span className="absolute left-0 -bottom-2 h-1 w-12 bg-purple-500 rounded-full"></span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 shadow-lg transition-all duration-300 hover:border-purple-500 hover:shadow-purple-500/20 hover:transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-400">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Habilidades con animaciones */}
      <section className="my-16 md:my-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block section-title">
          Habilidades Técnicas
          <span className="absolute left-0 -bottom-2 h-1 w-12 bg-purple-500 rounded-full"></span>
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full border border-purple-500 text-sm transition-all duration-300 bg-gray-800/50 hover:bg-purple-500 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Proyectos destacados */}
      <section className="my-16 md:my-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block section-title">
          Proyectos destacados
          <span className="absolute left-0 -bottom-2 h-1 w-12 bg-purple-500 rounded-full"></span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              demo={project.demo}
              video={project.video}
            />
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="my-16 md:my-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block section-title">
          Contacto
          <span className="absolute left-0 -bottom-2 h-1 w-12 bg-purple-500 rounded-full"></span>
        </h2>
        <div className="max-w-md mx-auto space-y-4 text-gray-300">
          <p className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a href="mailto:nasrallah.elkaboussi@gmail.com" className="hover:text-purple-300 transition-colors duration-300">
              nasrallah.elkaboussi@gmail.com
            </a>
          </p>
          <p className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            <a href="https://www.linkedin.com/in/nasaro/" className="hover:text-purple-300 transition-colors duration-300">
              linkedin.com/in/nasaro
            </a>
          </p>
          <p className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            <a href="https://github.com/nasar0" className="hover:text-purple-300 transition-colors duration-300">
              github.com/nasar0
            </a>
          </p>
        </div>
      </section>

      <footer className="text-center py-8 text-gray-500 text-sm border-t border-gray-700 mt-12">
        <p>© 2025 Nasaro. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Landing;