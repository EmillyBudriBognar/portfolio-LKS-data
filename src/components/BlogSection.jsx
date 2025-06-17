'use client';

import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      title: "Data Analysis in Scientific Research",
      excerpt: "Exploring how data analysis techniques can enhance research quality in scientific publications.",
      link: "/blog/1",
      source: "SciELO - Brasil",
      date: "May 2023"
    },
    {
      id: 2,
      title: "Automating Academic Data Collection",
      excerpt: "Methods for automating data collection from academic sources to improve research efficiency.",
      link: "/blog/2",
      source: "SciELO - Brasil",
      date: "March 2023"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Insights and analysis on data science and engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <motion.div
              key={article.id}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center mb-4">
                <BookOpen size={20} className="text-purple-600 dark:text-yellow-400 mr-2" />
                <span className="text-sm text-gray-500 dark:text-gray-400">{article.source}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {article.excerpt}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">{article.date}</span>
                <Link
                  href={article.link}
                  className="text-purple-600 dark:text-yellow-400 hover:underline font-medium"
                >
                  Read more
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-purple-600 text-purple-600 dark:text-yellow-400 dark:border-yellow-400 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors font-medium"
          >
            View all articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;