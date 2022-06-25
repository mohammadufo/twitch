import React from 'react';

const Hero = () => {
  return (
    <div id="hero" className="p-2 md:p-8">
      <div className="relative overflow-hidden w-full pt-[56.25%]">
        <iframe
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
          src="https://www.youtube.com/embed/r72GP1PIZa0"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Hero;
