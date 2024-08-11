'use client'
import React, { useEffect, useState } from "react";
import Tutorial from "../../../../components/Tutorial"
const Dummy = () => {
    const [showTutorial, setShowTutorial] = useState(true);
  
    useEffect(() => {
      const hasVisited = localStorage.getItem('hasVisited');
      if (!hasVisited) {
        setShowTutorial(true);
        localStorage.setItem('hasVisited', 'true');
      }
    }, []);
  
    const handleCloseTutorial = () => {
      setShowTutorial(false);
    };
  
    return (
      <div className="relative">
        {showTutorial && <Tutorial onClose={handleCloseTutorial} />}
        
        <div id="highlight-step-1" className="p-4 mb-4 border border-gray-300">
          <h2 className="text-xl">Section 1</h2>
          <p>This is the first section that will be highlighted.</p>
        </div>
        
        <div id="highlight-step-2" className="p-4 mb-4 border border-gray-300">
          <h2 className="text-xl">Section 2</h2>
          <p>This is the second section that will be highlighted.</p>
        </div>
        
        <div id="highlight-step-3" className="p-4 mb-4 border border-gray-300">
          <h2 className="text-xl">Section 3</h2>
          <p>This is the third section that will be highlighted.</p>
        </div>
        
        <h1 className="text-3xl font-bold">Home Page</h1>
      </div>
    );
  };
  
  export default Dummy;
  
  