import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative glass-card rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-500/30">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent opacity-80 z-10" />
      
      {/* Image Background */}
      <div className="h-48 overflow-hidden bg-slate-900">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ease-out filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100"
        />
      </div>

      <div className="relative z-20 p-6 flex flex-col h-[calc(100%-12rem)]">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-bold tracking-wider text-amber-500 uppercase px-2 py-1 bg-amber-500/10 rounded-md border border-amber-500/20">
            {project.category}
          </span>
          {project.featured && (
             <span className="flex h-2 w-2 relative">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
             </span>
          )}
        </div>

        <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 3).map((tech, i) => (
              <span key={i} className="text-xs text-slate-500 font-mono bg-black/30 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-xs text-slate-500 font-mono bg-black/30 px-2 py-1 rounded">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>

          <div className="flex gap-3">
            <a 
              href={project.demoUrl || '#'}
              target="_blank"
              rel="noopener noreferrer" 
              className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-sm py-2 rounded-lg transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-amber-500/20"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
            <a 
              href={project.githubUrl || '#'}
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 px-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm py-2 rounded-lg transition-all hover:bg-white/20"
              title="View Source Code"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
