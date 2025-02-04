// LoadingAnimation.js
import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from './Loader.json'; // Path to your Lottie JSON file

const LoadingAnimation = () => {
  const defaultOptions = {
    loop: true, // Ensure it loops
    autoplay: true, // Start the animation automatically
    animationData: loadingAnimation, // Animation data from your Lottie file
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="loading-container">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default LoadingAnimation;
