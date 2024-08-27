"use client"
import { useOrder } from '@/contexts/OrderContext'
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from 'react'
import { useSession } from "next-auth/react";
import FolderIcon from "../../../public/dashboard/folder.png"
import Image from 'next/image';
import Logo from '@/public/Images/Home/logo.png'

const NewOrderBox = () => {
  const router = useRouter();
  const path = usePathname().split("/")[3];
  const pathToRedirect = usePathname().split("/").slice(2).join("/");
  const language = usePathname().split("/")[1];
  const { data: session } = useSession();
  const orderPopUpBoxRef = useRef(null);
  const [orderPopVisible, setOrderPopVisible] = useState(false);
  const [activePopup, setActivePopup] = useState('');

  const {
    orderTitle, setOrderTitle,
    requestSheet, setRequestSheet,
    costEstimate, setCostEstimate,
    formalRequest, setFormalRequest,
    sampleShipping, setSampleShipping,
    qualityCheck, setQualityCheck,
    libraryPrep, setLibraryPrep,
    analysisProgress, setAnalysisProgress,
    analysisDone, setAnalysisDone,
    analysisRawData, setAnalysisRawData,
    analysisSpecification, setAnalysisSpecification,
    invoice, setInvoice,
    payment, setPayment,
  } = useOrder();

  const handleOrderCreation = () => {
    router.push(`/${language}/${session.user.id}/NewOrder/OrderCreationPage`)
  }
  const handleCostEstimateClick = () => {
    setOrderPopVisible(true);
    setActivePopup('costEstimate');
  };

  const handleFormalRequestClick = () => {
    setOrderPopVisible(true);
    setActivePopup('formalRequest');
  };

  const handleSampleShippingClick = () => {
    setOrderPopVisible(true);
    setActivePopup('sampleShipping');
  };

  const handleQualityCheckClick = () => {
    setOrderPopVisible(true);
    setActivePopup('qualityCheck');
  };

  const handleLibraryPrepClick = () => {
    setOrderPopVisible(true);
    setActivePopup('libraryPrep');
  };

  const handleAnalysisProgressClick = () => {
    setOrderPopVisible(true);
    setActivePopup('analysisProgress');
  };

  const handleAnalysisDoneClick = () => {
    setOrderPopVisible(true);
    setActivePopup('analysisDone');
  };

  const handleAnalysisRawDataClick = () => {
    setOrderPopVisible(true);
    setActivePopup('analysisRawData');
  };

  const handleAnalysisSpecificationClick = () => {
    setOrderPopVisible(true);
    setActivePopup('analysisSpecification');
  };

  const handleInvoiceClick = () => {
    setOrderPopVisible(true);
    setActivePopup('invoice');
  };

  const handlePaymentClick = () => {
    setOrderPopVisible(true);
    setActivePopup('payment');
  };

  const handleConfirmCostEstimate = () => {
    setOrderPopVisible(false);
    setCostEstimate((prevState) => ({
      ...prevState,
      status: "isCompleted",
    }));
    setFormalRequest((prevState) => ({
      ...prevState,
      status: "inProgress",
    }));
  }

  const handleConfirmFormalRequest = () => {
    setFormalRequest((prevState) => ({
      ...prevState,
      status: "isCompleted",
    }));
    setOrderPopVisible(false)
    // setActivePopup('sampleShippingConfirmation');
  }

  const handleConfirmSampleShipping = () => {
    console.log(sampleShipping.status)
    console.log("click on ok from sample shipping")
    setOrderPopVisible(false);
    setActivePopup('');
    setSampleShipping((prevState) => ({
      ...prevState,
      status: "inProgress",
    }));
  }

  const handleSampleShipping = () => {
    setOrderPopVisible(false);
    setSampleShipping((prevState) => ({
      ...prevState,
      status: "isCompleted",
    }));
  }



  const handleClickOutside = (event) => {
    if (orderPopUpBoxRef.current && !orderPopUpBoxRef.current.contains(event.target)) {
      setOrderPopVisible(false);
    }
  };

  useEffect(() => {
    if (sampleShipping.status == "isPending" && formalRequest.status == "isCompleted") {
      setActivePopup("sampleShippingConfirmation");
      setOrderPopVisible(true);
    }
  }, [])

  useEffect(() => {
    // Attach event listener to document
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className='text-[#333333] mb-[14px] flex flex-col justify-between h-full'>
        {orderPopVisible && (
          <div className='fixed top-0 left-0 backdrop-blur-[1px] flex items-center justify-center w-[100vw] h-[100vh] bg-[#00000066]'>
            <div ref={orderPopUpBoxRef}>
              {activePopup === 'requestSheet' && (
                <div className='md:h-[287px] md:w-[658px] flex items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  Request Sheet Popup Placeholder
                </div>
              )}
              {activePopup === 'costEstimate' && (
                <div className='md:h-[435px] md:w-[760px] md:py-[26px] flex flex-col gap-[24px] items-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <div className='md:h-[50px] flex items-center justify-center w-full text-center border-b-[1px] border-dotted border-[#33333340]'>
                    <span className='font-DM-Sans text-center font-medium md:text-[22px] md:leading-[24px] text-[#333333]'>Download Cost Estimation</span>
                    1               </div>
                  <div className='md:w-[490px] md:h-[203px] flex items-center justify-center border-[0.4px] border-[#0033DD] border-dashed rounded-[6px]'>
                    <div className='flex flex-col items-center justify-center gap-[14px]'>
                      <Image className='md:w-[51px] md:h-[51px]' src={FolderIcon} alt="File"></Image>
                      <div className='font-DM-Sans font-normal md:text-[14px] md:leading-[18px] text-[#606060] text-center'>
                        <span>RequestSheet.pdf</span><br />
                        <span>1.2MB</span>
                      </div>
                    </div>
                  </div>
                  <div className='md:w-[490px] flex items-center justify-end gap-[12px]'>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={() => { setOrderPopVisible(false) }}>Back</button>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={handleConfirmCostEstimate}>Download</button>
                  </div>
                </div>
              )}
              {activePopup === 'formalRequest' && (
                <div className='md:h-[287px] md:w-[658px] md:p-[10px] flex flex-col gap-[24px] items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <div className='flex flex-col gap-[24px]'>
                    <span className='font-DM-Sans text-center font-bold md:text-[32px] md:leading-[40px] text-[#333333]'>Confirmation Message</span>
                    <span className='font-DM-Sans text-center font-normal md:text-[20px] md:leading-[34px] text-[#333333]'>Please confirm the Formal Request.</span>
                  </div>
                  <div className='flex items-center justify-center gap-[12px]'>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={() => { setOrderPopVisible(false) }}>Cancel</button>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={handleConfirmFormalRequest}>Confirm</button>
                  </div>
                </div>
              )}
              {activePopup === 'sampleShippingConfirmation' && (
                <div className='md:h-[334px] md:w-[564px] md:py-[65px] md:px-[48px] flex flex-col items-center justify-between bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <span className='w-full font-DM-Sans font-bold md:text-[32px] md:leading-[40px] text-[#333333]'>Confirmation Message</span>
                  <span className='w-full font-DM-Sans font-normal md:text-[20px] md:leading-[34px] text-[#333333]'>Your formal request has been accepted and Medbank is requesting the sample shipment.</span>
                  <button className="w-full h-[50px] md:h-[48px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={handleConfirmFormalRequest}>OK</button>
                </div>
              )}
              {activePopup === 'sampleShipping' && (
                sampleShipping.status == "isPending" ? (
                  <div className='md:h-[334px] md:w-[564px] md:py-[65px] md:px-[48px] flex flex-col items-center justify-between bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                    <span className='w-full font-DM-Sans font-bold md:text-[32px] md:leading-[40px] text-[#333333]'>Confirmation Message</span>
                    <span className='w-full font-DM-Sans font-normal md:text-[20px] md:leading-[34px] text-[#333333]'>Your formal request has been accepted and Medbank is requesting the sample shipment.</span>
                    <button className="w-full h-[50px] md:h-[48px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={handleConfirmSampleShipping}>OK</button>
                  </div>
                ) :
                  sampleShipping.status == "inProgress" ? (
                    <div className='md:h-[287px] md:w-[658px] md:p-[10px] flex flex-col gap-[24px] items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                      <div className='flex flex-col gap-[24px]'>
                        <span className='font-DM-Sans text-center font-bold md:text-[32px] md:leading-[40px] text-[#333333]'>Confirmation Message</span>
                        <span className='font-DM-Sans text-center font-normal md:text-[20px] md:leading-[34px] text-[#333333]'>Please confirm the Formal Request.</span>
                      </div>
                      <div className='flex items-center justify-center gap-[12px]'>
                        <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={() => { setOrderPopVisible(false) }}>Cancel</button>
                        <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={handleSampleShipping}>Confirm</button>
                      </div>
                    </div>
                  ) :
                    (
                      <div className='md:h-[287px] md:w-[658px] md:p-[10px] flex flex-col gap-[24px] items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                        <div className='flex flex-col gap-[24px]'>
                          <span className='font-DM-Sans text-center font-bold md:text-[32px] md:leading-[40px] text-[#333333]'>Confirmation Message</span>
                          <span className='font-DM-Sans text-center font-normal md:text-[20px] md:leading-[34px] text-[#333333]'>Please confirm the Formal Request.</span>
                        </div>
                        <div className='flex items-center justify-center gap-[12px]'>
                          <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={() => { setOrderPopVisible(false) }}>Cancel</button>
                          <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={handleSampleShipping}>Confirm</button>
                        </div>
                      </div>
                    )
              )}
              {activePopup === 'qualityCheck' && (
                <div className='md:h-[287px] md:w-[658px] flex items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <div className='flex flex-col gap-[8px]'>
                    <div>
                      Please review and acknowledge the quality check report file.
                    </div>
                    <div>
                      Download quality report.
                    </div>
                    <div>
                    Note :For resending or cancelling the sample contact us via   chat.
                    </div>
                  </div>
                </div>
              )}
              {activePopup === 'libraryPrep' && (
                <div className='md:h-[287px] md:w-[658px] flex items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  Library Prep Popup Placeholder
                </div>
              )}
              {activePopup === 'analysisProgress' && (
                <div className='md:h-[287px] md:w-[658px] flex items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  Analysis Progress Popup Placeholder
                </div>
              )}
              {activePopup === 'analysisDone' && (
                <div className='md:h-[287px] md:w-[658px] flex items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  Analysis Done Popup Placeholder
                </div>
              )}
              {activePopup === 'analysisRawData' && (
                <div className='md:h-[287px] md:w-[658px] flex items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  Analysis Raw Data Popup Placeholder
                </div>
              )}
              {activePopup === 'analysisSpecification' && (
                <div className='md:h-[287px] md:w-[658px] flex items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  Analysis Specification Popup Placeholder
                </div>
              )}
              {activePopup === 'invoice' && (
                <div className='md:h-[287px] md:w-[658px] flex items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  Invoice Popup Placeholder
                </div>
              )}
              {activePopup === 'payment' && (
                <div className='md:h-[287px] md:w-[658px] flex items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  Payment Popup Placeholder
                </div>
              )}
            </div>
          </div>
        )}
        <div>
          <div className='h-[40px] '>
            <span className='font-DM-Sans font-bold text-[14px] md:text-[20px] leading-[28px]'>ORDER110312</span>
          </div>
          <div className='flex items-center justify-center md:justify-start gap-x-[6px] gap-y-[6px]  md:gap-x-[32px] md:gap-y-[8px] flex-wrap'>
            <button onClick={handleOrderCreation} disabled={!requestSheet.status == "inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${requestSheet.status == "isPending" ? "text-[#333333]" : "text-white"} ${requestSheet.status == "isPending" ? "bg-[#E2E8F0]" : requestSheet.status == "inProgress" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Request sheet sent</button>
            <button onClick={handleCostEstimateClick} disabled={!costEstimate.status == "inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${costEstimate.status == "isPending" ? "text-[#333333]" : "text-white"} ${costEstimate.status == "isPending" ? "bg-[#E2E8F0]" : costEstimate.status == "inProgress" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Cost estimation</button>
            <button onClick={handleFormalRequestClick} disabled={!formalRequest.status == "inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${formalRequest.status == "isPending" ? "text-[#333333]" : "text-white"} ${formalRequest.status == "isPending" ? "bg-[#E2E8F0]" : formalRequest.status == "inProgress" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Formal request</button>
            <button onClick={handleSampleShippingClick} disabled={!sampleShipping.status == "inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${sampleShipping.status == "isPending" ? "text-[#333333]" : "text-white"} ${sampleShipping.status == "isPending" ? "bg-[#E2E8F0]" : sampleShipping.status == "inProgress" ? "bg-[#FF914D]" : sampleShipping.status == "inTransit" ? "bg-[#79747E]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Sample recieved</button>
            <button onClick={handleQualityCheckClick} disabled={!qualityCheck.status == "inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${qualityCheck.status == "isPending" ? "text-[#333333]" : "text-white"} ${qualityCheck.status == "isPending" ? "bg-[#E2E8F0]" : qualityCheck.status == "inProgress" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Quality check</button>
            <button onClick={handleLibraryPrepClick} disabled={!libraryPrep.status == "inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${libraryPrep.status == "isPending" ? "text-[#333333]" : "text-white"} ${libraryPrep.status == "isPending" ? "bg-[#E2E8F0]" : libraryPrep.status == "inProgress" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Library report</button>
            <button onClick={handleAnalysisProgressClick} disabled={!analysisProgress.status == "inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${analysisProgress.status == "isPending" ? "text-[#333333]" : "text-white"} ${analysisProgress.status == "isPending" ? "bg-[#E2E8F0]" : analysisProgress.status == "inProgress" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Aanalysis start</button>
            <button onClick={handleAnalysisDoneClick} disabled={!analysisDone.status == "inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${analysisDone.status == "isPending" ? "text-[#333333]" : "text-white"} ${analysisDone.status == "isPending" ? "bg-[#E2E8F0]" : analysisDone.status == "inProgress" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Aanalysis completed</button>
            <button onClick={handleAnalysisRawDataClick} disabled={!analysisRawData.status == "inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${analysisRawData.status == "isPending" ? "text-[#333333]" : "text-white"} ${analysisRawData.status == "isPending" ? "bg-[#E2E8F0]" : analysisRawData.status == "inProgress" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Raw data</button>
            <button onClick={handleAnalysisSpecificationClick} disabled={!analysisSpecification.status == "inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${analysisSpecification.status == "isPending" ? "text-[#333333]" : "text-white"} ${analysisSpecification.status == "isPending" ? "bg-[#E2E8F0]" : analysisSpecification.status == "inProgress" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Aanalysis Specification</button>
            <button onClick={handleInvoiceClick} disabled={!invoice.status == "inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${invoice.status == "isPending" ? "text-[#333333]" : "text-white"} ${invoice.status == "isPending" ? "bg-[#E2E8F0]" : requestSheet.status == "invoicerogress" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Invoice</button>
            <button onClick={handlePaymentClick} disabled={!payment.status == "inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${payment.status == "isPending" ? "text-[#333333]" : "text-white"} ${payment.status == "isPending" ? "bg-[#E2E8F0]" : requestSheet.status == "paymentess" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Recipt</button>
          </div>
        </div>
        <div className="w-full h-[92px] md:px-[40px] flex flex-col justify-center border-[1px] border-[#E2E8F0] rounded-md shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]">
          <div className='w-full flex items-center justify-between h-[46px] gap-[12px] font-DM-Sans font-normal text-[18px] leading-[24px] tracking-tracking-0.5'>
            <div className="flex items-start gap-[10px]">
              <Image src={Logo} alt="logo" className="h-[46px] w-[46px]"></Image>
              <div className="flex flex-col items-start justify-between">
                <span className="font-DM-Sans font-medium text-[16px] leading-[24px]">MedBank Team</span>
                <span className="font-DM-Sans font-medium text-[14px] leading-[22px] text-[#333333CC]">Online</span>
              </div>
            </div>
            <button className="h-[48px] w-[48px] p-[12.5px] rounded-md bg-[#3E8DA7]">{sendIcon}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewOrderBox

const sendIcon = <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.9023 2.29297L11.9023 13.293" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M22.9023 2.29297L15.9023 22.293L11.9023 13.293L2.90234 9.29297L22.9023 2.29297Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>