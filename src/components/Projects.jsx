'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Database, LineChart, Code, Zap } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "Data Manipulation System",
      description: "Advanced system for cleaning, transforming and preparing large datasets for analysis.",
      icon: <Database size={32} className="text-purple-600 dark:text-yellow-400" />,
      tags: ["Python", "Pandas", "ETL"],
    },
    {
      id: 2,
      title: "Automated Reporting",
      description: "Automated report generation with dynamic visualizations updated in real-time.",
      icon: <LineChart size={32} className="text-purple-600 dark:text-yellow-400" />,
      tags: ["Power BI", "SQL", "Automation"],
    },
    {
      id: 3,
      title: "Routine Analysis",
      description: "Optimization of routine data analysis processes with 80% reduction in processing time.",
      icon: <Zap size={32} className="text-purple-600 dark:text-yellow-400" />,
      tags: ["Python", "Automation", "Optimization"],
    },
    {
      id: 4,
      title: "Data Pipeline",
      description: "Robust data pipeline architecture for enterprise-level data processing.",
      icon: <Code size={32} className="text-purple-600 dark:text-yellow-400" />,
      tags: ["Airflow", "AWS", "Data Engineering"],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Selected projects showcasing my expertise in data manipulation, automated reporting and data analysis.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4">{project.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-purple-100 dark:bg-gray-700 text-purple-800 dark:text-yellow-400 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;