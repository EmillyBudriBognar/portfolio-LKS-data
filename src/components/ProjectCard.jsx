'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectCard = ({
  id,
  title,
  description,
  icon,
  tags,
  href = '#',
}) => {
  return (
    <Link href={href} className="h-full block focus:outline-none">
      <motion.div
        // Animação inicial e de entrada
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.2, 0, 0, 1],
          delay: id * 0.05 // Atraso baseado no ID para efeito cascata
        }}
        // Animação ao passar o mouse
        whileHover={{
          y: -4,
          transition: {
            duration: 0.3,
            ease: [0.2, 0, 0, 1]
          }
        }}
        className="relative bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg cursor-pointer h-full flex flex-col border border-gray-700 hover:border-gray-600 transition-all"
      >
        {/* Efeito de overlay sutil para o hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl" />

        <motion.div
          // Animação do ícone ao passar o mouse
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mb-4 inline-block"
        >
          {icon}
        </motion.div>

        <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-400 mb-4 line-clamp-3 flex-grow">
          {description}
        </p>

        <div className="mt-auto pt-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.span
                key={`${tag}-${index}`}
                initial={{ opacity: 0.9 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="px-3 py-1 bg-gray-700 text-yellow-400 text-xs rounded-full whitespace-nowrap hover:bg-gray-600 transition-colors duration-200"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;