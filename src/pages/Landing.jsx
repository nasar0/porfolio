import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

// Videos
import tfg from "../assets/tfg.webm";
import loopzxy from "../assets/loopzxy.webm";
import API from "../assets/API.webm";

function Landing() {
  // Habilidades organizadas en categorías
  const skills = {
    Backend: [
      "PHP", "Laravel", "Python (FastAPI, Django)", "Node.js/Express",
      "REST APIs", "JWT", "MySQL", "PostgreSQL", "MongoDB",
      "Optimización de consultas SQL", "Java", "Bash scripting", "Administración Linux"
    ],
    Frontend: [
      "React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap",
      "jQuery", "Angular (aprendiendo)", "Responsive Design"
    ],
    Herramientas: [
      "Docker (básico)", "Uvicorn", "Gunicorn", "Git/GitHub", "Scrum",
      "Linux Server", "CI/CD (nociones)"
    ],
    Automatización: [
      "Automatización con Python", "PowerShell scripting", "n8n", "Tester E2E",
      "Limpieza y procesamiento de datos"
    ],
    "Soft Skills": [
      "Aprendizaje rápido", "Documentación clara", "Trabajo en equipo",
      "Enfoque en buenas prácticas"
    ]
    // "Data Engineering & ML": [
    //   "Python (pandas, numpy, scikit-learn, matplotlib, seaborn, BeautifulSoup, scheduler, Pipelines ETL)", "Web Scraping", "Modelado predictivo (Regresión lineal, Ridge, Lasso)",
    //   "Validación cruzada", "AWS S3", "MongoDB Atlas", "SQL avanzado", "SQLAlchemy",
    //   "Fundamentos de Machine Learning", "IA generativa (nociones)"
    // ]
  };

  // Educación
  const education = [
    {
      title: "Grado Superior en Desarrollo de Aplicaciones Web (DAW)",
      description:
        "Formación completa en desarrollo web fullstack, incluyendo PHP, MySQL, React.js y buenas prácticas en programación, arquitectura de software y despliegue de aplicaciones web."
    },
    {
      title: "Grado Medio en Sistemas Microinformáticos y Redes (SMR)",
      description:
        "Formación en montaje, mantenimiento y administración de equipos informáticos y redes. Incluye instalación de sistemas operativos, configuración de hardware y software, diseño de redes LAN/WAN, seguridad básica y scripting en Bash para automatización de tareas."
    }
  ];
  
  // Experiencia laboral
  const trabajo = [
    {
      title: "Desarrollador Full Stack - Arminet SL",
      description:
        "Matrix es una plataforma SaaS fullstack para la gestión avanzada de servidores y ecosistemas web. Desarrollada con arquitectura modular y segura, integra API RESTful, workers asíncronos y un dashboard en tiempo real con métricas críticas, roles y automatizaciones vía Cloudflare API y Telegram."
    },
    {
      title: "Desarrollador Tester - Arminet SL",
      description:
        "Desarollo de tests E2E con Playwright para asegurar la calidad y funcionalidad de las webs que se crean. Implementación de pruebas automatizadas que simulan interacciones de usuario, validan flujos críticos y garantizan la estabilidad del sistema ante cambios y actualizaciones."
    }
  ];
  
  // Proyectos
  const projects = [
    {
      title: "API Pokémon con FastAPI",
      description:
        "Backend completo con FastAPI, incluyendo autenticación por email y JWT, endpoints para filtrar y consultar Pokémon, y documentación interactiva.",
      tech: ["Python", "FastAPI", "JSON", "JWT"],
      github: "https://github.com/nasar0/API",
      demo: "https://pokemon-n2ku.onrender.com/",
      video: API
    },
    {
      title: "E-commerce Full Stack",
      description:
        "Tienda online completa con backend en PHP/MySQL y frontend en React.js y Tailwind CSS. Incluye gestión de catálogo, usuarios, pedidos, carrito de compras y pasarela de pago.",
      tech: ["React", "PHP", "Tailwind CSS", "MySQL"],
      github: "https://github.com/nasar0/ecommerce-app",
      demo: "https://front-tfg-lqab.vercel.app/",
      video: tfg
    },
    {
      title: "Chat en Tiempo Real (Node.js + React)",
      description:
        "Aplicación de chat en tiempo real usando Node.js, Express y WebSockets, con frontend en React.js y Tailwind CSS.",
      tech: ["Node.js", "Express", "React", "Tailwind CSS", "WebSocket"],
      github: "https://github.com/nasar0/chat-app",
      demo: null,
      video: loopzxy
    }
  ];

  // Estado para controlar la pestaña activa
  const [activeTab, setActiveTab] = useState("education");
  
  // Animación título
  const [animatedTitle, setAnimatedTitle] = useState("");
  const fullTitle = "Hola, soy Nasaro";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullTitle.length) {
        setAnimatedTitle(fullTitle.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-850 to-gray-900 text-white p-6 md:p-8 relative overflow-hidden">
      {/* Elementos de fondo decorativos */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Header */}
      <header className="text-center py-12 md:py-24 relative z-10">
        <div className="inline-block mb-6 p-2 rounded-full bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-purple-500/30 animate-float shadow-lg shadow-purple-500/10">
          <div className="w-24 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full mx-auto flex items-center justify-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-bold border border-purple-500/30 shadow-inner">
            N
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          {animatedTitle}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-purple-200/80 animate-pulse-slow">
          Desarrollador Web Fullstack | Python, PHP, React, SQL
        </p>
        <Link
          to="/projects"
          className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center transform hover:scale-105"
        >
          Ver mis proyectos
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-y-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </header>

      {/* Sección Educación/Experiencia con pestañas */}
      <section className="my-16 md:my-24 relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Trayectoria
        </h2>
        
        {/* Selector de pestañas */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-1 border border-gray-700/30 inline-flex">
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                activeTab === "education" 
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Educación
            </button>
            <button
              onClick={() => setActiveTab("work")}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                activeTab === "work" 
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Experiencia
            </button>
          </div>
        </div>
        
        {/* Contenido de las pestañas */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {activeTab === "education" 
            ? education.map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-500/10 hover:-translate-y-1"
                >
                  <div className="mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-300">{item.title}</h3>
                  <p className="text-gray-300/90">{item.description}</p>
                </div>
              ))
            : trabajo.map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-500/10 hover:-translate-y-1"
                >
                  <div className="mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-300">{item.title}</h3>
                  <p className="text-gray-300/90">{item.description}</p>
                </div>
              ))
          }
        </div>
      </section>

      {/* Proyectos */}
      <section className="my-16 md:my-24 relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Proyectos destacados</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </section>
      {/* Habilidades - Sección mejorada */}

       <section className="my-16 md:my-24 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Habilidades Técnicas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, items], i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/40 shadow-md hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-purple-300 mb-5 flex items-center uppercase tracking-wide">
                <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-2"></span>
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-2 rounded-lg border border-purple-500/20 text-sm text-gray-300 bg-gradient-to-b from-gray-800/50 to-gray-900/50 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-blue-600/30 hover:text-white hover:scale-105 hover:shadow-md hover:shadow-purple-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Contacto */}
      <section id="contact" className="my-16 md:my-24 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Contacto</h2>
        <div className="max-w-md mx-auto space-y-4 text-gray-300/90">
          <p>
            <a href="mailto:nasrallah.elkaboussi@gmail.com" className="hover:text-purple-300 transition-colors flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              nasrallah.elkaboussi@gmail.com
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/nasaro/" className="hover:text-purple-300 transition-colors flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              linkedin.com/in/nasaro
            </a>
          </p>
          <p>
            <a href="https://github.com/nasar0" className="hover:text-purple-300 transition-colors flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              github.com/nasar0
            </a>
          </p>
        </div>
      </section>


    </div>
  );
}

export default Landing;
