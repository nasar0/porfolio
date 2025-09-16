import React from 'react'
import ReactPlayer from 'react-player'
function ProjectCard({ title, description, tech, github, demo, video, img = null , videoyt = null}) {
  return (
    <div className="border border-purple-500/30 p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 bg-gradient-to-br from-gray-900 to-gray-800 ">
      <h3 className="text-2xl font-bold mb-3 text-purple-400">{title}</h3>
      <p className="mb-4 text-gray-300">{description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span key={i} className="bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mb-4">
        {github && (
          <a 
            href={github} 
            className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        )}
        {demo && (
          <a 
            href={demo} 
            className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
            Demo
          </a>
        )}
      </div>
      {video ? (
        <video
          src={video}
          controls
          className="mt-2 w-full rounded-lg border border-purple-500/20"
        />
      ) : videoyt ? (
        <div className="mt-2 w-full rounded-lg border border-purple-500/20 overflow-hidden aspect-video">
          <iframe
            src={videoyt.replace("youtu.be/", "www.youtube.com/embed/")}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      ) : img ? (
        <img
          src={img}
          alt={title}
          className="mt-2 w-full rounded-lg border border-purple-500/20"
        />
      ) : null}
    </div>
  );
}

export default ProjectCard
