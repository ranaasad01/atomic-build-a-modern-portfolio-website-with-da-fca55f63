"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 as Github, ArrowRight } from 'lucide-react';
import Link from "next/link";

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4 }}
      className="group glass-card overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-glow"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-900/50 to-slate-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-full bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-semibold">
              Featured
            </span>
          </div>
        )}

        {/* Quick links overlay */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
            onClick={(e) => e.stopPropagation()}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-black/60 backdrop-blur-sm text-white hover:bg-indigo-600 transition-colors duration-200"
          >
            <Github size={14} />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View live site"
            onClick={(e) => e.stopPropagation()}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-black/60 backdrop-blur-sm text-white hover:bg-indigo-600 transition-colors duration-200"
          >
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-medium border border-indigo-100 dark:border-indigo-500/20"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-medium">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700/50">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              <Github size={13} />
              Code
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              <ExternalLink size={13} />
              Live
            </a>
          </div>
          <Link
            href={"/projects/" + project.slug}
            className="flex items-center gap-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:gap-2 transition-all duration-200"
          >
            Details
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
