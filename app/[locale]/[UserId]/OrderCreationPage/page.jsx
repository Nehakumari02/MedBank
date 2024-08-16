'use client'
import React, { useState } from 'react';
import creation1 from '../../../../public/dashboard/creation1.png';
import creation2 from '../../../../public/dashboard/creation2.png';
import creation3 from '../../../../public/dashboard/creation3.png';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';
import folder1 from "../../../../public/dashboard/folder.png"
import deleteIcon from "../../../../public/dashboard/deleteIcon.png"
import file1 from "../../../../public/dashboard/file.png"

const OrderCreationPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [file, setFile] = useState(uploadedFile);

  const handleDelete = () => {
    setFile(null); // Remove the file from state
  };

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
        <div className="flex justify-center items-center w-[305px] h-[24px] lg:w-[478px] lg:h-[60px] mb-[40px] lg:mb-[57px]">
          <div className="relative text-center text-[#333333]">
            <div className={`flex items-center justify-center  w-[24px] h-[24px] lg:w-[60px] lg:h-[60px] rounded-full border-[1px] ${currentStep >= 1 ? 'border-[#3E8DA7] bg-[#60B7CF]' : 'border-[#717171] bg-[#717171]'}`}>
              <Image src={creation1} alt="Order Details" className="w-[16px] h-[16px] lg:w-[22px] lg:h-[28px] rounded-full" />
            </div>
            <div className='absolute top-[40px] lg:top-[83px] left-[50%] translate-x-[-50%] font-DM-Sans font-normal text-[10px] lg:text-base text-nowrap'>Order Details</div>
          </div>
          <div className='flex flex-col gap-[3px]'>
            <div className="w-[76px] lg:w-[140px] h-[1px] bg-gray-300"></div>
            <div className="w-[76px] lg:w-[140px] h-[1px] bg-gray-300"></div>
          </div>
          <div className="relative text-center text-[#333333]">
            <div className={`flex items-center justify-center w-[24px] h-[24px] lg:w-[60px] lg:h-[60px] rounded-full border-[1px] ${currentStep >= 2 ? 'border-[#FDB25B] bg-[#FFC107]' : 'border-[#717171] bg-[#717171]'}`}>
              <Image src={creation2} alt="Upload Request Sheet" className="w-[16px] h-[16px] lg:w-[18px] lg:h-[26px] rounded-full" />
            </div>
            <div className='absolute top-[40px] lg:top-[83px] left-[50%] translate-x-[-50%] font-DM-Sans font-normal text-[10px] lg:text-base text-nowrap'>Upload Request Sheet</div>
          </div>
          <div className='flex flex-col gap-[3px]'>
            <div className="w-[76px] lg:w-[140px] h-[1px] bg-gray-300"></div>
            <div className="w-[76px] lg:w-[140px] h-[1px] bg-gray-300"></div>
          </div>
          <div className="relative text-center text-[#333333]">
            <div className={`flex items-center justify-center w-[24px] h-[24px]  lg:w-[60px] lg:h-[60px] rounded-full border-[1px] ${currentStep >= 3 ? ' border-[#03CF18] bg-[#51DE5F]' : 'border-[#717171] bg-[#717171]'}`}>
              <Image src={creation3} alt="Review & Submit" className="w-[13px] h-[8px] lg:w-[26px] lg:h-[16px] rounded-full" />
            </div>
            <div className='absolute top-[40px] lg:top-[83px] left-[50%] translate-x-[-50%] font-DM-Sans font-normal text-[10px] lg:text-base text-nowrap'>Review & Submit</div>
          </div>
        </div>

        <div className="bg-[#FFFFFF] p-8 rounded-lg shadow pt-[24px] border-[#E2E8F0] border-[1px] mb-12 mt-[12px] lg:mt-5">
          {currentStep === 1 && (
            <div className='max-w-[352px] lg:max-w-[760px]'>
              <div className="text-2xl font-semibold mb-4 flex items-center justify-center">Step 1: Order Details</div>
              <div className="flex flex-col items-start gap-[10px] lg:flex-row lg:items-center justify-center lg:gap-[24px]  pt-[12px] lg:pt-[41px]">
                <label htmlFor="name" className="font-DM-Sans font-normal text-[10px] lg:text-lg whitespace-nowrap">
                  Order Title :
                </label>
                <div className='group w-full h-[36px] lg:h-[50px] flex items-center justify-center flex-col'>
                  <div className={`w-full rounded-[7px] bg-gray-200 group-focus-within:gradient-primary`}>
                    <input className="w-full p-[10px] text-black lg:p-[12px] outline-none rounded-[6px] border-[2px] border-transparent font-DM-Sans font-normal text-[12px] lg:text-[16px] leading-[16px] lg:leading-[24px]"
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
              <div className="flex items-center justify-end gap-[10px] lg:gap-[12px] pt-[20px] lg:pt-[41px]">
                <button className="h-[40px] lg:h-[48px] w-[96px] lg:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] lg:text-[16px] text-center leading-[24px]" onClick={handleBack} disabled={currentStep === 1}>Back</button>
                <button className="h-[40px] lg:h-[48px] w-[96px] lg:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] lg:text-[16px] text-center leading-[24px]" onClick={handleNext}>Next</button>
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div className='max-w-[352px] lg:max-w-[760px]'>
              <div className="text-[16px] lg:text-[22px] font-medium text-center">Step 2: Upload Request Sheet</div>
              <div className="text-center text-[12px] lg:text-sm font-normal pt-[16px] lg:pt-[41px]">
                <p className="">
                  Note: Please use the request sheet designated by Medbank.{" "}
                  <a href="/path/to/download" className="text-blue-600 underline">
                    Download here
                  </a>
                </p>
              </div>

              <div className="container mx-auto px-4 max-w-[313px] lg:max-w-[490px] lg:h-[203px]">
                <div className="border-dashed border-[0.4px] solid border-[#0033DD] rounded-lg p-5 lg:p-10 mt-[12px] lg:mt-8 text-center">
                  <div {...getRootProps()} className="cursor-pointer">
                    <input {...getInputProps()} />
                    <Image src={folder1} alt="Upload Icon" className="mx-auto mb-4 w-[51px] h-[51px]" />
                    <p className="text-[10px] lg:text-sm font-normal">
                      Drag and drop or <span className="text-blue-600 underline">Choose file</span> to upload
                    </p>
                    {uploadedFile && (
                      <div className="mt-2">
                        <p className="text-sm md:text-base font-medium">File Uploaded</p>
                        {/* <p className="text-lg text-blue-600">{uploadedFile.name}</p> */}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-[10px] lg:gap-[12px] pt-[12px]">
                <button className="h-[40px] lg:h-[48px] w-[96px] lg:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] lg:text-[16px] text-center leading-[24px]" onClick={handleBack}>Back</button>
                <button className="h-[40px] lg:h-[48px] w-[96px] lg:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] lg:text-[16px] text-center leading-[24px]" onClick={handleNext} disabled={!uploadedFile}>Next</button>
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <div className="rounded-lg mx-auto max-w-[352px] lg:max-w-[760px]">
              <h2 className="text-[16px] lg:text-[22px] font-medium lg:[16px] lg:mb-6 text-center">
                Step 3: Review & Submit
              </h2>

              <div className="mb-[16px] lg:mb-6">
                <p className="font-medium text-xs lg:text-lg">Order Summary</p>
                <div className="flex items-center justify-center gap-[24px] pt-[12px]">
                  <label htmlFor="name" className="font-DM-Sans font-normal text-[10px] lg:text-lg whitespace-nowrap">
                    order detail :
                  </label>
                  <div className='group w-full h-[36px] lg:h-[50px] flex items-center justify-center flex-col'>
                    <div className={`w-full rounded-[7px] bg-gray-200 group-focus-within:gradient-primary`}>
                      <input className="w-full p-[10px] text-black lg:p-[12px] outline-none rounded-[6px] border-[2px] border-transparent font-DM-Sans font-normal text-[12px] lg:text-[16px] leading-[16px] lg:leading-[24px]"
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

                <p className="font-medium text-[10px] lg:text-lg pb-3 pt-6">Request Sheet</p>
                {uploadedFile ? (
                  <div className="flex items-center p-4 bg-white border-[0.5px] solid border-[#33333326] rounded-lg mt-2 max-w-[331px] lg:max-w-[300px] max-h-[52px] justify-between ">
                    <div className='flex gap-[8px]'>
                      <div className="flex items-center justify-center">
                        <Image src={file1} className='w-[18px] h-[24px]'></Image>
                      </div>
                      <div>
                        <a href={URL.createObjectURL(uploadedFile)}>
                          <p>{uploadedFile.name}</p>
                          <p className="text-sm text-[#717171]">{(uploadedFile.size / 1024 / 1024).toFixed(2)} Mb</p>
                        </a>
                      </div>
                    </div>
                    <div className="text-red-500 cursor-pointer">
                      <Image src={deleteIcon} className='h-[13px] w-[13px]'></Image>
                    </div>
                  </div>
                ) : (
                  <p className="text-[#717171] mt-2">No file uploaded</p>
                )}
              </div>

              <div className='flex items-center justify-end gap-[10px] lg:gap-[12px]'>
                <button className='h-[40px] lg:h-[48px] w-[96px] lg:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] lg:text-[16px] text-center leading-[24px] ' onClick={handleBack}>Edit</button>
                <button className='h-[40px] lg:h-[48px] w-[96px] lg:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] lg:text-[16px] text-center leading-[24px]' onClick={handleDelete}>Submit</button>
              </div>
            </div>
          )}



        </div>


      </div>
    </div>

  );
};

export default OrderCreationPage;


