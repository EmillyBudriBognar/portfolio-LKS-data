'use client';

const Logo = ({ light = false }) => {
  return (
    <div className="flex items-center">
      <div className={`w-10 h-10 rounded-lg ${light ? 'bg-white' : 'bg-purple-600 dark:bg-yellow-400'} flex items-center justify-center mr-3`}>
        <span className={`${light ? 'text-purple-600' : 'text-white'} font-bold text-xl`}>LKS</span>
      </div>
      <span className={`text-xl font-bold ${light ? 'text-white' : 'text-gray-900 dark:text-white'}`}>LKS Data</span>
    </div>
  );
};

export default Logo;