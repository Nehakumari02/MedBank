"use client"
import { useOrder } from '@/contexts/OrderContext'
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from 'react'
import { useSession } from "next-auth/react";

const NewOrderBox = () => {
  const router = useRouter();
  const path = usePathname().split("/")[3];
  const pathToRedirect = usePathname().split("/").slice(2).join("/");
  const language = usePathname().split("/")[1];
  const {data:session} = useSession();
  const orderPopUpBoxRef = useRef(null);
  const [orderPopVisible,setOrderPopVisible]=useState(false);
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
    analysisRawData,setAnalysisRawData,
    analysisSpecification, setAnalysisSpecification,
    invoice, setInvoice,
    payment, setPayment,
    } = useOrder();

  const handleOrderCreation =()=>{
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

  const handleConfirmFormalRequest=()=>{
    setOrderPopVisible(false);
    setFormalRequest((prevState) => ({
      ...prevState,
      status: "isCompleted",
    }));
    setSampleShipping((prevState) => ({
      ...prevState,
      status: "inProgress",
    }));
  }


  const handleClickOutside = (event) => {
    if (orderPopUpBoxRef.current && !orderPopUpBoxRef.current.contains(event.target)) {
      setOrderPopVisible(false);
    }
  };

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
            <div className='fixed top-0 left-0 flex items-center justify-center w-[100vw] h-[100vh] bg-[#00000066]'>
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
                  </div>
                  <div>
                    
                  </div>
                  <div className='flex items-center justify-center gap-[12px]'>
                  <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={()=>{setOrderPopVisible(false)}}>Cancel</button>
                  <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={handleConfirmFormalRequest}>Confirm</button>
                  </div>
                </div>
                )}
                {activePopup === 'formalRequest' && (
                  <div className='md:h-[287px] md:w-[658px] flex flex-col gap-[24px] items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                    <div className='flex flex-col gap-[24px]'>
                      <span className='font-DM-Sans text-center font-bold md:text-[32px] md:leading-[40px] text-[#333333]'>Confirmation Message</span>
                      <span className='font-DM-Sans text-center font-bold md:text-[20px] md:leading-[34px] text-[#333333]'>Please confirm the Formal Request.</span>
                    </div>
                    <div className='flex items-center justify-center gap-[12px]'>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={()=>{setOrderPopVisible(false)}}>Cancel</button>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={handleConfirmFormalRequest}>Confirm</button>
                    </div>
                  </div>
                )}
                {activePopup === 'sampleShipping' && (
                  <div className='md:h-[287px] md:w-[658px] flex items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                    Sample Shipping Popup Placeholder
                  </div>
                )}
                {activePopup === 'qualityCheck' && (
                  <div className='md:h-[287px] md:w-[658px] flex items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                    Quality Check Popup Placeholder
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
              <button onClick={handleOrderCreation} disabled={!requestSheet.status=="inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${requestSheet.status=="isPending"?"text-[#333333]":"text-white"} ${requestSheet.status=="isPending"?"bg-[#E2E8F0]":requestSheet.status=="inProgress"?"bg-[#FF914D]":"bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Request sheet sent</button>
              <button onClick={handleCostEstimateClick} disabled={!costEstimate.status=="inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${costEstimate.status=="isPending"?"text-[#333333]":"text-white"} ${costEstimate.status=="isPending"?"bg-[#E2E8F0]":costEstimate.status=="inProgress"?"bg-[#FF914D]":"bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Cost estimation</button>
              <button onClick={handleFormalRequestClick} disabled={!formalRequest.status=="inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${formalRequest.status=="isPending"?"text-[#333333]":"text-white"} ${formalRequest.status=="isPending"?"bg-[#E2E8F0]":formalRequest.status=="inProgress"?"bg-[#FF914D]":"bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Formal request</button>
              <button onClick={handleSampleShippingClick} disabled={!sampleShipping.status=="inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${sampleShipping.status=="isPending"?"text-[#333333]":"text-white"} ${sampleShipping.status=="isPending"?"bg-[#E2E8F0]":sampleShipping.status=="inProgress"?"bg-[#FF914D]":sampleShipping.status=="inTranist"?"bg-[#79747E]":"bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Sample recieved</button>
              <button onClick={handleQualityCheckClick} disabled={!qualityCheck.status=="inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${qualityCheck.status=="isPending"?"text-[#333333]":"text-white"} ${qualityCheck.status=="isPending"?"bg-[#E2E8F0]":qualityCheck.status=="inProgress"?"bg-[#FF914D]":"bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Quality check</button>
              <button onClick={handleLibraryPrepClick} disabled={!libraryPrep.status=="inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${libraryPrep.status=="isPending"?"text-[#333333]":"text-white"} ${libraryPrep.status=="isPending"?"bg-[#E2E8F0]":libraryPrep.status=="inProgress"?"bg-[#FF914D]":"bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Library report</button>
              <button onClick={handleAnalysisProgressClick} disabled={!analysisProgress.status=="inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${analysisProgress.status=="isPending"?"text-[#333333]":"text-white"} ${analysisProgress.status=="isPending"?"bg-[#E2E8F0]":analysisProgress.status=="inProgress"?"bg-[#FF914D]":"bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Aanalysis start</button>
              <button onClick={handleAnalysisDoneClick} disabled={!analysisDone.status=="inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${analysisDone.status=="isPending"?"text-[#333333]":"text-white"} ${analysisDone.status=="isPending"?"bg-[#E2E8F0]":analysisDone.status=="inProgress"?"bg-[#FF914D]":"bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Aanalysis completed</button>
              <button onClick={handleAnalysisRawDataClick} disabled={!analysisRawData.status=="inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${analysisRawData.status=="isPending"?"text-[#333333]":"text-white"} ${analysisRawData.status=="isPending"?"bg-[#E2E8F0]":analysisRawData.status=="inProgress"?"bg-[#FF914D]":"bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Raw data</button>
              <button onClick={handleAnalysisSpecificationClick} disabled={!analysisSpecification.status=="inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${analysisSpecification.status=="isPending"?"text-[#333333]":"text-white"} ${analysisSpecification.status=="isPending"?"bg-[#E2E8F0]":analysisSpecification.status=="inProgress"?"bg-[#FF914D]":"bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Aanalysis Specification</button>
              <button onClick={handleInvoiceClick} disabled={!invoice.status=="inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${invoice.status=="isPending"?"text-[#333333]":"text-white"} ${invoice.status=="isPending"?"bg-[#E2E8F0]":requestSheet.status=="invoicerogress"?"bg-[#FF914D]":"bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Invoice</button>
              <button onClick={handlePaymentClick} disabled={!payment.status=="inProgress"} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${payment.status=="isPending"?"text-[#333333]":"text-white"} ${payment.status=="isPending"?"bg-[#E2E8F0]":requestSheet.status=="paymentess"?"bg-[#FF914D]":"bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Recipt</button>
            </div>
          </div>
          <div>
            Chat
          </div>
        </div>
    </>
  )
}

export default NewOrderBox