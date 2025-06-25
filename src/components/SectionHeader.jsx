'use client';

import { motion } from 'framer-motion';

export const SectionHeader = ({
  title,
  subtitle,
  inView,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`text-center mb-16 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionHeader;