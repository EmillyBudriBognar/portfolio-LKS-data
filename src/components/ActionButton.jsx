'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ActionButton = ({ 
  children, 
  href, 
  variant = 'primary',
  icon,
  className = '',
  asButton = false,
  type = 'button',
  disabled = false,
  onClick,
  ...props 
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-gray-900 shadow-lg shadow-amber-500/30',
    secondary: 'border border-blue-400/20 hover:border-blue-400/30 bg-blue-500/5 hover:bg-blue-500/10 text-blue-100 backdrop-blur-sm',
  };

  const buttonClass = `
    px-6 py-3 md:px-8 md:py-3 
    rounded-lg font-medium 
    transition-all duration-200 
    flex items-center justify-center gap-2 
    ${variants[variant]} 
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} 
    ${className}
  `;

  const MotionButton = motion.button;
  const MotionLink = motion(Link);

  const motionProps = !disabled ? {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 300, damping: 15 }
  } : {};

  return asButton ? (
    <MotionButton
      type={type}
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <h6>{children}</h6>
    </MotionButton>
  ) : (
    <MotionLink
      href={href || '#'}
      className={buttonClass}
      {...motionProps}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <h6>{children}</h6>
    </MotionLink>
  );
};

export default ActionButton;
