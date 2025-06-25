'use client';

import { motion } from 'framer-motion';
import { Sparkles, Rocket } from 'lucide-react';

const HighlightBadge = ({ children }) => {
  return (
    <motion.div
      className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-r from-yellow-500/15 via-blue-500/10 to-blue-500/15 backdrop-blur-sm rounded-full border border-white/10 shadow-lg shadow-yellow-500/10"
      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(234, 179, 8, 0.2)' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Sparkles className="text-yellow-400/90 mr-2" size={16} />
      <span className="text-sm font-medium text-foreground/90">{children}</span>
      <Rocket className="ml-2 text-blue-400/90" size={16} />
    </motion.div>
  );
};

export default HighlightBadge;