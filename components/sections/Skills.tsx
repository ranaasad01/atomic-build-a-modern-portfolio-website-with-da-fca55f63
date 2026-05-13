"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";

const categoryColors: Record<string, string> = {
  Frontend: "from-blue-500/10 to-indigo-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400",
  Backend: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  "DevOps & Tools": "from-orange-500/10 to-amber-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400",
  Testing: "from-purple-500/10 to-pink-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400",
};

const badgeColors: Record<string, string> = {
  Frontend: "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/20 hover:bg-blue-100 dark:hover:bg-blue-500/20",
  Backend: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/20 hover:bg-emerald-100 dark:hover:bg-emerald-500/20",
  "DevOps & Tools": "bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-500/20 hover:bg-orange-100 dark:hover:bg-orange-500/20",
  Testing: "bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-500/20 hover:bg-purple-100 dark:hover:bg-purple-500/20",
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="container-max" ref={ref}>
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-indigo-500 dark:text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Tech Stack
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
            Tools I{" "}
            <span className="gradient-text">Work With</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            A curated selection of technologies I use to build fast, scalable, and maintainable applications.
          </motion.p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((group) => {
            const colorClass = categoryColors[group.category] || "from-slate-500/10 to-slate-500/10 border-slate-500/20 text-slate-600 dark:text-slate-400";
            const badgeClass = badgeColors[group.category] || "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700";

            return (
              <motion.div
                key={group.category}
                variants={fadeUp}
                className="glass-card p-6 flex flex-col gap-4"
              >
                {/* Category header */}
                <div className={"inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r border text-xs font-semibold " + colorClass}>
                  {group.category}
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className={"px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-150 cursor-default " + badgeClass}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"
        />
      </div>
    </section>
  );
}
