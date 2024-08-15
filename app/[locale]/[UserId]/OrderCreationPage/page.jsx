'use client'
import React, { useState } from 'react';
import creation1 from '../../../../public/dashboard/creation1.png';
import creation2 from '../../../../public/dashboard/creation2.png';
import creation3 from '../../../../public/dashboard/creation3.png';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';
import folder1 from "../../../../public/dashboard/folder.png"

const OrderCreationPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setUploadedFile(acceptedFiles[0]); // Set the first file from the accepted files
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className='bg-[#F7F9FB] font-DM-Sans'>
      <div className="text-xl font-bold font-DM-Sans pl-[36px] pt-[30px]">Order Creation</div>
      <div className="flex flex-col items-center justify-center pt-[22px]">
        <div className="flex items-center w-[478px] h-[107px] pb-[32px]">
          <div className={`relative text-center ${currentStep >= 1 ? 'text-blue-500' : 'text-gray-400'}`}>
            <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full border-[1px] border-cyan-600 bg-cyan-400">
              <Image src={creation1} alt="Order Details" className="w-[22px] h-[28px] rounded-full" />
            </div>
            <div className='absolute font-DM-Sans font-normal text-base text-nowrap'>Order Details</div>
          </div>
          <div className='flex flex-col gap-[3px]'>
            <div className="w-[140px] h-[1px] bg-gray-300"></div>
            <div className="w-[140px] h-[1px] bg-gray-300"></div>
          </div>
          <div className={`relative flex-1 text-center ${currentStep >= 2 ? 'text-blue-500' : 'text-gray-400'}`}>
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

        <div className="bg-[#FFFFFF] p-8 rounded-lg shadow pt-[24px] border-[#E2E8F0] border-[1px] mb-12">
          {currentStep === 1 && (
            <div className='w-[760px] h-[282px]'>
              <div className="text-2xl font-semibold mb-4 flex items-center justify-center">Step 1: Order Details</div>
              <div className="flex items-center justify-center gap-[24px] pt-[41px]">
                <label htmlFor="name" className="font-DM-Sans font-normal text-[10px] md:text-lg whitespace-nowrap">
                  order detail :
                </label>
                <div className='group w-full h-[36px] md:h-[50px] flex items-center justify-center flex-col'>
                  <div className={`w-full rounded-[7px] bg-gray-200 group-focus-within:gradient-primary`}>
                    <input className="w-full p-[10px] text-black md:p-[12px] outline-none rounded-[6px] border-[2px] border-transparent font-DM-Sans font-normal text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]"
                      placeholder=""
                      //value={name}
                      //onChange={(e) => setName(e.target.value)}
                      style={{ backgroundColor: "white", backgroundClip: "padding-box" }}
                      type="text"
                      name="name"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-[10px] lg:gap-[12px] pt-[41px]">
                <button className="h-[40px] lg:h-[48px] w-[96px] lg:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] lg:text-[16px] text-center leading-[24px]" onClick={handleBack} disabled={currentStep === 1}>Back</button>
                <button className="h-[40px] lg:h-[48px] w-[96px] lg:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] lg:text-[16px] text-center leading-[24px]" onClick={handleNext}>Next</button>
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div className='w-[760px] h-[390px]'>
              <div className="text-[22px] font-medium text-center">Step 2: Upload Request Sheet</div>
              <div className="text-center text-sm font-normal pt-[41px]">
                <p className="">
                  Note: Please use the request sheet designated by Medbank.{" "}
                  <a href="/path/to/download" className="text-blue-600 underline">
                    Download here
                  </a>
                </p>
              </div>

              <div className="container mx-auto px-4 w-[490px] h-[203px]">
                <div className="border-dashed border-[0.4px] solid border-[#0033DD] rounded-lg p-10 mt-8 text-center">
                  <div {...getRootProps()} className="cursor-pointer">
                    <input {...getInputProps()} />
                    <Image src={folder1} alt="Upload Icon" className="mx-auto mb-4 w-[51px] h-[51px]" />
                    <p className="text-sm font-normal">
                      Drag and drop or <span className="text-blue-600 underline">Choose file</span> to upload
                    </p>
                  </div>
                </div>
              </div>
              
              {uploadedFile && (
                <div className="text-center mt-[2px]">
                  <p className="text-base font-medium">File Uploaded</p>
                  {/* <p className="text-lg text-blue-600">{uploadedFile.name}</p> */}
                </div>
              )}

              <div className="flex items-center justify-end gap-[10px] lg:gap-[12px]">
                <button className="h-[40px] lg:h-[48px] w-[96px] lg:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] lg:text-[16px] text-center leading-[24px]" onClick={handleBack}>Back</button>
                <button className="h-[40px] lg:h-[48px] w-[96px] lg:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] lg:text-[16px] text-center leading-[24px]" onClick={handleNext} disabled={!uploadedFile}>Next</button>
              </div>
            </div>
          )}
{currentStep === 3 && (
  <div className="border border-blue-500 p-6 rounded-lg max-w-2xl mx-auto">
    <h2 className="text-2xl font-semibold mb-6 text-center">
      Step 3: Review & Submit
    </h2>

    <div className="mb-6">
      <p className="font-medium text-lg">Order Summary</p>
      <div className="mb-4">
        <p className="font-medium">Order Title:</p>
        <p className="text-gray-700">Genomic Sequence</p>
      </div>
      
      <p className="font-medium text-lg">Request Sheet</p>
      {uploadedFile ? (
        <div className="flex items-center p-4 bg-gray-100 rounded-lg mt-2">
          <div className="text-green-500 mr-4">📄</div>
          <div>
            <p>{uploadedFile.name}</p>
            <p className="text-sm text-gray-500">{(uploadedFile.size / 1024 / 1024).toFixed(2)} Mb</p>
          </div>
          <a
            href={URL.createObjectURL(uploadedFile)}
            download={uploadedFile.name}
            className="text-blue-500 underline ml-auto mr-4"
          >
            Download
          </a>
          <div className="text-red-500 cursor-pointer">🗑️</div>
        </div>
      ) : (
        <p className="text-gray-500 mt-2">No file uploaded</p>
      )}
    </div>

    <div className="flex justify-end space-x-4 mt-8">
      <button
        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
        onClick={handleBack}
      >
        Edit
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </div>
  </div>
)}



        </div>


      </div>
    </div>

  );
};

export default OrderCreationPage;


