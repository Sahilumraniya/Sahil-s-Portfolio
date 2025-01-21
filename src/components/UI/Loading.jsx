import React from 'react';

const Loading = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      {/* Animated Circle */}
      <div className="relative w-24 h-24 mb-6 animate-spin-slow sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full animate-ping"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-white opacity-80 rounded-full animate-ping animation-delay-200"></div>
        </div>
      </div>

      {/* Main Loading Text */}
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-transparent bg-clip-text animate-slideIn">
        Loading, please wait...
      </h1>

      {/* Additional Text with Subtle Animation */}
      <p className="text-white text-lg sm:text-xl md:text-2xl text-center opacity-0 animate-fadeIn animation-delay-400">
        We're preparing something amazing for you!
      </p>

      {/* Engaging Call-to-Action */}
      <p className="text-white mt-4 text-base sm:text-lg opacity-0 animate-fadeIn animation-delay-600">
        Sit tight, your experience is just about to begin.
      </p>

      {/* Animated Dots */}
      <div className="text-2xl sm:text-3xl mt-6 animate-pulse">
        <span className="opacity-0 animate-blink animation-delay-500">.</span>
        <span className="opacity-0 animate-blink animation-delay-600">.</span>
        <span className="opacity-0 animate-blink animation-delay-700">.</span>
      </div>
    </div>
  );
};

export default Loading;
