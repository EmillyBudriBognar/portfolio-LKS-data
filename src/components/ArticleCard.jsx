'use client';

import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';

const ArticleCard = ({ id, article, readMoreText }) => {
  return (
    <Link href={article.link} className="h-full block focus:outline-none">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          ease: [0.2, 0, 0, 1],
          delay: id * 0.05
        }}
        whileHover={{ 
          y: -4,
          transition: { 
            duration: 0.3,
            ease: [0.2, 0, 0, 1]
          } 
        }}
        className="relative bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-lg cursor-pointer h-full flex flex-col border border-gray-700 hover:border-gray-600 transition-all"
      >
        {/* Efeito de overlay sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        
        <div className="flex items-center mb-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <BookOpen size={20} className="text-yellow-400 mr-2" />
          </motion.div>
          <span className="text-sm text-gray-400">{article.source}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-gray-400 mb-4 line-clamp-3 flex-grow">
          {article.excerpt}
        </p>
        
        <div className="flex justify-between items-center mt-auto pt-4">
          <span className="text-sm text-gray-400">{article.date}</span>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-yellow-400 hover:underline font-medium flex items-center"
          >
            {readMoreText}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ArticleCard;