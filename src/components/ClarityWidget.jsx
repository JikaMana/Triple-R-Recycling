import React, { useEffect, useRef } from 'react';

const ClarityWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if the script has already been loaded to avoid duplicates
    if (
      !document.querySelector(
        'script[src="https://clarity.fm/assets/widget_loader.js"]'
      )
    ) {
      const script = document.createElement('script');
      script.src = 'https://clarity.fm/assets/widget_loader.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="z-50 w-full"
      ref={containerRef}>
      <iframe
        className="clarity-widget"
        data-c-id="583272"
        data-c-width=""
        src=""
        frameBorder="0"
        style={{ width: '500px' }}></iframe>
    </div>
  );
};

export default ClarityWidget;
