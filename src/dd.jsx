// App.js or any component
import React, { useState, useEffect } from 'react';
import LoadingAnimation from './Loader';

const Appp = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or some async task
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Loading for 3 seconds
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div>
          {/* Your main content */}
          <h1>Welcome to the website!</h1>
        </div>
      )}
    </div>
  );
};

export default Appp;
