import React, { createContext, useContext, useState } from "react";

// Create the context
const OrderContext = createContext();

// Custom hook for consuming context
export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orderTitle,setOrderTitle]=useState("");
  const [requestSheet,setRequestSheet]=useState({
    status:"isCompleted",
    requestSheetLink:""
  });
  const [costEstimate,setCostEstimate]=useState({
    status:"isCompleted",
    costEstimationLink:""
  });
  const [formalRequest,setFormalRequest]=useState({
    status:"inProgress",
    sampleShippingStatus:""
  });
  const [sampleShipping,setSampleShipping]=useState({
    status:"isTransit",
    sampleShippingStatus:"ok"
  });
  const [qualityCheck,setQualityCheck]=useState({
    status:"isPending",
    qualityCheckReportLink:""
  });
  const [libraryPrep,setLibraryPrep]=useState({
    status:"isPending",
    libraryCheckReportLink:""
  });
  const [analysisProgress,setAnalysisProgress]=useState({
    status:"isPending",
  });
  const [analysisDone,setAnalysisDone]=useState({
    status:"isPending",
  });
  const [analysisRawData,setAnalysisRawData]=useState({
    status:"isPending",
    rawDataLink:""
  });
  const [analysisSpecification,setAnalysisSpecification]=useState({
    status:"isPending",
    analysisSpecificationReportLink:""
  });
  const [invoice,setInvoice]=useState({
    status:"isPending",
    invoiceLink:""
  });
  const [payment,setPayment]=useState({
    status:"isPending",
    paymentRecieptLink:""
  });

  return (
    <OrderContext.Provider
    value={{
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
    }}
    >
      {children}
    </OrderContext.Provider>
  );
};
