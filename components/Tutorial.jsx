import { useState, useEffect, useRef } from 'react';

const MultiStepTutorial = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [popupStyle, setPopupStyle] = useState({});
  const popupRef = useRef(null);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  useEffect(() => {
    const highlightedDiv = document.getElementById(`highlight-step-${step}`);
    if (highlightedDiv) {
      highlightedDiv.classList.add('highlight');

      // Position the pop-up
      const rect = highlightedDiv.getBoundingClientRect();
      setPopupStyle({
        top: `${rect.bottom + window.scrollY + 10}px`,
        left: `${rect.left + window.scrollX}px`,
        width: `${rect.width}px`, // Ensure the pop-up width matches the highlighted section
      });
    }
    return () => {
      const highlightedDiv = document.getElementById(`highlight-step-${step}`);
      if (highlightedDiv) {
        highlightedDiv.classList.remove('highlight');
      }
    };
  }, [step]);

  return (
    <div className="absolute inset-0 flex justify-center items-center">
      {/* Highlight Overlay */}
      <div className={`inset-0 bg-black bg-opacity-50 ${step === 1 ? 'highlight' : ''}`} />
      
      {/* Tutorial Pop-Up */}
      <div
        ref={popupRef}
        className="tutorial-popup"
        style={popupStyle}
      >
        <div className="mb-4">
          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Number of Order Pending.</h2>
            </div>
          )}
          {step === 2 && (
            <div className=''>
              <h2 className="text-xl font-semibold mb-4">Number of Orders that are In progress.</h2>
            
            </div>
          )}
          {step === 3 && (
            <div className='flex flex-col items-center justify-center pl-[30px] pt-3'>
              <h2 className="text-xl font-DM-Sans  font-semibold mb-4">Number of Orders that are successfully completed.</h2>
              
            </div>
          )}
        </div>

        <div className='flex items-center justify-center gap-[10px] md:gap-[12px] pb-[40px]'>
          {step > 0 && (
             <button  className='h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px] '
              onClick={prevStep}
            >
              Previous
            </button>
          )}
          {step < 3 ? (
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

