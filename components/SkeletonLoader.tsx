
import React from 'react';

interface SkeletonLoaderProps {
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ className }) => {
  return (
    <div className={`bg-slate-800 animate-pulse rounded ${className}`}></div>
  );
};

export default SkeletonLoader;
