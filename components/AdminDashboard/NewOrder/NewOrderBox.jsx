"use client"
import { useOrder } from '@/contexts/OrderContext'
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from 'react'
import { useSession } from "next-auth/react";
import FolderIcon from "../../../public/dashboard/folder.png"
import Image from 'next/image';
import Logo from '@/public/Images/Home/logo.png'
import file1 from '../../../public/dashboard/pdf.png'
import vector3 from '../../../public/dashboard/creation1.png'
import downloadIcon from '../../../public/dashboard/downloadIcon.png'
import CalculateCost from '../../../components/CalculateCost'
import LangDropdown from "../../../components/LangDropdown"


const NewOrderBox = () => {
  const router = useRouter();
  const path = usePathname();
  const orderIdDB = usePathname().split("/")[3]
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
  let userIdDB;

  const updateDataInDB = async(orderData)=>{
    const saveApiResponse = await fetch('/api/updateOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ order:orderData,orderIdDB:orderIdDB }),
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
  } = useOrder();

  const handleGenerateClick = () => {
    // setIsPopupVisible(true);
    //setOrderPopVisible(true);
    setActivePopup('costEstimateConfirmation');

  };
  const handleGenerateClick1 = () => {
    setIsPopupVisible(true);
    //setOrderPopVisible(true);
    setActivePopup('payment');
    setIsPopUp1(false);

  };
  const sampleDelelte = () => {
    setActivePopup('deletePopUp');
    //setOrderPopVisible(true);
    //setActivePopup('qulalityCheck ');

  }
  const sampleConfirm = () => {
    setActivePopup('confirmPopUp');
    //setOrderPopVisible(true);
    //setActivePopup('qulalityCheck ');

  }

  const handleDeleteOk = () => {
    //setDeletePopUp(false);
    //setOrderPopVisible(true);
    //setActivePopup('formalRequest');
    setOrderPopVisible(false);
    setSampleShipping("isCompleted")
    updateDataInDB({
      sampleShippingStatus:"isCompleted",
    })

  };
  const handleConfirmOk = () => {
    // setConfirmPopUp(false);
    setOrderPopVisible(false);
    //setOrderPopVisible(true);
    //setActivePopup('formalRequest');
    setSampleShipping("isCompleted")
    setQualityCheckStatus("inUserProgress")
    updateDataInDB({
      sampleShippingStatus:"isCompleted",
      qualityCheckStatus:"inUserProgress"
    })

  };
  const handleClick1 = () => {
    setIsPopUp1(true);
    //setOrderPopVisible(true);
    //setActivePopup('formalRequest');

  };

  const handleOrderCreation = () => {
    //router.push(`/${language}/${orderIdDB}/Admin_Restricted/NewOrder/OrderCreationPage`)
    setOrderPopVisible(true);
    setActivePopup('requestSheet');
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
    setActivePopup('sampleShippingConfirmation');
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
      requestSheetStatus:"isCompleted",
      costEstimateStatus:"inAdminProgress"
    })
  }


  const handleConfirmCostEstimate = () => {
    setOrderPopVisible(false);
    setIsPopupVisible(false);
    setCostEstimateStatus("inUserProgress");
    updateDataInDB({
      costEstimateStatus:"inUserProgress"
    })
  }

  
  const handleConfirmFormalRequest = () => {
    setFormalRequestStatus("isCompleted")
    setSampleShippingStatus("inUserProgress")
    setOrderPopVisible(false);
    setActivePopup('sampleShippingConfirmation');
    updateDataInDB({
      formalRequestStatus:"isCompleted",
      sampleShippingStatus:"inUserProgress"
    })
  }

  const handleConfirmSampleShipping = () => {
    console.log(sampleShippingStatus)
    console.log("click on ok from sample shipping")
    setIsPopupVisible(false);
    setOrderPopVisible(false);
    setActivePopup('');
    setSampleShipping((prevState) => ({
      ...prevState,
      status: "inProgress",
    }));
  }

  const handleConfirQualityCheck = () => {
    console.log(sampleShippingStatus)
    console.log("click on ok from sample shipping")
    setIsPopupVisible(false);
    setOrderPopVisible(false);
    setActivePopup('');
    setQualityCheckStatus("isCompleted")
    setLibraryPrepStatus("inAdminProgress")
    updateDataInDB({
      qualityCheckStatus:"isCompleted",
      libraryPrepStatus:"inAdminProgress"
    })
  }
  const handleLibraryPrepConfirmation = () => {
    console.log(sampleShippingStatus)
    console.log("click on ok from sample shipping")
    setOrderPopVisible(false);
    setActivePopup('');
    setLibraryPrepStatus('inUserProgress')
    updateDataInDB({
     
      libraryPrepStatus:"inUserProgress"
    })
    
  }
  const handleAnalysisDoneConfirmation = () => {
    console.log(sampleShippingStatus)
    console.log("click on ok from sample shipping")
    setOrderPopVisible(false);
    setActivePopup('');
    setAnalysisDone((prevState) => ({
      ...prevState,
      status: "isCompleted",
    }));
    setAnalysisRawData((prevState) => ({
      ...prevState,
      status: "inProgress",
    }));
  }
  const handleAnalysisDone = () => {
    console.log(sampleShippingStatus)
    console.log("click on ok from sample shipping")
    setOrderPopVisible(false);
    setActivePopup('');
    setAnalysisProgress((prevState) => ({
      ...prevState,
      status: "isCompleted",
    }));
    setAnalysisDone((prevState) => ({
      ...prevState,
      status: "inProgress",
    }));
  }


  const handleAnalysisRawDataConfirm = () => {
    setOrderPopVisible(false);
    setActivePopup('');
    setAnalysisRawDataStatus("isCompleted")
    setAnalysisSpecificationStatus("inUserProgress")
    updateDataInDB({

      analysisRawDataStatus:"isCompleted",
      analysisSpecificationStatus:"inUserProgress"

    })
  }

  const handleAnalysisSpecification=()=>{
    setOrderPopVisible(false);
    setActivePopup('');
    setAnalysisSpecificationStatus("isCompleted")
    setInvoiceStatus("inAdminProgress")
    updateDataInDB({

      analysisSpecificationStatus:"isCompleted",
      invoiceStatus:"inAdminProgress"
    })

  }


  const handleInvoice = () => {
    setOrderPopVisible(false);
    setActivePopup('');
    setInvoiceStatus("inUserProgress")
    updateDataInDB({
      invoiceStatus:"inUserProgress"
    })
  }
 
  const handleConfirmPayment= () => {
    setOrderPopVisible(false);
    setActivePopup('');
    setPaymentStatus("inUserProgress")
    updateDataInDB({
      paymentStatus:"inUserProgress"
    })
  }




  const handleClickOutside = (event) => {
    if (orderPopUpBoxRef.current && !orderPopUpBoxRef.current.contains(event.target)) {
      setOrderPopVisible(false);
    }
  };



  useEffect(() => {
    if (sampleShippingStatus == "isPending" && formalRequestStatus == "isCompleted") {
      setActivePopup("sampleShippingConfirmation");
      setOrderPopVisible(true);
      setUploadedFile({ vector3 });
    }
  }, [])

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

  useEffect(()=>{
    const fetchOrderByID = async(orderId)=>{
      try{
        const response = await fetch('/api/fetchOrder', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({orderId:orderId}),
        });
        const order = await response.json();
        const orderData = order.data
        console.log(orderData.requestSheet)
        console.log(orderData.costEstimate)
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
        setLibraryCheckReportLink(orderData.libraryPrepReportLink);
        setAnalysisProgressStatus(orderData.analysisProgressStatus);
        setAnalysisDoneStatus(orderData.analysisDoneStatus);
        setAnalysisRawDataStatus(orderData.analysisRawDataStatus);
        setRawDataLink(orderData.analysisRawDataRawDataLink);
        setAnalysisSpecificationStatus(orderData.analysisSpecificationStatus);
        setAnalysisSpecificationReportLink(orderData.analysisSpecificationReportLink);
        setInvoiceStatus(orderData.invoiceStatus);
        setInvoiceLink(orderData.invoiceLink);
        setPaymentStatus(orderData.paymentStatus);
        setPaymentRecieptLink(orderData.paymentRecieptLink);
      }catch(error){
        console.log("fetch order error ",error)
      }
    }

    fetchOrderByID(orderIdDB);
  },[])

  console.log("orderid",orderId)

  const handleSendMessage = ()=>{
    router.push(`${path}/${userIdDB}`)
  }

  return (
    <>
      <div className='text-[#333333] mb-[14px] flex flex-col justify-between h-full'>
        {orderPopVisible && (
          <div className='fixed top-0 left-0 backdrop-blur-[1px] flex items-center justify-center w-[100vw] h-[100vh] bg-[#00000066]'>
            <div ref={orderPopUpBoxRef}>
              {activePopup === 'requestSheet' && (
                <div className='p-[10px] w-[298px] h-[197px] md:h-[334px] md:w-[760px] md:p-[120px] flex flex-col gap-[24px] items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <div className='flex flex-col gap-[12px] md:gap-[24px]'>
                    <span className='text-[16px] font-DM-Sans text-center font-bold md:text-[32px] md:leading-[40px] text-[#333333]'>Request Sheet</span>
                    <span className='text-[12px] font-DM-Sans text-start font-normal md:text-[20px] md:leading-[34px] text-[#333333]'>Click to download the Request Sheet. Once done, review the sheet and click confirm to proceed further.</span>
                  </div>
                  <div className='flex items-center justify-center gap-[12px]'>
                    <a href={requestSheetLink.split("?")[0]} download="RequestSheet">
                      <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]">Download</button>
                    </a>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={handleConfirmRequestSheet}>Confirm</button>
                  </div>
                </div>
              )}
              {activePopup === 'costEstimate' && (
                <div className="bg-white rounded-md shadow-lg md:py-[26px] md:px-[12px] md:w-[1199px] mx-5 px-4 md:mx-auto my-10 font-DM-Sans md:min-h-[576px]">
                  <h2 className="text-[18px] md:text-[22px] font-medium text-center mb-4 md:mb-6">Calculate Cost</h2>
                  <div className='border border-dashed'></div>
                  <div className='border border-dashed pt-[20px]'></div>

                  <div className="overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                    <table className="w-full mb-6 min-w-[768px]">
                      <thead>
                        <tr className="text-left font-medium text-sm">
                          <th className="py-2">Sample ID</th>
                          <th className="py-2">Sample Name</th>
                          <th className="py-2">Quality check fees</th>
                          <th className="py-2">Library adjustment fees</th>
                          <th className="py-2">Next gen. sequencer analysis fees</th>
                          <th className="py-2">Tax</th>
                          <th className="py-2">Others</th>
                          <th className="py-2">Amount</th>
                        </tr>
                      </thead>

                      <tbody className='border-t'>
                        {[1, 2, 3].map((_, index) => (
                          <tr key={index} className="text-[12px] font-normal">
                            <td className="py-[12px] md:w-[98px] pr-[20px]">
                              <input
                                type="text"
                                className="border rounded-md w-full p-2"
                                placeholder={`10${index + 1}`}
                              />
                            </td>
                            <td className="md:w-[108px] py-[12px] pr-[20px]">
                              <input
                                type="text"
                                className="border rounded-md w-full p-2"
                                placeholder={`${index === 0 ? 'Red' : index === 1 ? 'White' : 'Yellow'} mouse`}
                              />
                            </td>
                            <td className="md:w-[156px] py-[12px]">
                              <div className='flex gap-[2px]'>
                                <div className="w-[108px] flex-shrink-0 group">
                                  <input
                                    type="text"
                                    className="border rounded-md w-full p-2"
                                    placeholder=""
                                  />
                                </div>
                                <div className="w-[66px] flex-shrink-0">
                                  <div className='group'>
                                    <div className={`rounded-md bg-gray-200 group-focus-within:gradient-primary`} >
                                      <LangDropdown
                                        value={currency}
                                        onChange={(e) => setCurrency(e.target.value)}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="md:w-[156px] py-[12px]">
                              <div className='flex gap-[2px]'>
                                <div className="w-[108px] flex-shrink-0 group">
                                  <input
                                    type="text"
                                    className="border rounded-md w-full p-2"
                                    placeholder=""
                                  />
                                </div>
                                <div className="w-[66px] flex-shrink-0">
                                  <div className='group'>
                                    <div className={`rounded-md bg-gray-200 group-focus-within:gradient-primary`} >
                                      <LangDropdown
                                        value={currency}
                                        onChange={(e) => setCurrency(e.target.value)}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="md:w-[156px] py-[12px]">
                              <div className='flex gap-[2px]'>
                                <div className="md:w-[108px] flex-shrink-0 group">
                                  <input
                                    type="text"
                                    className="border rounded-md w-full p-2"
                                    placeholder=""
                                  />
                                </div>
                                <div className="w-[66px] flex-shrink-0">
                                  <div className='group'>
                                    <div className={`rounded-md bg-gray-200 group-focus-within:gradient-primary`} >
                                      <LangDropdown
                                        value={currency}
                                        onChange={(e) => setCurrency(e.target.value)}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="md:w-[108px] py-[12px] pr-[20px]">
                              <input
                                type="text"
                                className="border rounded-md w-full p-2 bg-[#33333314]"
                                placeholder="JPY"
                              />
                            </td>
                            <td className="md:w-[108px] py-[12px] pr-[20px]">
                              <input
                                type="text"
                                className="border rounded-md w-full p-2 bg-[#33333314]"
                                placeholder=""
                              />
                            </td>
                            <td className="md:w-[108px]">
                              <input
                                type="text"
                                className="border rounded-md w-full p-2"
                                placeholder="JPY"
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="border-t font-medium text-[14px]">
                          <td colSpan="7" className="text-right py-2 pr-6">Total</td>
                          <td className="md:w-[108px]">
                            <input
                              type="text"
                              className="border rounded-md w-full p-2"
                              placeholder="JPY"
                            />
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div className="flex items-center text-[14px] font-normal">
                    <input type="checkbox" id="tax" className="mr-2" />
                    <label htmlFor="tax">Click to enter tax percent.</label>
                  </div>
                  <div className="flex items-center mb-[6px] text-[14px] font-normal">
                    <input type="checkbox" id="amount" className="mr-2" />
                    <label htmlFor="amount">Click to enter other amount.</label>
                  </div>
                  <p className="text-[14px] font-normal mb-6">
                    Note: The tax amount is subjected to the country and region. Other charges may include shipping or handling fees.
                  </p>
                  <div className='w-full flex items-end justify-end gap-[12px] pb-4'>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]">Back</button>
                    <button onClick={handleGenerateClick} className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]">Generate</button>
                  </div>

                </div>
              )}
              {activePopup === 'costEstimateConfirmation' && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                  <div className='md:h-[334px] md:w-[564px] md:py-[65px] md:px-[48px] flex flex-col items-center justify-between bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                    <span className='w-full font-DM-Sans font-bold md:text-[32px] md:leading-[40px] text-[#333333]'>Confirmation Message</span>
                    <span className='w-full font-DM-Sans font-normal md:text-[20px] md:leading-[34px] text-[#333333]'>Your formal request has been accepted and Medbank is requesting the sample shipment.</span>
                    <button
                      className="w-full h-[50px] md:h-[48px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]"
                      onClick={handleConfirmCostEstimate}
                    >
                      OK
                    </button>
                  </div>
                </div>
              )}
              {activePopup === 'formalRequest' && (
                <div className='md:h-[334px] md:w-[564px] md:py-[65px] md:px-[48px] flex flex-col items-center justify-between bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <span className='w-full font-DM-Sans font-bold md:text-[32px] md:leading-[40px] text-[#333333]'>Confirmation Message</span>
                  <span className='w-full font-DM-Sans font-normal md:text-[20px] md:leading-[34px] text-[#333333]'>Your formal request has been received and an automated confirmation message has been sent to your email.</span>
                  <button className="w-full h-[50px] md:h-[48px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={handleConfirmFormalRequest}>OK</button>
                </div>
              )}
              {activePopup === 'sampleShippingConfirmation' && (
                <div className='w-[298px] h-[197px] md:h-[287px] md:w-[658px] md:p-[10px] flex flex-col gap-[24px] items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <div className='flex flex-col gap-[24px]'>
                    <span className='font-DM-Sans text-center font-bold md:text-[32px] md:leading-[40px] text-[#333333]'>Confirmation Message</span>
                    <span className='font-DM-Sans text-center font-normal md:text-[20px] md:leading-[34px] text-[#333333]'>Please confirm the Formal Request.</span>
                  </div>
                  <div className='flex items-center justify-center gap-[12px]'>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick= { sampleDelelte}>Cancel</button>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={sampleConfirm}>Confirm</button>
                  </div>
                </div>
              )}
              {/* {activePopup === 'sampleShipping' && (
                <div className='w-[298px] h-[197px] md:h-[287px] md:w-[658px] md:p-[10px] flex flex-col gap-[24px] items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <div className='flex flex-col gap-[24px]'>
                    <span className='font-DM-Sans text-center font-bold md:text-[32px] md:leading-[40px] text-[#333333]'>Confirmation Message</span>
                    <span className='font-DM-Sans text-center font-normal md:text-[20px] md:leading-[34px] text-[#333333]'> Please confirm the condition of the received sample</span>
                  </div>
                  <div className='flex items-center justify-center gap-[6px] md:gap-[12px]'>
                    <button className="h-[40px] md:h-[48px] w-[136px] md:w-[268px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center md:leading-[24px]" onClick={sampleDelelte}>Sample Defect Notification </button>
                    <button className="h-[40px] md:h-[48px] w-[136px] md:w-[268px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center md:leading-[24px]" onClick={sampleConfirm}>Sample Receipt Confirmation</button>
                  </div>
                </div>
              )} */}
              {activePopup==='deletePopUp' && (
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
              {activePopup==='confirmPopUp' && (
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
                <div className='p-[16px] w-[356px] h-[290px] md:h-[435px] md:w-[760px] md:py-[26px] flex flex-col gap-[24px] items-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <div className='h-[40px] md:h-[50px] flex items-start justify-center w-full text-center border-b-[1px] border-dotted border-[#33333340]'>
                    <span className='font-DM-Sans text-center font-medium text-[16px] md:text-[22px] md:leading-[24px] text-[#333333]'>Download Cost Estimation</span>
                  </div>
                  <div className='w-[313px] h-[154px] md:w-[490px] md:h-[203px] flex items-center justify-center border-[0.4px] border-[#0033DD] border-dashed rounded-[6px]'>
                    <div className='flex flex-col items-center justify-center gap-[14px]'>
                      <Image className='w-[32px] h-[24px] md:w-[51px] md:h-[51px]' src={FolderIcon} alt="File"></Image>
                      <div className='font-DM-Sans font-normal text-[10px] md:text-[14px] md:leading-[18px] text-[#606060] text-center'>
                        <span>RequestSheet.pdf</span><br />
                        <span>1.2MB</span>
                      </div>
                    </div>
                  </div>
                  <div className='w-full md:w-[490px] flex items-center justify-end gap-[12px]'>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={() => { setOrderPopVisible(false) }}>Back</button>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={handleConfirQualityCheck}>Download</button>
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
                        type="checkbox"
                        className="form-checkbox accent-[#3e8ca7]"
                        checked={check}
                        onChange={() => setCheck(!check)}
                        required
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
                      <button className='md:hidden h-[40px] md:h-[48px] w-[250px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]'onClick={handleLibraryPrepConfirmation}>Proceed</button>
                      <button className='hidden h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] md:flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px] ' >Cancel</button>
                      <button className='hidden h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] md:flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]'onClick={handleLibraryPrepConfirmation}>Proceed</button>
                    </div>

                  </div>
                </div>
              )}
              {activePopup === 'analysisProgress' && (
                <div className='w-[298px] h-[221px] md:h-[278px] md:w-[445px] p-[24px] md:p-[10px] flex flex-col gap-[24px] items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <div className='flex flex-col gap-[24px]'>
                    <span className='font-DM-Sans text-center font-bold md:text-[32px] md:leading-[40px] text-[#333333]'>Confirmation Message</span>
                    <span className='font-DM-Sans text-center font-normal md:text-[20px] md:leading-[34px] text-[#333333]'>Start the Analysis.</span>
                  </div>
                  <div className='flex items-center justify-center gap-[12px]'>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={() => { setOrderPopVisible(false) }}>Cancel</button>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={handleSampleShipping}>Start</button>
                  </div>
                </div>
              )}
              {activePopup === 'analysisDone' && (
                <div className='w-[298px] h-[221px] md:h-[278px] md:w-[445px] p-[24px] md:p-[10px] flex flex-col gap-[24px] items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <div className='flex flex-col gap-[24px]'>
                    <span className='font-DM-Sans text-center font-bold md:text-[32px] md:leading-[40px] text-[#333333]'>Confirmation Message</span>
                    <span className='font-DM-Sans text-center font-normal md:text-[20px] md:leading-[34px] text-[#333333]'>Analysis has completed.</span>
                  </div>
                  <div className='flex items-center justify-center gap-[12px]'>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={() => { setOrderPopVisible(false) }}>Cancel</button>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={handleSampleShipping}>Submit</button>
                  </div>
                </div>
              )}
              {activePopup === 'analysisRawData' && (
                <div className='font-DM-Sans flex flex-col w-[352px] h-[197px] md:h-[386px] md:w-[760px] p-[28px] md:p-12  items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <div className='text-[22px] md:text-[22px] font-bold font-DM-Sans pb-[6px] md:pb-8 leading-[24px]'>Raw Data</div>
                  <div className='flex flex-col gap-[6px] md:gap-[12px]'>
                    <div className="text-xs md:text-base font-normal flex items-center p-4 underline text-center bg-white border-[0.5px] solid border-[#33333326] rounded-lg md:mt-2 max-w-[331px] md:max-w-[527px] max-h-[32px] md:max-h-[50px] justify-center">
                      https:rawdatamedbank.com
                    </div>
                    <label className="inline-flex items-center pt-[8px] md:pt-4">
                      <input
                        type="checkbox"
                        className="form-checkbox accent-[#3e8ca7]"
                        checked={check}
                        onChange={() => setCheck(!check)}
                        required
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
                        type="checkbox"
                        className="form-checkbox accent-[#3e8ca7]"
                        checked={check}
                        onChange={() => setCheck(!check)}
                        required
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
                      <button className='md:hidden h-[40px] md:h-[48px] w-[250px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]'onClick={handleAnalysisRawDataConfirm}>Proceed to library preparation</button>
                      <button className='hidden h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] md:flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px] ' >Cancel</button>
                      <button className='hidden h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] md:flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]'onClick={handleAnalysisRawDataConfirm}>Proceed</button>
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
                        type="checkbox"
                        className="form-checkbox accent-[#3e8ca7]"
                        checked={check}
                        onChange={() => setCheck(!check)}
                        required
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
                      <button className='md:hidden h-[40px] md:h-[48px] w-[250px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]'onClick={handleAnalysisSpecification}>Proceed</button>
                      <button className='hidden h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] md:flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px] ' >Cancel</button>
                      <button className='hidden h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] md:flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]'onClick={handleAnalysisSpecification}>Proceed</button>
                    </div>

                  </div>
                </div>
              )}
              {activePopup === 'invoice' && (
                <div className="bg-white rounded-md shadow-lg md:py-[26px] md:px-[12px] md:w-[1199px] mx-5 px-4 md:mx-auto my-10 font-DM-Sans md:min-h-[576px]">
                  <h2 className="text-[18px] md:text-[22px] font-medium text-center mb-4 md:mb-6">Calculate Cost</h2>
                  <div className='border border-dashed'></div>
                  <div className='border border-dashed pt-[20px]'></div>

                  <div className="overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                    <table className="w-full mb-6 min-w-[768px]">
                      <thead>
                        <tr className="text-left font-medium text-sm">
                          <th className="py-2">Sample ID</th>
                          <th className="py-2">Sample Name</th>
                          <th className="py-2">Quality check fees</th>
                          <th className="py-2">Library adjustment fees</th>
                          <th className="py-2">Next gen. sequencer analysis fees</th>
                          <th className="py-2">Tax</th>
                          <th className="py-2">Others</th>
                          <th className="py-2">Amount</th>
                        </tr>
                      </thead>

                      <tbody className='border-t'>
                        {[1, 2, 3].map((_, index) => (
                          <tr key={index} className="text-[12px] font-normal">
                            <td className="py-[12px] md:w-[98px] pr-[20px]">
                              <input
                                type="text"
                                className="border rounded-md w-full p-2"
                                placeholder={`10${index + 1}`}
                              />
                            </td>
                            <td className="md:w-[108px] py-[12px] pr-[20px]">
                              <input
                                type="text"
                                className="border rounded-md w-full p-2"
                                placeholder={`${index === 0 ? 'Red' : index === 1 ? 'White' : 'Yellow'} mouse`}
                              />
                            </td>
                            <td className="md:w-[156px] py-[12px]">
                              <div className='flex gap-[2px]'>
                                <div className="w-[108px] flex-shrink-0 group">
                                  <input
                                    type="text"
                                    className="border rounded-md w-full p-2"
                                    placeholder=""
                                  />
                                </div>
                                <div className="w-[66px] flex-shrink-0">
                                  <div className='group'>
                                    <div className={`rounded-md bg-gray-200 group-focus-within:gradient-primary`} >
                                      <LangDropdown
                                        value={currency}
                                        onChange={(e) => setCurrency(e.target.value)}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="md:w-[156px] py-[12px]">
                              <div className='flex gap-[2px]'>
                                <div className="w-[108px] flex-shrink-0 group">
                                  <input
                                    type="text"
                                    className="border rounded-md w-full p-2"
                                    placeholder=""
                                  />
                                </div>
                                <div className="w-[66px] flex-shrink-0">
                                  <div className='group'>
                                    <div className={`rounded-md bg-gray-200 group-focus-within:gradient-primary`} >
                                      <LangDropdown
                                        value={currency}
                                        onChange={(e) => setCurrency(e.target.value)}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="md:w-[156px] py-[12px]">
                              <div className='flex gap-[2px]'>
                                <div className="md:w-[108px] flex-shrink-0 group">
                                  <input
                                    type="text"
                                    className="border rounded-md w-full p-2"
                                    placeholder=""
                                  />
                                </div>
                                <div className="w-[66px] flex-shrink-0">
                                  <div className='group'>
                                    <div className={`rounded-md bg-gray-200 group-focus-within:gradient-primary`} >
                                      <LangDropdown
                                        value={currency}
                                        onChange={(e) => setCurrency(e.target.value)}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="md:w-[108px] py-[12px] pr-[20px]">
                              <input
                                type="text"
                                className="border rounded-md w-full p-2 bg-[#33333314]"
                                placeholder="JPY"
                              />
                            </td>
                            <td className="md:w-[108px] py-[12px] pr-[20px]">
                              <input
                                type="text"
                                className="border rounded-md w-full p-2 bg-[#33333314]"
                                placeholder=""
                              />
                            </td>
                            <td className="md:w-[108px]">
                              <input
                                type="text"
                                className="border rounded-md w-full p-2"
                                placeholder="JPY"
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="border-t font-medium text-[14px]">
                          <td colSpan="7" className="text-right py-2 pr-6">Total</td>
                          <td className="md:w-[108px]">
                            <input
                              type="text"
                              className="border rounded-md w-full p-2"
                              placeholder="JPY"
                            />
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div className="flex items-center text-[14px] font-normal">
                    <input type="checkbox" id="tax" className="mr-2" />
                    <label htmlFor="tax">Click to enter tax percent.</label>
                  </div>
                  <div className="flex items-center mb-[6px] text-[14px] font-normal">
                    <input type="checkbox" id="amount" className="mr-2" />
                    <label htmlFor="amount">Click to enter other amount.</label>
                  </div>
                  <p className="text-[14px] font-normal mb-6">
                    Note: The tax amount is subjected to the country and region. Other charges may include shipping or handling fees.
                  </p>
                  <div className='w-full flex items-end justify-end gap-[12px] pb-4'>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]">Back</button>
                    <button onClick={handleClick1} className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]">Generate</button>
                  </div>

                </div>
              )}
              {isPopUp1 && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                  <div className='md:h-[334px] md:w-[564px] md:py-[65px] md:px-[48px] flex flex-col items-center justify-between bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                    <span className='w-full font-DM-Sans font-bold md:text-[32px] md:leading-[40px] text-[#333333]'>Confirmation Message6</span>
                    <span className='w-full font-DM-Sans font-normal md:text-[20px] md:leading-[34px] text-[#333333]'>Your formal request has been accepted and Medbank is requesting the sample shipment.</span>
                    <button
                      className="w-full h-[50px] md:h-[48px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]"
                      onClick={handleGenerateClick1}
                    >
                      OK
                    </button>
                  </div>
                </div>
              )}
              {isPopupVisible && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                  <div className='md:h-[334px] md:w-[564px] md:py-[65px] md:px-[48px] flex flex-col items-center justify-between bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                    <span className='w-full font-DM-Sans font-bold md:text-[32px] md:leading-[40px] text-[#333333]'>Confirmation Message</span>
                    <span className='w-full font-DM-Sans font-normal md:text-[20px] md:leading-[34px] text-[#333333]'>Your formal request has been accepted and Medbank is requesting the sample shipment.</span>
                    <button
                      className="w-full h-[50px] md:h-[48px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]"
                      onClick={handleInvoice}
                    >
                      OK
                    </button>
                  </div>
                </div>
              )}
              {activePopup === 'payment' && (
                <div className='md:h-[435px] md:w-[760px] md:py-[26px] flex flex-col gap-[24px] items-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <div className='md:h-[50px] flex items-center justify-center w-full text-center border-b-[1px] border-dotted border-[#33333340]'>
                    <span className='font-DM-Sans text-center font-medium md:text-[22px] md:leading-[24px] text-[#333333]'>Download Receipt</span>
                  </div>
                  <div className='md:w-[490px] md:h-[203px] flex items-center justify-center border-[0.4px] border-[#0033DD] border-dashed rounded-[6px]'>
                    <div className='flex flex-col items-center justify-center gap-[14px]'>
                      <Image className='md:w-[51px] md:h-[51px]' src={FolderIcon} alt="File"></Image>
                      <div className='font-DM-Sans font-normal md:text-[14px] md:leading-[18px] text-[#606060] text-center'>
                        <span>Receipt.pdf</span><br />
                        <span>1.2MB</span>
                      </div>
                    </div>
                  </div>
                  <div className='md:w-[490px] flex items-center justify-end gap-[12px]'>
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
            <button onClick={handleOrderCreation} disabled={!(requestSheetStatus == "inAdminProgress")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${requestSheetStatus == "isPending" ? "text-[#333333]" : "text-white"} ${requestSheetStatus == "isPending" ? "bg-[#E2E8F0]" : requestSheetStatus == "inAdminProgress" ? "bg-[#FF914D]" : requestSheetStatus == "inUserProgress" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Request sheet sent</button>
            <button onClick={handleCostEstimateClick} disabled={!(costEstimateStatus == "inAdminProgress")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${costEstimateStatus == "isPending" ? "text-[#333333]" : "text-white"} ${costEstimateStatus == "isPending" ? "bg-[#E2E8F0]" : costEstimateStatus == "inAdminProgress" ? "bg-[#FF914D]" : costEstimateStatus == "inUserProgress" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Cost estimation</button>
            <button onClick={handleFormalRequestClick} disabled={!(formalRequestStatus == "inAdminProgress")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${formalRequestStatus == "isPending" ? "text-[#333333]" : "text-white"} ${formalRequestStatus == "isPending" ? "bg-[#E2E8F0]" : formalRequestStatus == "inAdminProgress" ? "bg-[#FF914D]" : formalRequestStatus == "inUserProgress" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Formal request</button>
            <button onClick={handleSampleShippingClick} disabled={!(sampleShippingStatus == "inAdminProgress")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${sampleShippingStatus == "isPending" ? "text-[#333333]" : "text-white"} ${sampleShippingStatus == "isPending" ? "bg-[#E2E8F0]" : sampleShippingStatus == "inAdminProgress" ? "bg-[#FF914D]" : sampleShippingStatus == "inUserProgress" ? "bg-[#FF914D]" : sampleShippingStatus == "inTransit" ? "bg-[#79747E]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Sample recieved</button>
            <button onClick={handleQualityCheckClick} disabled={!(qualityCheckStatus == "inAdminProgress")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${qualityCheckStatus == "isPending" ? "text-[#333333]" : "text-white"} ${qualityCheckStatus == "isPending" ? "bg-[#E2E8F0]" : qualityCheckStatus == "inAdminProgress" ? "bg-[#FF914D]" : qualityCheckStatus == "inUserProgress" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Quality check</button>
            <button onClick={handleLibraryPrepClick} disabled={!(libraryPrepStatus == "inAdminProgress")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${libraryPrepStatus == "isPending" ? "text-[#333333]" : "text-white"} ${libraryPrepStatus == "isPending" ? "bg-[#E2E8F0]" : libraryPrepStatus == "inAdminProgress" ? "bg-[#FF914D]" : libraryPrepStatus == "inUserProgress" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Library report</button>
            <button onClick={handleAnalysisProgressClick} disabled={!(analysisProgressStatus == "inAdminProgress")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${analysisProgressStatus == "isPending" ? "text-[#333333]" : "text-white"} ${analysisProgressStatus == "isPending" ? "bg-[#E2E8F0]" : analysisProgressStatus == "inAdminProgress" ? "bg-[#FF914D]" : analysisProgressStatus == "inUserProgress" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Aanalysis start</button>
            <button onClick={handleAnalysisDoneClick} disabled={!(analysisDoneStatus == "inAdminProgress")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${analysisDoneStatus == "isPending" ? "text-[#333333]" : "text-white"} ${analysisDoneStatus == "isPending" ? "bg-[#E2E8F0]" : analysisDoneStatus == "inAdminProgress" ? "bg-[#FF914D]" : analysisDoneStatus == "inUserProgress" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Aanalysis completed</button>
            <button onClick={handleAnalysisRawDataClick} disabled={!(analysisRawDataStatus == "inAdminProgress")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${analysisRawDataStatus == "isPending" ? "text-[#333333]" : "text-white"} ${analysisRawDataStatus == "isPending" ? "bg-[#E2E8F0]" : analysisRawDataStatus == "inAdminProgress" ? "bg-[#FF914D]" : analysisRawDataStatus == "inUserProgress" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Raw data</button>
            <button onClick={handleAnalysisSpecificationClick} disabled={!(analysisSpecificationStatus == "inAdminProgress")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${analysisSpecificationStatus == "isPending" ? "text-[#333333]" : "text-white"} ${analysisSpecificationStatus == "isPending" ? "bg-[#E2E8F0]" : analysisSpecificationStatus == "inAdminProgress" ? "bg-[#FF914D]" : analysisSpecificationStatus == "inUserProgress" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Aanalysis Specification</button>
            <button onClick={handleInvoiceClick} disabled={!(invoiceStatus == "inAdminProgress")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${invoiceStatus == "isPending" ? "text-[#333333]" : "text-white"} ${invoiceStatus == "isPending" ? "bg-[#E2E8F0]" : invoiceStatus == "inAdminProgress" ? "bg-[#FF914D]" : invoiceStatus == "inUserProgress" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Invoice</button>
            <button onClick={handlePaymentClick} disabled={!(paymentStatus == "inAdminProgress")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${paymentStatus == "isPending" ? "text-[#333333]" : "text-white"} ${paymentStatus == "isPending" ? "bg-[#E2E8F0]" : paymentStatus == "inAdminProgress" ? "bg-[#FF914D]" : paymentStatus == "inUserProgress" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Recipt</button>
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
            <button onClick={handleSendMessage} className="h-[48px] w-[48px] p-[12.5px] rounded-md bg-[#3E8DA7]">{sendIcon}</button>
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