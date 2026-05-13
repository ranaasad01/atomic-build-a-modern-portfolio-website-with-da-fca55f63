"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-max" ref={ref}>
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-indigo-500 dark:text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Portfolio
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
            Things I&apos;ve{" "}
            <span className="gradient-text">Built</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            A selection of projects I&apos;ve worked on — from SaaS platforms to open-source tools and everything in between.
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* Show more / less */}
        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-indigo-500/30 hover:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 font-semibold text-sm transition-all duration-200"
            >
              {showAll ? "Show Less" : "View All Projects"}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
