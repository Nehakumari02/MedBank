'use client'
import React, { useState } from 'react';
import creation1 from '../../../../public/dashboard/creation1.png'
import creation2 from '../../../../public/dashboard/creation2.png'
import creation3 from '../../../../public/dashboard/creation3.png'
import Image from 'next/image';

const OrderCreationPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className=' bg-gray-100 pb-8 font-DM-Sans'>
      <div className="text-xl font-bold font-DM-Sans pl-[36px] pt-[30px] ">Order Creation</div>
      <div className="flex flex-col items-center justify-center pt-[82px]">


        <div className="flex items-center w-[478x] h-[107px]">
          <div className={` relative text-center ${currentStep >= 1 ? 'text-blue-500' : 'text-gray-400'}`}>
            <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full border-[1px] border-cyan-600 bg-cyan-400">
              <Image src={creation1} alt="Order Details" className="w-[22px] h-[28px] rounded-full" />
            </div>
            <div className=' absolute font-DM-Sans font-normal text-base text-nowrap '>Order Details</div>
          </div >
          <div className='flex flex-col gap-[3px]'>
            <div className="w-[140px] h-[1px] bg-gray-300"></div>
            <div className="w-[140px] h-[1px] bg-gray-300"></div>
          </div>
          <div className={` relative flex-1 text-center ${currentStep >= 2 ? 'text-blue-500' : 'text-gray-400'}`}>
            <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full border-[1px] border-yellow-400 bg-yellow-500">
              <Image src={creation2} alt="Upload Request Sheet" className="w-[18px] h-[26px] rounded-full" />
            </div>
            <div className='absolute font-DM-Sans font-normal text-base text-nowrap'>Upload Request Sheet</div>
          </div>
          <div className='flex flex-col gap-[3px]'>
            <div className="w-[140px] h-[1px] bg-gray-300"></div>
            <div className="w-[140px] h-[1px] bg-gray-300"></div>
          </div>
          <div className={`relative flex-1 text-center ${currentStep >= 3 ? 'text-blue-500' : 'text-gray-400'}`}>
            <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full border-[1px] border-green-500 bg-green-400">
              <Image src={creation3} alt="Review & Submit" className="w-[26px] h-[16px] rounded-full" />
            </div>
            <div className='absolute font-DM-Sans font-normal text-base text-nowrap'>Review & Submit</div>
          </div>
        </div>

        <div className=" bg-white p-8 rounded-lg shadow pt-[24px]">
          {currentStep === 1 && (
            <div className='w-[760px] h-[282px]'>
              <div className="text-2xl font-semibold mb-4 flex items-center justify-center">Step 1: Order Details</div>
              <label className="block mb-4">
                <span className="text-gray-700 text-lg">Order Title:</span>
                <input type="text" className="block w-full mt-1 p-2 border border-gray-300 rounded text-base font-normal" placeholder="Order Title" />
              </label>
              <div className="flex items-center justify-end gap-[10px] lg:gap-[12px] pt-[24px]">
                <button className="h-[40px] lg:h-[48px] w-[96px] lg:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] lg:text-[16px] text-center leading-[24px]" onClick={handleBack} disabled={currentStep === 1}>Back</button>
                <button className="h-[40px] lg:h-[48px] w-[96px] lg:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] lg:text-[16px] text-center leading-[24px]" onClick={handleNext}>Next</button>
                
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Step 2: Upload Request Sheet</h2>
              {/* Upload Request Sheet form goes here */}
              <div className="flex justify-between">
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded" onClick={handleBack}>Back</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleNext}>Next</button>
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Step 3: Review & Submit</h2>
              {/* Review & Submit form goes here */}
              <div className="flex justify-between">
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded" onClick={handleBack}>Back</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
              </div>
            </div>
          )}
        </div>


      </div>
    </div>
  );
};

export default OrderCreationPage;
