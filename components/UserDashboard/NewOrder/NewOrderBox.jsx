"use client";
import { useOrder } from '@/contexts/OrderContext';
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from 'react';
import { useSession } from "next-auth/react";
import FolderIcon from "../../../public/dashboard/folder.png";
import Image from 'next/image';
import Logo from '@/public/Images/Home/logo.png';
import file1 from '../../../public/dashboard/pdf.png';
import vector3 from '../../../public/dashboard/creation1.png';
import downloadIcon from '../../../public/dashboard/downloadIcon.png';
import CalculateCost from '../../../components/CalculateCost';
import LangDropdown from "../../../components/LangDropdown";
import { toast } from '@/hooks/use-toast';
import html2pdf from 'html2pdf.js';
import QuotationTable from '../../../components/QuotationTable';

const NewOrderBox = () => {
  const router = useRouter();
  const path = usePathname();
  const orderIdDB = usePathname().split("/")[3];
  const pathToRedirect = usePathname().split("/").slice(2).join("/");
  const language = usePathname().split("/")[1];
  const { data: session } = useSession();
  const orderPopUpBoxRef = useRef(null);
  const [orderPopVisible, setOrderPopVisible] = useState(false);
  const [activePopup, setActivePopup] = useState('');
  const [check, setCheck] = useState(false);
  const { uploadedFile, setUploadedFile } = useOrder();
  const [file, setFile] = useState(uploadedFile);

  const [currency, setCurrency] = useState("JPY");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isPopUp1, setIsPopUp1] = useState(false);
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [confirmPopUp, setConfirmPopUp] = useState(false);
  let userIdDB = usePathname().split('/')[2];

  const updateDataInDB = async (orderData) => {
    const saveApiResponse = await fetch('/api/updateOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ order: orderData, orderIdDB: orderIdDB }),
    });

    console.log(saveApiResponse)
  }

  const {
    orderId, setOrderId,
    orderTitle, setOrderTitle,
    requestSheetStatus, setRequestSheetStatus,
    requestSheetLink, setRequestSheetLink,
    costEstimateStatus, setCostEstimateStatus,
    costEstimationLink, setCostEstimationLink,
    formalRequestStatus, setFormalRequestStatus,
    sampleShippingStatus, setSampleShippingStatus,
    sampleShipping, setSampleShipping,
    qualityCheckStatus, setQualityCheckStatus,
    qualityCheckReportLink, setQualityCheckReportLink,
    libraryPrepStatus, setLibraryPrepStatus,
    libraryCheckReportLink, setLibraryCheckReportLink,
    analysisProgressStatus, setAnalysisProgressStatus,
    analysisDoneStatus, setAnalysisDoneStatus,
    analysisRawDataStatus, setAnalysisRawDataStatus,
    rawDataLink, setRawDataLink,
    analysisSpecificationStatus, setAnalysisSpecificationStatus,
    analysisSpecificationReportLink, setAnalysisSpecificationReportLink,
    invoiceStatus, setInvoiceStatus,
    invoiceLink, setInvoiceLink,
    paymentStatus, setPaymentStatus,
    paymentRecieptLink, setPaymentRecieptLink,
    grandTotal, setGrandTotal,
  } = useOrder();
  const [isSampleSendChecked1, setIsSampleSendChecked1] = useState(false);
  const [isSampleSendChecked2, setIsSampleSendChecked2] = useState(false);
  const [isSampleSendChecked3, setIsSampleSendChecked3] = useState(false);
  const [isQualityChecked, setIsQulaityChecked] = useState(false);
  const [isLibraryPrepChecked, setIsLibraryChecked] = useState(false);
  //const [isQualityChecked3, setIsQulaityChecked3] = useState(false);
  const [isAnalysisSpecificationChecked, setIsAnalysisSpecificationChecked] = useState(false);
  const [isAnalysisRawChecked1, setIsAnalysisRawChecked1] = useState(false);
  const [isAnalysisRawChecked2, setIsAnalysisRawChecked2] = useState(false);
  const [isInvoiceChecked, setIsInvoiceChecked] = useState(false);
  const printRef= useRef();


  const handleSampleSendChecked1 = (e) => {
    setIsSampleSendChecked1(e.target.checked);
  };
  const handleSampleSendChecked2 = (e) => {
    setIsSampleSendChecked2(e.target.checked);
  };

  const handleSampleSendChecked3 = (e) => {
    setIsSampleSendChecked3(e.target.checked);
  };

  const handleQualityChecked = (e) => {
    setIsQulaityChecked(e.target.checked);
  };


  const handleLibraryPrepChecked = (e) => {
    setIsLibraryChecked(e.target.checked);
  };


  const handleAnalysisSpecificationChecked = (e) => {
    setIsAnalysisSpecificationChecked(e.target.checked);
  };

  const handleRawAnalysisChecked1 = (e) => {
    setIsAnalysisRawChecked1(e.target.checked);
  };

  const handleRawAnalysisChecked2 = (e) => {
    setIsAnalysisRawChecked2(e.target.checked);
  };

  const handleInvoiceChecked = (e) => {
    setIsInvoiceChecked(e.target.value);
  };


  const handleGenerateClick = () => {
    setActivePopup('costEstimateConfirmation');
  };

  const handleGenerateClick1 = () => {
    setIsPopupVisible(true);
    setActivePopup('payment');
    setIsPopUp1(false);
  };

  const sampleDelete = () => {
    setActivePopup(setDeletePopUp);
  };

  const sampleConfirm = () => {
    setActivePopup(setConfirmPopUp);
    setOrderPopVisible(false);
    setSampleShippingStatus("isCompleted");
    setQualityCheckStatus("inUserProgress");
  };

  const handleDeleteOk = () => {
    setOrderPopVisible(false);
    //setOrderPopVisible(true);
    //setActivePopup('formalRequest');
    setOrderPopVisible(false);
    setSampleShippingStatus("inUserProgress")
    updateDataInDB({
      sampleShippingStatus: "inUserProgress"
    })

  };

  const handleConfirmOk = () => {
    setOrderPopVisible(false);
    //setOrderPopVisible(true);
    //setActivePopup('formalRequest');
    setOrderPopVisible(false);
    setSampleShippingStatus("isCompleted");
    setQualityCheckStatus('inAdminProgress')
    updateDataInDB({
      sampleShippingStatus: "isCompleted",
      qualityCheckStatus: 'inAdminProgress'

    })

  };

  const handleClick1 = () => {
    setIsPopUp1(true);
  };

  const handleOrderCreation = () => {
    router.push(`/${language}/${userIdDB}/${orderIdDB}/NewOrder/OrderCreationPage`)
    // setOrderPopVisible(true);
    // setActivePopup('requestSheet');
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
    if (sampleShippingStatus == "inUserProgress")
      setActivePopup('sampleShippingSend');
    else {
      if (sampleShipping == "ok") {
        setActivePopup('sampleShippingOk');
      }
      else {
        setActivePopup('sampleShippingDefect')
      }
    }
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

  const handleConfirmRequestSheet = () => {
    setOrderPopVisible(false);
    setRequestSheetStatus("isCompleted");
    setCostEstimateStatus("inAdminProgress");
    updateDataInDB({
      cost
    })
  };

  const handleConfirmCostEstimate = async () => {
    const element = printRef.current;
  
    if (!element) {
      console.error("QuotationTable is not loaded yet.");
      return;
    }
  
    // Ensure the element and its content are fully loaded
    try {
      const options = {
        margin: 0.5,
        filename: 'quotation.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
  
      // Wait for the PDF generation to complete
      await html2pdf().from(element).set(options).save();
  
      // Update statuses and close the popup
      setOrderPopVisible(false);
      setIsPopupVisible(false);
      setCostEstimateStatus("isCompleted");
      setFormalRequestStatus("inUserProgress");
  
      // Update the database
      updateDataInDB({
        costEstimateStatus: "isCompleted",
        formalRequestStatus: "inUserProgress"
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };
  

  const handleConfirmFormalRequest = () => {
    setFormalRequestStatus("isUserCompleted");
    setOrderPopVisible(false);
    //setActivePopup('sampleShippingConfirmation');
    updateDataInDB({
      formalRequestStatus: "isUserCompleted"
    })
  };

  const handleConfirmSampleShipping = () => {
    //setIsPopupVisible(false);
    if (!isSampleSendChecked1) {
      // Show toast if checkbox is not checked
      toast({
        variant: "error",
        title: "Error",
        description: "please check the box"
      })
    }
    else if (!isSampleSendChecked2) {
      toast({
        variant: "error",
        title: "Error",
        description: "please check the box"
      })
    }
    else if (!isSampleSendChecked3) {
      toast({
        variant: "error",
        title: "Error",
        description: "please check the box"
      })
    }
    else {
      setOrderPopVisible(false);
      setSampleShippingStatus("inTransit")
      updateDataInDB({
        sampleShippingStatus: "inTransit"
      })
    }
  };

  const handleConfirmQualityCheck = () => {

    if (!isQualityChecked) {
      // Show toast if checkbox is not checked
      toast({
        variant: "error",
        title: "Error",
        description: "please check the box"
      })
    }
    else {
      setOrderPopVisible(false);
      //setActivePopup('');
      setQualityCheckStatus("isCompleted");
      setLibraryPrepStatus("inAdminProgress");
      updateDataInDB({
        qualityCheckStatus: "isCompleted",
        libraryPrepStatus: "inAdminProgress"
      })

    }

  };

  const handleLibraryPrepConfirmation = () => {
    if (!isLibraryPrepChecked) {
      // Show toast if checkbox is not checked
      toast({
        variant: "error",
        title: "Error",
        description: "please check the box"
      })
    }
    else {
      setOrderPopVisible(false);
      setActivePopup('');
      setLibraryPrepStatus("isCompleted");
      //setAnalysisProgressStatus("inUserProgress");
      setAnalysisProgressStatus('inAdminProgress');
      updateDataInDB({
        libraryPrepStatus: "isCompleted",
        analysisProgressStatus: 'inAdminProgress'
      })

    }


  };

  const handleAnalysisDoneConfirmation = () => {
    setOrderPopVisible(false);
    setActivePopup('');
    setAnalysisDoneStatus("isCompleted");
    setAnalysisRawDataStatus("inUserProgress");
  };

  const handleAnalysisDone = () => {
    setOrderPopVisible(false);
    setActivePopup('');
    setAnalysisProgressStatus("isCompleted");
    setAnalysisDoneStatus("inUserProgress");
  };

  const handleAnalysisRawDataConfirm = () => {
    if (!isAnalysisRawChecked1) {
      // Show toast if checkbox is not checked
      toast({
        variant: "error",
        title: "Error",
        description: "please check the box"
      })
    }

    else if (!isAnalysisRawChecked2) {
      // Show toast if checkbox is not checked
      toast({
        variant: "error",
        title: "Error",
        description: "please check the box"
      })
    }

    else {
      setOrderPopVisible(false);
      setAnalysisRawDataStatus("inCompleted")
      updateDataInDB({
        analysisRawDataStatus: "isCompleted"
      })

    }


  }

  const handleAnalysisSpecification = () => {
    if (!isAnalysisSpecificationChecked) {
      // Show toast if checkbox is not checked
      toast({
        variant: "error",
        title: "Error",
        description: "please check the box"
      })
    }
    else {
      setOrderPopVisible(false);
      setAnalysisSpecificationStatus("isCompleted")
      updateDataInDB({
        analysisSpecificationStatus: "isCompleted"
      })

    }
  }

  const handleInvoice = () => {
    if (!isInvoiceChecked) {
      // Show toast if checkbox is not checked
      toast({
        variant: "error",
        title: "Error",
        description: "please check the box"
      })
    }
    else {
      setOrderPopVisible(false);
      setInvoiceStatus("isCompleted")
      updateDataInDB({
        invoiceStatus: "isCompleted"
      })

    }
  }

  const handleConfirmPayment = () => {
    setOrderPopVisible(false);
    setPaymentStatus("isCompleted")
    updateDataInDB({
      paymentStatus: "isCompleted"
    })
  }

  const handleClickOutside = (event) => {
    if (orderPopUpBoxRef.current && !orderPopUpBoxRef.current.contains(event.target)) {
      setOrderPopVisible(false);
    }
  };

  useEffect(() => {
    if (sampleShippingStatus === "isPending" && formalRequestStatus === "isCompleted") {
      setActivePopup("sampleShippingConfirmation");
      setOrderPopVisible(true);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (uploadedFile instanceof File) {
        URL.revokeObjectURL(uploadedFile);
      }
    };
  }, [uploadedFile]);

  useEffect(() => {
    const fetchOrderByID = async (orderId) => {
      try {
        const response = await fetch('/api/fetchOrder', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ orderId }),
        });
        const order = await response.json();
        const orderData = order.data;
        console.log("order data in new order box", orderData);
        setOrderId(orderData.orderId);
        setOrderTitle(orderData.orderTitle);
        setRequestSheetStatus(orderData.requestSheetStatus);
        setRequestSheetLink(orderData.requestSheetLink);
        setCostEstimateStatus(orderData.costEstimateStatus);
        setCostEstimationLink(orderData.costEstimateLink);
        setFormalRequestStatus(orderData.formalRequestStatus);
        setSampleShippingStatus(orderData.sampleShippingStatus);
        setSampleShipping(orderData.sampleShipping);
        setQualityCheckStatus(orderData.qualityCheckStatus);
        setQualityCheckReportLink(orderData.qualityCheckReportLink);
        setLibraryPrepStatus(orderData.libraryPrepStatus);
        setLibraryCheckReportLink(orderData.libraryCheckReportLink);
        setAnalysisProgressStatus(orderData.analysisProgressStatus);
        setAnalysisDoneStatus(orderData.analysisDoneStatus);
        setAnalysisRawDataStatus(orderData.analysisRawDataStatus);
        setRawDataLink(orderData.rawDataLink);
        setAnalysisSpecificationStatus(orderData.analysisSpecificationStatus);
        setAnalysisSpecificationReportLink(orderData.analysisSpecificationReportLink);
        setInvoiceStatus(orderData.invoiceStatus);
        setInvoiceLink(orderData.invoiceLink);
        setPaymentStatus(orderData.paymentStatus);
        setPaymentRecieptLink(orderData.paymentRecieptLink);
        setGrandTotal(orderData.grandTotal);
      } catch (error) {
        console.error('Error fetching order by ID:', error);
      }
    };

    fetchOrderByID(orderIdDB);
  }, [orderIdDB]);


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
                <div className='p-[16px] w-[356px] h-[290px] md:h-[435px] md:w-[760px] md:py-[26px] flex flex-col gap-[24px] items-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <div className='h-[40px] md:h-[50px] flex items-start justify-center w-full text-center border-b-[1px] border-dotted border-[#33333340]'>
                    <span className='font-DM-Sans text-center font-medium text-[16px] md:text-[22px] md:leading-[24px] text-[#333333]'>Download Cost Estimation</span>
                  </div>
                  <div className='w-[313px] h-[154px] md:w-[490px] md:h-[203px] flex items-center justify-center border-[0.4px] border-[#0033DD] border-dashed rounded-[6px]'>
                    <div className='flex flex-col items-center justify-center gap-[14px]'>
                      <Image className='w-[32px] h-[24px] md:w-[51px] md:h-[51px]' src={FolderIcon} alt="File"></Image>
                      <div className='font-DM-Sans font-normal text-[10px] md:text-[14px] md:leading-[18px] text-[#606060] text-center'>
                        <span>CostEstimation.pdf</span><br />
                        <span>1.2MB</span>
                      </div>
                    </div>
                  </div>
                  <div className='w-full md:w-[490px] flex items-center justify-end gap-[12px]'>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={() => { setOrderPopVisible(false) }}>Back</button>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={handleConfirmCostEstimate}>Download</button>
                  </div>
                  <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
                    <div ref={printRef}>
                      <QuotationTable orderIdDB={orderIdDB} orderId={orderId} userId={userIdDB}  />
                    </div>
                  </div>
                </div>
              )}
              {activePopup === 'formalRequest' && (
                <div className='w-[298px] h-[197px] md:h-[287px] md:w-[658px] md:p-[10px] flex flex-col gap-[24px] items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
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
              {activePopup === 'sampleShippingSend' && (
                <div className='font-DM-Sans flex flex-col w-[298px] h-[221px] md:h-[398px] md:w-[658px] p-[28px] md:p-12  items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <div className='text-[22px] md:text-[22px] font-bold font-DM-Sans pb-[6px] md:pb-8 leading-[24px]'>Sample Send</div>
                  <div className='flex flex-col gap-[6px] md:gap-[12px]'>
                    <div className="hidden md:block md:text-[20px] leading-6 ">
                      The sample has been sent.
                    </div>
                    <p className="block md:hidden text-[18px] leading-6 pt-[8px]">
                      The sample has been sent by the Customer.
                    </p>
                    <p className="hidden md:block">
                      Check how to send a sample.
                      <a href="/path/to/download" className="text-transparent bg-clip-text bg-gradient-to-b from-[#60b7cf] via-[#3e8da7] to-[rgba(0,62,92,0.6)] underline">
                        Visit Website
                      </a>
                    </p>

                    <label className="hidden md:inline-flex items-center pt-[8px] md:pt-4">
                      <input
                        className="form-checkbox accent-[#3e8ca7]"
                        type="checkbox"
                        id="samplsend1"
                        checked={isSampleSendChecked1}
                        onChange={handleSampleSendChecked1}
                      />
                      <span className="ml-2 font-DM-Sans font-normal text-[10px] md:text-[16px] leading-[24px]">
                        <span className='hidden md:block'>
                          I have carefully read the shipping and sending instructions.
                        </span>
                      </span>
                    </label>
                    <label className="hidden md:inline-flex items-center ">
                      <input
                        className="form-checkbox accent-[#3e8ca7]"
                        type="checkbox"
                        id="samplesend2"
                        checked={isSampleSendChecked2}
                        onChange={handleSampleSendChecked2}
                      />
                      <span className="ml-2 font-DM-Sans font-normal text-[10px] md:text-[16px] leading-[24px]">
                        <span className='hidden md:block'>
                          Samples are labelled.
                        </span>
                      </span>
                    </label>
                    <label className="hidden md:inline-flex items-center ">
                      <input
                        className="form-checkbox accent-[#3e8ca7]"
                        type="checkbox"
                        id="samplesend3"
                        checked={isSampleSendChecked3}
                        onChange={handleSampleSendChecked3}
                      />
                      <span className="ml-2 font-DM-Sans font-normal text-[10px] md:text-[16px] leading-[24px]">
                        <span className='hidden md:block'>
                          Did you enclose a signed request sheet?
                        </span>
                      </span>
                    </label>
                    <div className='flex items-center justify-center gap-[10px] md:gap-[12px] md:pt-3 pt-[24px]'>
                      <button className='md:hidden h-[40px] md:h-[40px] w-[250px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]' onClick={handleConfirmSampleShipping}>Ok</button>
                      <button className='hidden h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] md:flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px] ' onClick={() => { setOrderPopVisible(false) }} >Cancel</button>
                      <button className='hidden h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] md:flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]' onClick={handleConfirmSampleShipping}>Confirm</button>
                    </div>

                  </div>
                </div>
              )}
              {activePopup === 'sampleShippingDefect' && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                  <div className='p-[24px] w-[298px] h-[330px] md:h-[436px] md:w-[564px] md:p-[48px] flex flex-col items-center justify-between bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                    <span className='text-[22px] w-full font-DM-Sans font-bold md:text-[32px] md:leading-[40px] text-[#333333]'>Sample Delete Notification</span>
                    <span className='w-full font-DM-Sans font-normal md:text-[20px] md:leading-[34px] text-[#333333] text-[14px]'>Dear Taruko,<br></br>
                      We have received your sample, but there is an issue with its condition. Please contact us for further instructions on how to proceed.<br></br>
                      Thank you <br></br>
                      Medbank Genetic Analysis Team</span>
                    <button
                      className="w-full h-[40px] md:h-[48px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]"
                      onClick={handleDeleteOk}
                    >
                      OK
                    </button>
                  </div>
                </div>
              )}
              {activePopup === 'sampleShippingOk' && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                  <div className='p-[24px] w-[298px] h-[330px] md:h-[436px] md:w-[564px] md:p-[48px] flex flex-col items-center justify-between bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                    <span className='text-[22px] w-full font-DM-Sans font-bold md:text-[32px] md:leading-[40px] text-[#333333]'>Sample Receipt Confirmation</span>
                    <span className='w-full font-DM-Sans font-normal md:text-[20px] md:leading-[34px] text-[#333333] text-[14px]'>Dear Taruko,<br></br>
                      We have received your sample in good condition. Our team will begin the analysis process immediately.<br></br>
                      Thank you <br></br>
                      Medbank Genetic Analysis Team</span>
                    <button
                      className="w-full h-[40px] md:h-[48px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]"
                      onClick={handleConfirmOk}
                    >
                      OK
                    </button>
                  </div>
                </div>
              )}
              {activePopup === 'qualityCheck' && (
                <div className='font-DM-Sans flex flex-col w-[306px] h-[300px] md:h-[507px] md:w-[564px] p-[28px] md:p-12  items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <div className='text-[22px] md:text-[32px] font-bold font-DM-Sans pb-[6px] md:pb-8 leading-[40px]'>Quality Check report</div>
                  <div className='flex flex-col gap-[6px] md:gap-[8px]'>
                    <div className='text-[14px] md:text-xl font-normal leading-[24px] md:leading-[34px]'>
                      Please review and acknowledge the quality check report file.
                    </div>
                    <div className='text-[8px] md:text-xs font-normal leading-[34px]'>
                      Download quality report.
                    </div>
                    <div className="flex items-center p-4 bg-white border-[0.5px] solid border-[#33333326] rounded-lg md:mt-2 max-w-[331px] md:max-w-[300px] max-h-[38px] md:max-h-[52px] justify-between ">
                      <div className='flex gap-[8px]'>
                        <div className="flex items-center justify-center">
                          <Image src={file1} className='w-[18px] h-[24px]'></Image>
                        </div>
                        <div>
                          {uploadedFile instanceof File && uploadedFile.type === 'application/pdf' ? (
                            <a href={URL.createObjectURL(uploadedFile)} target="_blank" rel="noopener noreferrer">
                              <span className="text-sm md:text-lg">
                                {uploadedFile.name.length > 20 ? `${uploadedFile.name.substring(0, 19)}...` : uploadedFile.name}
                              </span>
                            </a>
                          ) : (
                            <p>QualityCheckReport</p>
                          )}
                        </div>

                      </div>
                      <a href={qualityCheckReportLink.split("?")[0]} download="qualityReport">
                        <div className="text-red-500 cursor-pointer">
                          <Image src={downloadIcon} className='h-[13px] w-[13px]'></Image>
                        </div>
                      </a>
                    </div>
                    <label className="inline-flex items-center pt-[8px] md:pt-4">
                      <input
                        className="form-checkbox accent-[#3e8ca7]"
                        type="checkbox"
                        id="qualitycheck"
                        checked={isQualityChecked}
                        onChange={handleQualityChecked}
                      />
                      <span className="ml-2 font-DM-Sans font-normal text-[10px] md:text-[16px] leading-[24px]">
                        {/* Show this text only on mobile */}
                        <span className='block md:hidden'>
                          I have reviewed the Quality Check Report.
                        </span>
                        {/* Show the original text only on desktop */}
                        <span className='hidden md:block'>
                          I have reviewed the contents of the quality check report and found no problems. I agree to proceed to the next step.
                        </span>
                      </span>
                    </label>
                    <div className='hidden md:block text-base font-normal leading-[24px]'>
                      Note :For resending or cancelling the sample contact us via   chat.
                    </div>
                    <div className='flex items-center justify-center gap-[10px] md:gap-[12px]'>
                      <button className='md:hidden h-[40px] md:h-[48px] w-[250px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]'>Proceed to library preparation</button>
                      <button className='hidden h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] md:flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px] ' >Cancel</button>
                      <button className='hidden h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] md:flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]' onClick={handleConfirmQualityCheck}>Proceed</button>
                    </div>

                  </div>
                </div>
              )}
              {activePopup === 'libraryPrep' && (
                <div className='font-DM-Sans flex flex-col w-[358px] h-[300px] md:h-[507px] md:w-[564px] p-[28px] md:p-12  items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <div className='text-[22px] md:text-[32px] font-bold font-DM-Sans pb-[6px] md:pb-8 leading-[40px]'>Library Preparation Report</div>
                  <div className='flex flex-col gap-[6px] md:gap-[8px]'>
                    <div className='text-[14px] md:text-xl font-normal leading-[24px] md:leading-[34px]'>
                      Please review and acknowledge the library preparation report.
                    </div>
                    <div className='text-[8px] md:text-xs font-normal leading-[34px]'>
                      Download library preparation report.
                    </div>
                    <div className="flex items-center p-4 bg-white border-[0.5px] solid border-[#33333326] rounded-lg md:mt-2 max-w-[331px] md:max-w-[300px] max-h-[38px] md:max-h-[52px] justify-between ">
                      <div className='flex gap-[8px]'>
                        <div className="flex items-center justify-center">
                          <Image src={file1} className='w-[18px] h-[24px]'></Image>
                        </div>
                        <div>
                          {uploadedFile instanceof File && uploadedFile.type === 'application/pdf' ? (
                            <a href={URL.createObjectURL(uploadedFile)} target="_blank" rel="noopener noreferrer">
                              <span className="text-sm md:text-lg">
                                {uploadedFile.name.length > 20 ? `${uploadedFile.name.substring(0, 19)}...` : uploadedFile.name}
                              </span>
                            </a>
                          ) : (
                            <p>LibraryPrepReport</p>
                          )}
                        </div>
                      </div>
                      <a href={libraryCheckReportLink.split("?")[0]} download="libraryReport">
                        <div className="text-red-500 cursor-pointer">
                          <Image src={downloadIcon} className='h-[13px] w-[13px]'></Image>
                        </div>
                      </a>
                    </div>
                    <label className="inline-flex items-center pt-[8px] md:pt-4">
                      <input
                        className="form-checkbox accent-[#3e8ca7]"
                        type="checkbox"
                        id="libraryprep"
                        checked={isLibraryPrepChecked}
                        onChange={handleLibraryPrepChecked}
                      />
                      <span className="ml-2 font-DM-Sans font-normal text-[10px] md:text-[16px] leading-[24px]">
                        {/* Show this text only on mobile */}
                        <span className='block md:hidden'>
                          I have reviewed the Library Preparation Report.
                        </span>
                        {/* Show the original text only on desktop */}
                        <span className='hidden md:block'>
                          I have reviewed the contents of the library preparation report and found no problems. I agree to proceed to the next step.
                        </span>
                      </span>
                    </label>
                    <div className='hidden md:block text-base font-normal leading-[24px]'>
                      Note :For resending or cancelling the sample contact us via   chat.
                    </div>
                    <div className='flex items-center justify-center gap-[10px] md:gap-[12px]'>
                      <button className='md:hidden h-[40px] md:h-[48px] w-[250px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]' onClick={handleLibraryPrepConfirmation}>Proceed</button>
                      <button className='hidden h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] md:flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px] ' onClick={() => { setOrderPopVisible(false) }}>Cancel</button>
                      <button className='hidden h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] md:flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]' onClick={handleLibraryPrepConfirmation}>Proceed</button>
                    </div>

                  </div>
                </div>
              )}
              {activePopup === 'analysisProgress' && (
                <div className='font-DM-Sans flex flex-col w-[352px] h-[197px] md:h-[386px] md:w-[760px] p-[28px] md:p-12  items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  analysis progress
                </div>
              )}
              {activePopup === 'analysisDone' && (
                <div className='font-DM-Sans flex flex-col w-[321px] h-[322px] md:h-[507px] md:w-[564px] p-[28px] md:p-12  items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  analysis done
                </div>
              )}
              {activePopup === 'analysisRawData' && (
                <div className='font-DM-Sans flex flex-col w-[352px] h-[197px] md:h-[386px] md:w-[760px] p-[28px] md:p-12  items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <div className='text-[22px] md:text-[22px] font-bold font-DM-Sans pb-[6px] md:pb-8 leading-[24px]'>Raw Data</div>
                  <div className='flex flex-col gap-[6px] md:gap-[12px]'>
                    <div className="text-xs md:text-base font-normal flex items-center p-4 underline text-center bg-white border-[0.5px] solid border-[#33333326] rounded-lg md:mt-2 max-w-[331px] md:max-w-[527px] max-h-[32px] md:max-h-[50px] justify-center">
                      <a href={rawDataLink.startsWith('http') ? rawDataLink : `https://${rawDataLink}`} target="_blank" rel="noopener noreferrer">
                        RawDataLink
                      </a>
                    </div>
                    <label className="inline-flex items-center pt-[8px] md:pt-4">
                      <input

                        className="form-checkbox accent-[#3e8ca7]"
                        type="checkbox"
                        id="analysisraw1"
                        checked={isAnalysisRawChecked1}
                        onChange={handleRawAnalysisChecked1}
                      />
                      <span className="ml-2 font-DM-Sans font-normal text-[10px] md:text-[16px] leading-[24px]">
                        {/* Show this text only on mobile */}
                        <span className='block md:hidden'>
                          I have reviewed the Data Link.
                        </span>
                        {/* Show the original text only on desktop */}
                        <span className='hidden md:block'>
                          I have reviewed the Data Link.
                        </span>
                      </span>
                    </label>
                    <label className="hidden md:inline-flex items-center ">
                      <input
                        className="form-checkbox accent-[#3e8ca7]"
                        type="checkbox"
                        id="analysisraw2"
                        checked={isAnalysisRawChecked2}
                        onChange={handleRawAnalysisChecked2}
                      />
                      <span className="ml-2 font-DM-Sans font-normal text-[10px] md:text-[16px] leading-[24px]">
                        {/* Show this text only on mobile */}
                        <span className='block md:hidden'>
                          I agree that Raw Data will be deleted in 3 months.
                        </span>
                        {/* Show the original text only on desktop */}
                        <span className='hidden md:block'>
                          I agree that Raw Data will be deleted in 3 months.
                        </span>
                      </span>
                    </label>
                    <div className='flex items-center justify-center gap-[10px] md:gap-[12px] md:pt-3'>
                      <button className='md:hidden h-[40px] md:h-[48px] w-[250px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]' onClick={handleAnalysisRawDataConfirm}>Proceed to library preparation</button>
                      <button className='hidden h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] md:flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px] ' onClick={() => { setOrderPopVisible(false) }} >Cancel</button>
                      <button className='hidden h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] md:flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]' onClick={handleAnalysisRawDataConfirm}>Proceed</button>
                    </div>

                  </div>
                </div>
              )}
              {activePopup === 'analysisSpecification' && (
                <div className='font-DM-Sans flex flex-col w-[321px] h-[322px] md:h-[507px] md:w-[564px] p-[28px] md:p-12  items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <div className='text-[22px] md:text-[32px] font-bold font-DM-Sans pb-[6px] md:pb-8 leading-[40px]'>Analysis Specification Report</div>
                  <div className='flex flex-col gap-[6px] md:gap-[8px]'>
                    <div className='text-[14px] md:text-xl font-normal leading-[24px] md:leading-[34px]'>
                      Please review and acknowledge the analysis specification report.
                    </div>
                    <div className='text-[8px] md:text-xs font-normal leading-[24px] md:leading-[34px]'>
                      Download report.
                    </div>
                    <div className="flex items-center p-4 bg-white border-[0.5px] solid border-[#33333326] rounded-lg md:mt-2 max-w-[331px] md:max-w-[300px] max-h-[38px] md:max-h-[52px] justify-between ">
                      <div className='flex gap-[8px]'>
                        <div className="flex items-center justify-center">
                          <Image src={file1} className='w-[18px] h-[24px]'></Image>
                        </div>
                        <div>
                          {uploadedFile instanceof File && uploadedFile.type === 'application/pdf' ? (
                            <a href={URL.createObjectURL(uploadedFile)} target="_blank" rel="noopener noreferrer">
                              <span className="text-sm md:text-lg">
                                {uploadedFile.name.length > 20 ? `${uploadedFile.name.substring(0, 19)}...` : uploadedFile.name}
                              </span>
                            </a>
                          ) : (
                            <p>Analysis Specification</p>
                          )}
                        </div>
                      </div>
                      <a href={analysisSpecificationReportLink.split("?")[0]} download="analysisSpecification">
                        <div className="text-red-500 cursor-pointer">
                          <Image src={downloadIcon} className='h-[13px] w-[13px]'></Image>
                        </div>
                      </a>
                    </div>
                    <label className="inline-flex items-center pt-[8px] md:pt-4">
                      <input
                        className="form-checkbox accent-[#3e8ca7]"
                        type="checkbox"
                        id="analysisraw1"
                        checked={isAnalysisSpecificationChecked}
                        onChange={handleAnalysisSpecificationChecked}
                      />
                      <span className="ml-2 font-DM-Sans font-normal text-[10px] md:text-[16px] leading-[24px]">
                        {/* Show this text only on mobile */}
                        <span className='block md:hidden'>
                          I have reviewed the Analysis Specification Report
                        </span>
                        {/* Show the original text only on desktop */}
                        <span className='hidden md:block'>
                          I have reviewed the contents of the analysis specification report and found no problems.
                        </span>
                      </span>
                    </label>
                    <div className='flex items-center justify-center gap-[10px] md:gap-[12px] md:pt-3'>
                      <button className='md:hidden h-[40px] md:h-[48px] w-[250px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]' onClick={handleAnalysisSpecification}>Proceed</button>
                      <button className='hidden h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] md:flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px] ' onClick={() => { setOrderPopVisible(false) }} >Cancel</button>
                      <button className='hidden h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] md:flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]' onClick={handleAnalysisSpecification}>Proceed</button>
                    </div>

                  </div>
                </div>
              )}
              {activePopup === 'invoice' && (
                <div className='font-DM-Sans flex flex-col w-[317px] h-[247px] md:h-[351px] md:w-[564px] p-[28px] md:p-12  items-start justify-center bg-white border-[1px] border-[#D9D9D9] rounded-lg md:rounded-[22px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>

                  <div className='text-[22px] md:text-[32px] font-bold font-DM-Sans pb-[6px] md:pb-6 leading-[40px]'>Invoice</div>
                  <div className='w-full flex flex-col gap-[6px] md:gap-[8px]'>
                    <div className='text-[14px] md:text-xl font-normal leading-[24px] md:leading-[34px]'>
                      Download invoice.
                    </div>
                    <div className="flex items-center p-4 bg-white border-[0.5px] solid border-[#33333326] rounded-lg md:mt-2 max-w-[331px] md:max-w-[300px] max-h-[38px] md:max-h-[52px] justify-between ">
                      <div className='flex gap-[8px]'>
                        <div className="flex items-center justify-center">
                          <Image src={file1} className='w-[18px] h-[24px]'></Image>
                        </div>
                        <div>
                          {
                            uploadedFile && uploadedFile instanceof File && (
                              <a href={URL.createObjectURL(uploadedFile)}>
                                <div className="text-sm md:text-lg">{uploadedFile.name}</div>
                                <p className="text-sm text-[#717171]">
                                  {(uploadedFile.size / 1024 / 1024).toFixed(2)} Mb
                                </p>
                              </a>
                            )
                          }
                        </div>
                      </div>
                      <div className="text-red-500 cursor-pointer">
                        <Image src={downloadIcon} className='h-[13px] w-[13px]'></Image>
                      </div>
                    </div>
                    <label className="inline-flex items-center pt-[8px] md:pt-4">
                      <input
                        className="form-checkbox accent-[#3e8ca7]"
                        type="checkbox"
                        id="invoice"
                        checked={isInvoiceChecked}
                        onChange={handleInvoiceChecked}
                      />
                      <span className="ml-2 font-DM-Sans font-normal text-[10px] md:text-[16px] leading-[24px]">
                        {/* Show this text only on mobile */}
                        <span className='block md:hidden'>
                          I have reviewed the Invoice.
                        </span>
                        {/* Show the original text only on desktop */}
                        <span className='hidden md:block'>
                          I have reviewed the Invoice.
                        </span>
                      </span>
                    </label>
                    <div className='w-full flex items-center justify-center gap-[10px] md:gap-[12px] md:pt-3'>
                      <button className='md:hidden h-[40px] md:h-[48px] w-[250px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]' onClick={handleInvoice}>Proceed</button>
                      <button className='hidden h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] md:flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px] ' onClick={() => { setOrderPopVisible(false) }} >Cancel</button>
                      <button className='hidden h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] md:flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]' onClick={handleInvoice}>Confirm</button>
                    </div>

                  </div>
                </div>
              )}
              {activePopup === 'payment' && (
                <div className='p-[16px] w-[356px] h-[290px] md:h-[435px] md:w-[760px] md:py-[26px] flex flex-col gap-[24px] items-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <div className='h-[40px] md:h-[50px] flex items-start justify-center w-full text-center border-b-[1px] border-dotted border-[#33333340]'>
                    <span className='font-DM-Sans text-center font-medium text-[16px] md:text-[22px] md:leading-[24px] text-[#333333]'>Download Receipt</span>
                  </div>
                  <div className='w-[313px] h-[154px] md:w-[490px] md:h-[203px] flex items-center justify-center border-[0.4px] border-[#0033DD] border-dashed rounded-[6px]'>
                    <div className='flex flex-col items-center justify-center gap-[14px]'>
                      <Image className='w-[32px] h-[24px] md:w-[51px] md:h-[51px]' src={FolderIcon} alt="File"></Image>
                      <div className='font-DM-Sans font-normal text-[10px] md:text-[14px] md:leading-[18px] text-[#606060] text-center'>
                        <span>Receipt.pdf</span><br />
                        <span>1.2MB</span>
                      </div>
                    </div>
                  </div>
                  <div className='w-full md:w-[490px] flex items-center justify-end gap-[12px]'>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={() => { setOrderPopVisible(false) }}>Back</button>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={handleConfirmPayment}>Download</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        <div>
          <div className='h-[40px] '>
            <span className='font-DM-Sans font-bold text-[14px] md:text-[20px] leading-[28px]'>{orderId}</span>
          </div>
          <div className='flex items-center justify-center md:justify-start gap-x-[6px] gap-y-[6px]  md:gap-x-[32px] md:gap-y-[8px] flex-wrap'>
            <button onClick={handleOrderCreation} disabled={!(requestSheetStatus == "inUserProgress" || requestSheetStatus == "isAdminCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${requestSheetStatus == "isPending" || requestSheetStatus == "inAdminProgress" ? "text-[#333333]" : "text-white"} ${requestSheetStatus == "isPending" || requestSheetStatus == "inAdminProgress" ? "bg-[#E2E8F0]" : requestSheetStatus == "inUserProgress" || requestSheetStatus == "isAdminCompleted" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Request sheet sent</button>
            <button onClick={handleCostEstimateClick} disabled={!(costEstimateStatus == "inUserProgress" || costEstimateStatus == "isAdminCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${costEstimateStatus == "isPending" || costEstimateStatus == "inAdminProgress" ? "text-[#333333]" : "text-white"} ${costEstimateStatus == "isPending" || costEstimateStatus == "inAdminProgress" ? "bg-[#E2E8F0]" : costEstimateStatus == "inUserProgress" || costEstimateStatus == "isAdminCompleted" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Cost estimation</button>
            <button onClick={handleFormalRequestClick} disabled={!(formalRequestStatus == "inUserProgress" || formalRequestStatus == "isAdminCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${formalRequestStatus == "isPending" || formalRequestStatus == "inAdminProgress" ? "text-[#333333]" : "text-white"} ${formalRequestStatus == "isPending" || formalRequestStatus == "inAdminProgress" ? "bg-[#E2E8F0]" : formalRequestStatus == "inUserProgress" || formalRequestStatus == "isAdminCompleted" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Formal request</button>
            <button onClick={handleSampleShippingClick} disabled={!(sampleShippingStatus == "inUserProgress" || sampleShippingStatus == "isAdminCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${sampleShippingStatus == "isPending" || sampleShippingStatus == "inAdminProgress" ? "text-[#333333]" : "text-white"} ${sampleShippingStatus == "isPending" || sampleShippingStatus == "inAdminProgress" ? "bg-[#E2E8F0]" : sampleShippingStatus == "inUserProgress" ? "bg-[#FF914D]" : sampleShippingStatus == "inTransit" || sampleShippingStatus == "isAdminCompleted" ? "bg-[#79747E]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Sample Shipment</button>
            <button onClick={handleQualityCheckClick} disabled={!(qualityCheckStatus == "inUserProgress" || qualityCheckStatus == "isAdminCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${qualityCheckStatus == "isPending" || qualityCheckStatus == "inAdminProgress" ? "text-[#333333]" : "text-white"} ${qualityCheckStatus == "isPending" || qualityCheckStatus == "inAdminProgress" ? "bg-[#E2E8F0]" : qualityCheckStatus == "inUserProgress" || qualityCheckStatus == "isAdminCompleted" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Quality check</button>
            <button onClick={handleLibraryPrepClick} disabled={!(libraryPrepStatus == "inUserProgress" || libraryPrepStatus == "isAdminCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${libraryPrepStatus == "isPending" || libraryPrepStatus == "inAdminProgress" ? "text-[#333333]" : "text-white"} ${libraryPrepStatus == "isPending" || libraryPrepStatus == "inAdminProgress" ? "bg-[#E2E8F0]" : libraryPrepStatus == "inUserProgress" || libraryPrepStatus == "isAdminCompleted" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Library report</button>
            <button onClick={handleAnalysisProgressClick} disabled={!(analysisProgressStatus == "inUserProgress" || analysisProgressStatus == "isAdminCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${analysisProgressStatus == "isPending" || analysisProgressStatus == "inAdminProgress" ? "text-[#333333]" : "text-white"} ${analysisProgressStatus == "isPending" || analysisProgressStatus == "inAdminProgress" ? "bg-[#E2E8F0]" : analysisProgressStatus == "inUserProgress" || analysisProgressStatus == "isAdminCompleted" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Aanalysis start</button>
            <button onClick={handleAnalysisDoneClick} disabled={!(analysisDoneStatus == "inUserProgress" || analysisDoneStatus == "isAdminCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${analysisDoneStatus == "isPending" || analysisDoneStatus == "inAdminProgress" ? "text-[#333333]" : "text-white"} ${analysisDoneStatus == "isPending" || analysisDoneStatus == "inAdminProgress" ? "bg-[#E2E8F0]" : analysisDoneStatus == "inUserProgress" || analysisDoneStatus == "isAdminCompleted" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Aanalysis completed</button>
            <button onClick={handleAnalysisRawDataClick} disabled={!(analysisRawDataStatus == "inUserProgress" || analysisRawDataStatus == "isAdminCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${analysisRawDataStatus == "isPending" || analysisRawDataStatus == "inAdminProgress" ? "text-[#333333]" : "text-white"} ${analysisRawDataStatus == "isPending" || analysisRawDataStatus == "inAdminProgress" ? "bg-[#E2E8F0]" : analysisRawDataStatus == "inUserProgress" || analysisRawDataStatus == "isAdminCompleted" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Raw data</button>
            <button onClick={handleAnalysisSpecificationClick} disabled={!(analysisSpecificationStatus == "inUserProgress" || analysisSpecificationStatus == "isAdminCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${analysisSpecificationStatus == "isPending" || analysisSpecificationStatus == "inAdminProgress" ? "text-[#333333]" : "text-white"} ${analysisSpecificationStatus == "isPending" || analysisSpecificationStatus == "inAdminProgress" ? "bg-[#E2E8F0]" : analysisSpecificationStatus == "inUserProgress" || analysisSpecificationStatus == "isAdminCompleted" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Aanalysis Specification</button>
            <button onClick={handleInvoiceClick} disabled={!(invoiceStatus == "inUserProgress" || invoiceStatus == "isAdminCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${invoiceStatus == "isPending" || invoiceStatus == "inAdminProgress" ? "text-[#333333]" : "text-white"} ${invoiceStatus == "isPending" || invoiceStatus == "inAdminProgress" ? "bg-[#E2E8F0]" : invoiceStatus == "invoicerogress" || invoiceStatus == "isAdminCompleted" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Invoice</button>
            <button onClick={handlePaymentClick} disabled={!(paymentStatus == "inUserProgress" || paymentStatus == "isAdminCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${paymentStatus == "isPending" || paymentStatus == "inAdminProgress" ? "text-[#333333]" : "text-white"} ${paymentStatus == "isPending" || paymentStatus == "inAdminProgress" ? "bg-[#E2E8F0]" : paymentStatus == "paymentess" || paymentStatus == "isAdminCompleted" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Recipt</button>
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
      </div >
    </>
  )
}

export default NewOrderBox

const sendIcon = <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.9023 2.29297L11.9023 13.293" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M22.9023 2.29297L15.9023 22.293L11.9023 13.293L2.90234 9.29297L22.9023 2.29297Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>