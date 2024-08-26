import { useState, useEffect, useRef } from 'react';
const ProgressCircles = ({ step, totalSteps }) => {
  return (
    <div className="flex gap-2 mb-4 mt-6">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full border-0.25 solid ${index < step ? 'bg-[#A8A6A6BF] border-[#33333340]' : 'bg-[#A8A6A640] border-[#33333340]'}`}
        />
      ))}
    </div>
  );
};


const MultiStepTutorial = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [popupStyle, setPopupStyle] = useState({});
  const popupRef = useRef(null);
  const totalSteps = 5;

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  useEffect(() => {
    const highlightedDiv = document.getElementById(`highlight-step-${step}`);
    if (highlightedDiv) {
      highlightedDiv.classList.add('highlight');

      // Position the pop-up
      const rect = highlightedDiv.getBoundingClientRect();
      const width = step === 1 ? '314px' : (step === 2 && window.innerWidth < 768 ? '100px' : '314px');

    // Calculate center position for step 1
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const popupWidth = parseInt(width); // Convert width to number
    const popupHeight = step === 1 ? 100 : rect.height; 
    
    // Set the style conditionally based on the step
    setPopupStyle({
      ...(step === 1 
        ? { 
            top: `calc(50% - ${popupHeight / 2}px)`, // Center vertically in the viewport
            left: `calc(50% - ${popupWidth / 2}px)`, // Center horizontally in the viewport
            width // Set width for step 1
          }
        : step === 2 
          ? { 
              top: `${rect.bottom + 10}px`, 
              right: `${window.innerWidth - rect.right}px`, 
              width // Adjust right and width for step 2
            }
          : { 
              top: `${rect.bottom + 10}px`, 
              left: `${rect.left}px`, 
              width: `${rect.width}px` // Set left for other steps
            }
      ),
      },[step]);
    }
    return () => {
      const highlightedDiv = document.getElementById(`highlight-step-${step}`);
      if (highlightedDiv) {
        highlightedDiv.classList.remove('highlight');
      }
    };
  }, [step]);

  return (
    <div className=" flex justify-center items-center">
      {/* Highlight Overlay */}
      <div className={` bg-black bg-opacity-50 ${step === 1 ? 'highlight' : ''}`} />
      
      {/* Tutorial Pop-Up */}
      <div
        ref={popupRef}
        className="tutorial-popup"
        style={popupStyle}
      >
        <div className="mb-4 text-center">
        {step === 1 && (
            <div className=''>
              <h2 className="text-xl font-semibold mb-4">Welcome to Medbank </h2>
            </div>
          )}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-4 mr-5">Click on the button to create a new order.</h2>
            </div>
          )}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Number of Order Pending.</h2>
            </div>
          )}
          {step === 4 && (
            <div className=''>
              <h2 className="text-xl font-semibold mb-4">Number of Orders that are In progress.</h2>
            
            </div>
          )}
          {step === 5 && (
            <div className='flex flex-col items-center justify-center pl-[30px] pt-3'>
              <h2 className="text-xl font-DM-Sans  font-semibold mb-4">Number of Orders that are successfully completed.</h2>
              
            </div>
          )}
        </div>

        <div className="flex items-center justify-center mb-4">
          <ProgressCircles step={step} totalSteps={totalSteps} />
        </div>

        <div className='flex items-center justify-center gap-[10px] md:gap-[12px] pb-[40px]'>
          {step > 0 && (
             <button disabled={step==1}  className='h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px] '
              onClick={prevStep}
            >
              Back
            </button>
          )}
          {step < 5 ? (
            <button  className='h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px] '
              onClick={nextStep}
            >
              Next
            </button>
          ) : (
          <button  className='h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px] '
              onClick={onClose}
            >
              Finish
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepTutorial;
