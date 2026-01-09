
import React from 'react';

interface SkeletonLoaderProps {
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ className }) => {
  return (
    <div className={`bg-white/5 border border-white/5 animate-pulse rounded-2xl ${className}`}></div>
  );
};

export default SkeletonLoader;
