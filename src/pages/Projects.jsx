import React from 'react';
import ProjectCard from '../components/ProjectCard';
import tfg from '../assets/tfg.webm';
import loopzxy from '../assets/loopzxy.webm';
import API from '../assets/API.webm';

function Projects() {
  const projects = [
    {
      title: "API Pokémon con FastAPI",
      description: "Backend con FastAPI, autenticación por email y JWT, endpoints para filtrar y consultar Pokémon. Incluye documentación interactiva con Swagger UI.",
      tech: ["Python", "FastAPI", "PostgreSQL", "Swagger", "JWT"],
      github: "https://github.com/nasar0/API",
      demo: "https://pokemon-n2ku.onrender.com/",
      video: API
    },
     {
      title: "E-commerce con React y Node.js",
      description: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pago y panel de administración.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      {/* Header con animación */}
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
          Mis Proyectos
        </h1>
        <p className="text-xl text-purple-200 max-w-2xl mx-auto">
          Una colección de mis trabajos más recientes y destacados. Cada proyecto representa diferentes habilidades y tecnologías que domino.
        </p>
      </div>

      {/* Grid de proyectos */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* Call to Action al final */}
      <div className="text-center py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">¿Te interesa mi trabajo?</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Siempre estoy abierto a nuevos desafíos y oportunidades de colaboración.
          No dudes en contactarme si tienes un proyecto en mente.
        </p>
        <a 
          href="/contact" 
          className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded-full font-medium purple-glow hover:from-purple-700 hover:to-purple-900 transition-all duration-300 inline-flex items-center transform hover:scale-105"
        >
          Contactar ahora
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Projects;