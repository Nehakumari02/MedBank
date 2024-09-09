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
import { useDropzone } from 'react-dropzone';
import folder1 from "../../../public/dashboard/folder.png"
import { toast } from '@/hooks/use-toast';
import { Progress } from "@/components/ui/progress"


const NewOrderBox = () => {
  // const { getRootProps, getInputProps } = useDropzone();
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

  const [currency, setCurrency] = useState("JPY");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isPopUp1, setIsPopUp1] = useState(false);
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [confirmPopUp, setConfirmPopUp] = useState(false);
  const [userIdDB, setUserIdDB] = useState("");
  const [uploadPercentage,setUploadPercentage] = useState(0);

  const [uploadStatus,setUploadStatus] = useState(false);

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

  const updateDataInDB1 = async (samples) => {
    const saveApiResponse = await fetch('/api/get-quotation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ samples: samples, orderIdDB: orderIdDB }),
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
  const [disabled, setDisabled] = useState(false);
  const [isTaxChecked, setIsTaxChecked] = useState(false);
  const [isAmountChecked, setIsAmountChecked] = useState(false);
  const [isInvoiceChecked1, setIsInvoiceChecked1] = useState(false);
  const [isInvoiceChecked2, setIsInvoiceChecked2] = useState(false);

  const [samples, setSamples] = useState([
    { id: '', name: '', qualityFees: '', libraryFees: '', analysisFees: '', tax: '', others: '', total: '' },
    { id: '', name: '', qualityFees: '', libraryFees: '', analysisFees: '', tax: '', others: '', total: '' },
    { id: '', name: '', qualityFees: '', libraryFees: '', analysisFees: '', tax: '', others: '', total: '' }
  ]);
  const [grandTotal, setGrandTotal] = useState(0);

  const calculateTotal = (sample) => {
    const qualityFees = parseFloat(sample.qualityFees || 0);
    const libraryFees = parseFloat(sample.libraryFees || 0);
    const analysisFees = parseFloat(sample.analysisFees || 0);
    const others = parseFloat(sample.others || 0);
    const tax = parseFloat(sample.tax || 0);
  
    // Apply tax to sum of fees
    const subtotal = qualityFees + libraryFees + analysisFees + others;
    const total = subtotal + (subtotal * (tax / 100));
    
    return total.toFixed(2);  // Return a fixed decimal string
  };

  const calculateGrandTotal = (updatedSamples) => {
    return updatedSamples.reduce((acc, sample) => acc + parseFloat(sample.total || 0), 0).toFixed(2);
  };
  

  const handleInputChange = (index, field, value) => {
    const updatedSamples = [...samples];
    if (field === 'tax') {
      updatedSamples.forEach(sample => sample.tax = value);
      //setGlobalTax(value);
      console.log("hye");
    } 
    else {
      updatedSamples[index][field] = value;
    }
    updatedSamples[index].total = calculateTotal(updatedSamples[index]);
    updatedSamples[index][field] = value;
    setSamples(updatedSamples);
      // Calculate and update the grand total
  const grandTotal = calculateGrandTotal(updatedSamples);
  setGrandTotal(grandTotal); // Update grand total state
  };

  console.log("order title", orderTitle)
  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFile(file); // Update the state to show the file
  };


  const { getRootProps, getInputProps } = useDropzone({ onDrop });


  const handleGenerateClick = async() => {
    // setIsPopupVisible(true);
    //setOrderPopVisible(true);
    if (!isAmountChecked) {
      // Show toast if checkbox is not checked
      toast({
        variant: "error",
        title: "Error",
        description: "please check the box"
      })
      //return;
    }
    else if (!isTaxChecked) {
      // Show toast if checkbox is not checked
      toast({
        variant: "error",
        title: "Error",
        description: "please check the box"
      })
      //return;
    }
    else {
      const requestData = {
        samples, orderIdDB,grandTotal
      };
      
      try {
        const response = await fetch('/api/get-quotation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestData)
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('API response:', data);
          setActivePopup('costEstimateConfirmation');
        } else {
          console.error('API error:', response.statusText);
        }
      } catch (error) {
        console.error('Request failed', error);
      }
      // setActivePopup('costEstimateConfirmation');

    }


  };
  const handleGenerateClick1 = () => {
    //setIsPopUp1(false);
    //setIsPopupVisible(true);
    setActivePopup("invoice2")
    //setOrderPopVisible(true);
    //setActivePopup('payment');
    console.log("hello", isPopUp1)
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
    setSampleShippingStatus("isAdminCompleted")
    updateDataInDB({
      sampleShippingStatus: "isAdminCompleted",
      sampleShipping: "notOk"
    })

  };
  const handleConfirmOk = () => {
    // setConfirmPopUp(false);
    setOrderPopVisible(false);
    //setOrderPopVisible(true);
    //setActivePopup('formalRequest');
    setOrderPopVisible(false);
    setSampleShippingStatus("isAdminCompleted")
    updateDataInDB({
      sampleShippingStatus: "isAdminCompleted",
      sampleShipping: "ok"
    })

  };
  const handleClick1 = () => {
    if (!isInvoiceChecked1) {
      // Show toast if checkbox is not checked
      toast({
        variant: "error",
        title: "Error",
        description: "please check the box"
      })
    }
    if (!isInvoiceChecked2) {
      // Show toast if checkbox is not checked
      toast({
        variant: "error",
        title: "Error",
        description: "please check the box"
      })
    }
    else{
      setActivePopup("invoice1")
      //setOrderPopVisible(true);
      //setActivePopup('formalRequest');
      //console.log("hey", isPopUp1)

    }
  };

  const handleTaxCheckboxChange = (e) => {
    setIsTaxChecked(e.target.checked);
  };
  const handleAmountCheckboxChange = (e) => {
    setIsAmountChecked(e.target.checked);
  };

  const handleRawDataLink = (e) => {
    setRawDataLink(e.target.value);
  };

  const handleInvoiceChecked1 = (e) => {
    setIsInvoiceChecked1(e.target.checked);
  };
  const handleInvoiceChecked2 = (e) => {
    setIsInvoiceChecked2(e.target.checked);
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

  const handleConfirmRequestSheet = () => {
    setOrderPopVisible(false);
    setRequestSheetStatus("isCompleted");
    setCostEstimateStatus("inAdminProgress");
    updateDataInDB({
      requestSheetStatus: "isCompleted",
      costEstimateStatus: "inAdminProgress"
    })
  }


  const handleConfirmCostEstimate = () => {
    setOrderPopVisible(false);
    setIsPopupVisible(false);
    setCostEstimateStatus("isAdminCompleted");
    updateDataInDB({
      costEstimateStatus: "isAdminCompleted"
    })
  }


  const handleConfirmFormalRequest = () => {
    setFormalRequestStatus("isCompleted")
    setSampleShippingStatus("inUserProgress")
    setOrderPopVisible(false);
    setActivePopup('sampleShipping');
    updateDataInDB({
      formalRequestStatus: "isCompleted",
      sampleShippingStatus: "inUserProgress"
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

  // const handleConfirQualityCheck = async () => {
  //   setIsPopupVisible(false);
  //   setOrderPopVisible(false);
  //   //setActivePopup('');

  //   // setLibraryPrepStatus("inAdminProgress")
  //   // updateDataInDB({
  //   //   qualityCheckStatus: "isAdminCompleted"
  //   // })


  //   setDisabled(true);
  //   if (!uploadedFile) {
  //     toast({
  //       variant: "error",
  //       title: "Error",
  //       description: "Please upload a file..."
  //     })
  //     return;
  //   }
  //   try {
  //     const { name: fileName, type: fileType } = uploadedFile;

  //     // Call the API to get the signed URL
  //     const response = await fetch('/api/fileUpload', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ fileName, fileType }),
  //     });

  //     const { url } = await response.json();
  //     console.log(url)
  //     console.log("upload url", url.url)
  //     setQualityCheckReportLink(url.split("?")[0]);

  //     // Upload the file directly to S3 using the signed URL
  //     const res = await fetch(url, {
  //       method: 'PUT',
  //       body: uploadedFile,
  //       headers: {
  //         'Content-Type': fileType,
  //       },
  //     });
  //     console.log("file upload status", res.status)
  //     console.log("file upload url ", res.url)
  //     console.log(res)

  //     if (res.status !== 200) {
  //       toast({
  //         variant: "error",
  //         title: "Upload Error",
  //         description: "Try uploading file again...",
  //       });
  //       return;
  //     }

  //     setQualityCheckReportLink(res.url.split("?")[0]);

  //     setQualityCheckStatus("isAdminCompleted")
  //     const fileUrl = res.url.split("?")[0];
  //     console.log(fileUrl)

  //     const orderData = {
  //       orderTitle,
  //       qualityCheckStatus: "isAdminCompleted",
  //       qualityCheckReportLink: fileUrl,
  //     };

  //     console.log(orderIdDB)
  //     const saveApiResponse = await fetch('/api/updateOrder', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ order: orderData, orderIdDB: orderIdDB }),
  //     });

  //     console.log(saveApiResponse)

  //     if (saveApiResponse.status !== 200) {
  //       toast({
  //         variant: "error",
  //         title: "Updation Error",
  //         description: "Failed to submit order, please try again...",
  //       });
  //       return;
  //     }

  //     toast({
  //       variant: "success",
  //       title: "Upload Successful",
  //       description: "Your file has been uploaded to S3.",
  //     });
  //   } catch (err) {
  //     toast({
  //       variant: "error",
  //       title: "Upload Failed",
  //       description: "There was an error uploading your file.",
  //     });
  //     console.error("Error uploading file:", err);
  //   } finally {
  //     setDisabled(false);
  //   }
  // }

  const handleConfirQualityCheck = async () => {
    setIsPopupVisible(false);
    // setOrderPopVisible(false);
    setDisabled(true);
    setUploadStatus(true)
  
    if (!uploadedFile) {
      toast({
        variant: "error",
        title: "Error",
        description: "Please upload a file..."
      });
      return;
    }
  
    try {
      const { name: fileName, type: fileType } = uploadedFile;
  
      // Call the API to get the signed URL
      const response = await fetch('/api/fileUpload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileName, fileType }),
      });
  
      const { url } = await response.json();
      console.log(url);
      console.log("upload url", url.url);
      setQualityCheckReportLink(url.split("?")[0]);
  
      // Upload the file directly to S3 using XMLHttpRequest
      const uploadRequest = new XMLHttpRequest();
      uploadRequest.open('PUT', url, true);
      uploadRequest.setRequestHeader('Content-Type', fileType);
  
      // Update progress
      uploadRequest.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = Math.round((event.loaded / event.total) * 100);
          setUploadPercentage(percentComplete);
        }
      };
  
      // Handle upload complete
      uploadRequest.onload = () => {
        if (uploadRequest.status === 200) {
          setQualityCheckReportLink(url.split("?")[0]);
  
          setQualityCheckStatus("isAdminCompleted");
          const fileUrl = url.split("?")[0];
          console.log(fileUrl);
  
          const orderData = {
            orderTitle,
            qualityCheckStatus: "isAdminCompleted",
            qualityCheckReportLink: fileUrl,
          };
  
          // Save order data
          fetch('/api/updateOrder', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ order: orderData, orderIdDB }),
          }).then(saveApiResponse => {
            if (saveApiResponse.status === 200) {
              toast({
                variant: "success",
                title: "Upload Successful",
                description: "Your file has been uploaded to S3.",
              });
            } else {
              toast({
                variant: "error",
                title: "Updation Error",
                description: "Failed to submit order, please try again...",
              });
            }
          }).catch(err => {
            toast({
              variant: "error",
              title: "Updation Error",
              description: "Failed to submit order, please try again...",
            });
            console.error("Error updating order:", err);
          }).finally(
            setOrderPopVisible(false),
            setUploadStatus(false)
          )
  
        } else {
          toast({
            variant: "error",
            title: "Upload Error",
            description: "Try uploading file again...",
          });
        }
      };
  
      // Handle upload error
      uploadRequest.onerror = () => {
        toast({
          variant: "error",
          title: "Upload Failed",
          description: "There was an error uploading your file.",
        });
        console.error("Error uploading file:", uploadRequest.statusText);
      };
  
      uploadRequest.send(uploadedFile);
  
    } catch (err) {
      toast({
        variant: "error",
        title: "Upload Failed",
        description: "There was an error uploading your file.",
      });
      console.error("Error uploading file:", err);
    } finally {
      setDisabled(false);
      setUploadPercentage(0); // Optionally reset upload percentage
    }
  };

  const handleLibraryPrepConfirmation = async () => {
    setIsPopupVisible(false);
    // setOrderPopVisible(false);
    setDisabled(true);
    setUploadStatus(true)
  
    if (!uploadedFile) {
      toast({
        variant: "error",
        title: "Error",
        description: "Please upload a file..."
      });
      return;
    }
  
    try {
      const { name: fileName, type: fileType } = uploadedFile;
  
      // Call the API to get the signed URL
      const response = await fetch('/api/fileUpload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileName, fileType }),
      });
  
      const { url } = await response.json();
      console.log(url);
      console.log("upload url", url.url);
      setLibraryCheckReportLink(url.split("?")[0]);
  
      // Upload the file directly to S3 using XMLHttpRequest
      const uploadRequest = new XMLHttpRequest();
      uploadRequest.open('PUT', url, true);
      uploadRequest.setRequestHeader('Content-Type', fileType);
  
      // Update progress
      uploadRequest.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = Math.round((event.loaded / event.total) * 100);
          setUploadPercentage(percentComplete);
        }
      };
  
      // Handle upload complete
      uploadRequest.onload = () => {
        if (uploadRequest.status === 200) {
          setLibraryCheckReportLink(url.split("?")[0]);
  
          setLibraryPrepStatus("isAdminCompleted");
          const fileUrl = url.split("?")[0];
          console.log(fileUrl);
  
          const orderData = {
            orderTitle,
            libraryPrepStatus: "isAdminCompleted",
            libraryCheckReportLink: fileUrl,
          };
  
          // Save order data
          fetch('/api/updateOrder', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ order: orderData, orderIdDB }),
          }).then(saveApiResponse => {
            if (saveApiResponse.status === 200) {
              toast({
                variant: "success",
                title: "Upload Successful",
                description: "Your file has been uploaded to S3.",
              });
            } else {
              toast({
                variant: "error",
                title: "Updation Error",
                description: "Failed to submit order, please try again...",
              });
            }
          }).catch(err => {
            toast({
              variant: "error",
              title: "Updation Error",
              description: "Failed to submit order, please try again...",
            });
            console.error("Error updating order:", err);
          }).finally(
            setOrderPopVisible(false),
            setUploadStatus(false)
          )
  
        } else {
          toast({
            variant: "error",
            title: "Upload Error",
            description: "Try uploading file again...",
          });
        }
      };
  
      // Handle upload error
      uploadRequest.onerror = () => {
        toast({
          variant: "error",
          title: "Upload Failed",
          description: "There was an error uploading your file.",
        });
        console.error("Error uploading file:", uploadRequest.statusText);
      };
  
      uploadRequest.send(uploadedFile);
  
    } catch (err) {
      toast({
        variant: "error",
        title: "Upload Failed",
        description: "There was an error uploading your file.",
      });
      console.error("Error uploading file:", err);
    } finally {
      setDisabled(false);
      setUploadPercentage(0); // Optionally reset upload percentage
    }
  };

  const handleAnalysisDoneConfirmation = async () => {
    console.log(sampleShippingStatus)
    console.log("click on ok from sample shipping")
    setOrderPopVisible(false);
    try {
      const res = await fetch('/api/sendUpdateInChat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: userIdDB, message: `Dear user\n Analysis has been started for your order ${orderId}` }),
      });
      console.log(res)
      setAnalysisProgressStatus('isCompleted');
      setAnalysisDoneStatus('inAdminProgress');
      handleSendMessage();
      updateDataInDB({
        analysisProgressStatus: "isCompleted",
        analysisDoneStatus: "inAdminProgress"
      })
    } catch {

    }

  }

  const handleAnalysisDone = async () => {
    console.log(sampleShippingStatus)
    console.log("click on ok from sample shipping")
    setOrderPopVisible(false);
    try {
      const res = await fetch('/api/sendUpdateInChat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: userIdDB, message: `Dear user\n Analysis has been completed for your order ${orderId}` }),
      });
      console.log(res)
      setAnalysisDoneStatus('isCompleted');
      setAnalysisRawDataStatus('inAdminProgress')
      setAnalysisSpecificationStatus('inAdminProgress')
      setInvoiceStatus('inAdminProgress')
      handleSendMessage();
      updateDataInDB({
        analysisDoneStatus: "isCompleted",
        analysisRawDataStatus: "inAdminProgress",
        analysisSpecificationStatus: "inAdminProgress",
        invoiceStatus: "inAdminProgress"
      })
    } catch {

    }

  }


  const handleAnalysisRawDataConfirm = () => {
    if (!rawDataLink) {
      toast({
        variant: "error",
        title: "Error",
        description: "Please paste the data link..."
      })
      return;
    }
    else {
      setOrderPopVisible(false);
      setActivePopup('');
      setAnalysisRawDataStatus("isAdminCompleted")
      setRawDataLink(rawDataLink)
      updateDataInDB({
        analysisRawDataStatus: "isAdminCompleted",
        rawDataLink:rawDataLink
      })
    }

  }

  const handleAnalysisSpecification = async () => {
    setIsPopupVisible(false);
    // setOrderPopVisible(false);
    setDisabled(true);
    setUploadStatus(true)
  
    if (!uploadedFile) {
      toast({
        variant: "error",
        title: "Error",
        description: "Please upload a file..."
      });
      return;
    }
  
    try {
      const { name: fileName, type: fileType } = uploadedFile;
  
      // Call the API to get the signed URL
      const response = await fetch('/api/fileUpload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileName, fileType }),
      });
  
      const { url } = await response.json();
      console.log(url);
      console.log("upload url", url.url);
      setAnalysisSpecificationReportLink(url.split("?")[0]);
  
      // Upload the file directly to S3 using XMLHttpRequest
      const uploadRequest = new XMLHttpRequest();
      uploadRequest.open('PUT', url, true);
      uploadRequest.setRequestHeader('Content-Type', fileType);
  
      // Update progress
      uploadRequest.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = Math.round((event.loaded / event.total) * 100);
          setUploadPercentage(percentComplete);
        }
      };
  
      // Handle upload complete
      uploadRequest.onload = () => {
        if (uploadRequest.status === 200) {
          setAnalysisSpecificationReportLink(url.split("?")[0]);
  
          setAnalysisSpecificationStatus("isAdminCompleted");
          const fileUrl = url.split("?")[0];
          console.log(fileUrl);
  
          const orderData = {
            orderTitle,
            analysisSpecificationStatus: "isAdminCompleted",
            analysisSpecificationReportLink: fileUrl,
          };
  
          // Save order data
          fetch('/api/updateOrder', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ order: orderData, orderIdDB }),
          }).then(saveApiResponse => {
            if (saveApiResponse.status === 200) {
              toast({
                variant: "success",
                title: "Upload Successful",
                description: "Your file has been uploaded to S3.",
              });
            } else {
              toast({
                variant: "error",
                title: "Updation Error",
                description: "Failed to submit order, please try again...",
              });
            }
          }).catch(err => {
            toast({
              variant: "error",
              title: "Updation Error",
              description: "Failed to submit order, please try again...",
            });
            console.error("Error updating order:", err);
          }).finally(
            setOrderPopVisible(false),
            setUploadStatus(false)
          )
  
        } else {
          toast({
            variant: "error",
            title: "Upload Error",
            description: "Try uploading file again...",
          });
        }
      };
  
      // Handle upload error
      uploadRequest.onerror = () => {
        toast({
          variant: "error",
          title: "Upload Failed",
          description: "There was an error uploading your file.",
        });
        console.error("Error uploading file:", uploadRequest.statusText);
      };
  
      uploadRequest.send(uploadedFile);
  
    } catch (err) {
      toast({
        variant: "error",
        title: "Upload Failed",
        description: "There was an error uploading your file.",
      });
      console.error("Error uploading file:", err);
    } finally {
      setDisabled(false);
      setUploadPercentage(0); // Optionally reset upload percentage
    }
  };

  const handleInvoice = () => {
    setOrderPopVisible(false);
    //setActivePopup('');
    setInvoiceStatus("isAdminCompleted")
    updateDataInDB({
      invoiceStatus: "isAdminCompleted"
    })
  }

  const handleConfirmPayment = () => {
    setOrderPopVisible(false);
    //setActivePopup('');
    setPaymentStatus("isAdminCompleted")
    updateDataInDB({
      paymentStatus: "isAdminCompleted"
    })
  }




  const handleClickOutside = (event) => {
    if (orderPopUpBoxRef.current && !orderPopUpBoxRef.current.contains(event.target)) {
      setOrderPopVisible(false);
    }
  };



  useEffect(() => {
    if (sampleShippingStatus == "isPending" && formalRequestStatus == "isCompleted") {
      setActivePopup("sampleShipping");
      setOrderPopVisible(true);
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

  useEffect(() => {
    const fetchOrderByID = async (orderId) => {
      try {
        const response = await fetch('/api/fetchOrder', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ orderId: orderId }),
        });
        const order = await response.json();
        const orderData = order.data
        console.log(orderData.userId)

        setUserIdDB(orderData.userId);
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
        

      } catch (error) {
        console.log("fetch order error ", error)
      }
    }

    fetchOrderByID(orderIdDB);
  }, [])

  console.log("orderid", orderId)

  const handleSendMessage = () => {
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
                          <th className="py-2">Total Amount</th>
                        </tr>
                      </thead>

                      <tbody className='border-t'>
                        {[1, 2, 3].map((_, index) => (
                          <tr key={index} className="text-[12px] font-normal">
                            <td className="py-[12px] md:w-[98px] pr-[20px]">
                              <input
                                type="text"
                                className="border rounded-md w-full p-2"
                                onChange={(e) => handleInputChange(index, 'id', e.target.value)}
                                placeholder={`10${index + 1}`}
                              />
                            </td>
                            <td className="md:w-[108px] py-[12px] pr-[20px]">
                              <input
                                type="text"
                                className="border rounded-md w-full p-2"
                                onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                                placeholder={`${index === 0 ? 'Red' : index === 1 ? 'White' : 'Yellow'} mouse`}
                              />
                            </td>
                            <td className="md:w-[156px] py-[12px]">
                              <div className='flex gap-[2px]'>
                                <div className="w-[108px] flex-shrink-0 group">
                                  <input
                                    type="text"
                                    className="border rounded-md w-full p-2"
                                    onChange={(e) => handleInputChange(index, 'qualityFees', e.target.value)}
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
                                    onChange={(e) => handleInputChange(index, 'libraryFees', e.target.value)}
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
                                    onChange={(e) => handleInputChange(index, 'analysisFees', e.target.value)}
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
                                onChange={(e) => handleInputChange(index, 'tax', e.target.value)}
                                value={samples[index].tax}
                                placeholder="JPY"
                              />
                            </td>
                            <td className="md:w-[108px] py-[12px] pr-[20px]">
                              <input
                                type="text"
                                className="border rounded-md w-full p-2 bg-[#33333314]"
                                onChange={(e) => handleInputChange(index, 'other', e.target.value)}
                                placeholder=""
                              />
                            </td>
                            <td className="md:w-[108px]">
                              <input
                                type="text"
                                className="border rounded-md w-full p-2"
                                onChange={(e) => handleInputChange(index, 'total1', e.target.value)}
                                placeholder="JPY"
                                value={samples[index].total}
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
                              //onChange={(e) => handleInputChange('totalFees', e.target.value)}
                              placeholder="JPY"
                              value={grandTotal}
                            />
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div className="flex items-center text-[14px] font-normal">
                    <input
                      type="checkbox"
                      id="tax"
                      className="form-checkbox accent-[#3e8ca7] mr-2"
                      checked={isTaxChecked}
                      onChange={handleTaxCheckboxChange}
                    />
                    <label htmlFor="tax">Click to enter tax percent.</label>
                  </div>
                  <div className="flex items-center mb-[6px] text-[14px] font-normal">
                    <input
                      type="checkbox"
                      id="amount"
                       className="form-checkbox accent-[#3e8ca7] mr-2"
                      checked={isAmountChecked}
                      onChange={handleAmountCheckboxChange}
                    />
                    <label htmlFor="amount">Click to enter other amount.</label>
                  </div>
                  <p className="text-[14px] font-normal mb-6">
                    Note: The tax amount is subjected to the country and region. Other charges may include shipping or handling fees.
                  </p>
                  <div className='w-full flex items-end justify-end gap-[12px] pb-4'>
                    <button onClick={() => { setOrderPopVisible(false) }} className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]">Back</button>
                    <button onClick={handleGenerateClick} className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]">Generate</button>
                  </div>

                </div>
              )}
              {activePopup === 'costEstimateConfirmation' && (
                <div id="cost-estimate-table" className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                  <div className='md:h-[334px] md:w-[564px] md:py-[65px] md:px-[48px] flex flex-col items-center justify-between bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                    <span className='w-full font-DM-Sans font-bold md:text-[32px] md:leading-[40px] text-[#333333]'>Success!</span>
                    <span className='w-full font-DM-Sans font-normal md:text-[20px] md:leading-[34px] text-[#333333]'>You have successfully sent the Cost Estimate Sheet.</span>
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
              {/* {activePopup === 'sampleShippingConfirmation' && (
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
              )} */}
              {activePopup === 'sampleShipping' && (
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
              )}
              {activePopup === 'deletePopUp' && (
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
              {activePopup === 'confirmPopUp' && (
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
                  <div className="text-[16px] md:text-[22px] font-medium text-center">Upload Quality Check Report</div>
                  <div className="container mx-auto md:px-4 w-auto md:w-[490px] md:h-[203px]">
                    <div className="border-dashed border-[0.4px]  border-[#60b7cf] rounded-lg p-4 md:p-10 mt-[12px] md:mt-8 text-center">
                      <div {...getRootProps()} className="cursor-pointer">
                        <input {...getInputProps()} />
                        <Image src={folder1} alt="Upload Icon" className="mx-auto mb-4 w-[51px] h-[51px]" />
                        <p className="text-[10px] md:text-sm font-normal">
                          Drag and drop or <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#60b7cf] via-[#3e8da7] to-[rgba(0,62,92,0.6)] underline">Choose file</span> to upload
                        </p>
                        {uploadedFile && (
                          <div className="mt-2">
                            <p className="text-sm md:text-base font-medium">File Selected</p>
                            {/* <p className="text-lg text-blue-600">{uploadedFile.name}</p> */}
                          </div>
                        )}
                        {uploadStatus && (
                          <div className='w-full flex flex-col items-start'>
                          <span className='w-full flex justify-between'><span>Uploading</span> <span>{uploadPercentage} %</span> </span>
                          <Progress value={uploadPercentage} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className='w-full md:w-[490px] flex items-center justify-end gap-[12px] md:pt-10'>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={() => { setOrderPopVisible(false) }}>Back</button>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={handleConfirQualityCheck} disabled={!uploadedFile||uploadStatus}>Upload</button>
                  </div>
                </div>
              )}
              {activePopup === 'libraryPrep' && (

                <div className='p-[16px] w-[356px] h-[290px] md:h-[435px] md:w-[760px] md:py-[26px] flex flex-col gap-[24px] items-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <div className="text-[16px] md:text-[22px] font-medium text-center">Upload Library Preparation Report</div>
                  <div className="container mx-auto md:px-4 w-auto md:w-[490px] md:h-[203px]">
                    <div className="border-dashed border-[0.4px]  border-[#60b7cf] rounded-lg p-4 md:p-10 mt-[12px] md:mt-8 text-center">
                      <div {...getRootProps()} className="cursor-pointer">
                        <input {...getInputProps()} />
                        <Image src={folder1} alt="Upload Icon" className="mx-auto mb-4 w-[51px] h-[51px]" />
                        <p className="text-[10px] md:text-sm font-normal">
                          Drag and drop or <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#60b7cf] via-[#3e8da7] to-[rgba(0,62,92,0.6)] underline">Choose file</span> to upload
                        </p>
                        {uploadedFile && (
                          <div className="mt-2">
                            <p className="text-sm md:text-base font-medium">File Selected</p>
                            {/* <p className="text-lg text-blue-600">{uploadedFile.name}</p> */}
                          </div>
                        )}
                        {uploadStatus && (
                          <div className='w-full flex flex-col items-start'>
                          <span className='w-full flex justify-between'><span>Uploading</span> <span>{uploadPercentage} %</span> </span>
                          <Progress value={uploadPercentage} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className='w-full md:w-[490px] flex items-center justify-end gap-[12px] md:pt-10'>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={() => { setOrderPopVisible(false) }}>Back</button>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={handleLibraryPrepConfirmation} disabled={!uploadedFile}>Upload</button>
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
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={handleAnalysisDoneConfirmation}>Start</button>
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
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={handleAnalysisDone}>Submit</button>
                  </div>
                </div>
              )}
              {activePopup === 'analysisRawData' && (
                <div className='font-DM-Sans flex flex-col w-[352px] h-[197px] md:h-[282px] md:w-[760px] p-[28px] md:p-12  items-center justify-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <div className='text-[22px] md:text-[22px] font-bold font-DM-Sans pb-[6px] md:pb-4 leading-[24px]'>Raw Data</div>
                  <div className='w-full border-t-2 border-dashed border-gray-100 md:pb-4'></div>

                  <div className="md:flex md:flex-row flex flex-col  gap-[6px] md:gap-4">
                    <label htmlFor="name" className="font-DM-Sans font-medium text-[10px] md:text-sm flex items-center md:pt-6">
                      Paste data link
                    </label>
                    <div className='group w-[332px] md:w-[527px] h-[35px] md:h-[46px] flex items-center justify-center md:pt-8'>
                      <div className={`w-[332px] md:w-[527px] rounded-[7px] bg-gray-200 group-focus-within:gradient-primary`} >
                        <input className="w-[332px] md:w-[527px] p-[10px] text-black md:p-[12px] outline-none rounded-[6px] border-[2px] border-transparent font-DM-Sans font-normal text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]"
                          placeholder="link"
                          value={rawDataLink}
                          onChange={handleRawDataLink}
                          style={{ backgroundColor: "white", backgroundClip: "padding-box", }}
                          type="text"
                          name="name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className='w-full flex items-center justify-end gap-[10px] md:gap-[12px] pt-[20px] md:pt-12'>
                    <button onClick={() => { setOrderPopVisible(false) }} className='h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px] '>Back</button>
                    <button onClick={handleAnalysisRawDataConfirm} className='h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px] '>Send</button>
                  </div>
                </div>
              )}
              {activePopup === 'analysisSpecification' && (

                <div className='p-[16px] w-[356px] h-[290px] md:h-[435px] md:w-[760px] md:py-[26px] flex flex-col gap-[24px] items-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <div className="text-[16px] md:text-[22px] font-medium text-center">Analysis Specification</div>
                  <div className="container mx-auto md:px-4 w-auto md:w-[490px] md:h-[203px]">
                    <div className="border-dashed border-[0.4px]  border-[#60b7cf] rounded-lg p-4 md:p-10 mt-[12px] md:mt-8 text-center">
                      <div {...getRootProps()} className="cursor-pointer">
                        <input {...getInputProps()} />
                        <Image src={folder1} alt="Upload Icon" className="mx-auto mb-4 w-[51px] h-[51px]" />
                        <p className="text-[10px] md:text-sm font-normal">
                          Drag and drop or <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#60b7cf] via-[#3e8da7] to-[rgba(0,62,92,0.6)] underline">Choose file</span> to upload
                        </p>
                        {uploadedFile && (
                          <div className="mt-2">
                            <p className="text-sm md:text-base font-medium">File Selected</p>
                            {/* <p className="text-lg text-blue-600">{uploadedFile.name}</p> */}
                          </div>
                        )}
                        {uploadStatus && (
                          <div className='w-full flex flex-col items-start'>
                          <span className='w-full flex justify-between'><span>Uploading</span> <span>{uploadPercentage} %</span> </span>
                          <Progress value={uploadPercentage} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className='w-full md:w-[490px] flex items-center justify-end gap-[12px] md:pt-10'>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={() => { setOrderPopVisible(false) }}>Back</button>
                    <button className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]" onClick={handleAnalysisSpecification}>Upload</button>
                  </div>
                </div>
              )}
              {activePopup === 'invoice' && (
                <div className="bg-white rounded-md shadow-lg md:py-[26px] md:px-[12px] md:w-[1199px] mx-5 px-4 md:mx-auto my-10 font-DM-Sans md:min-h-[576px]">
                  <h2 className="text-[18px] md:text-[22px] font-medium text-center mb-4 md:mb-6">Calculate Cost</h2>
                  <div className='border border-dashed'></div>
                  <div className='border border-dashed pt-[20px]'></div>

                  <div className="overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-10">
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
                          <th className="py-2">Total Amount</th>
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
                                value={samples[index].total}
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
                    <input  type="checkbox"
                      id="invoice1"
                      className="form-checkbox accent-[#3e8ca7] mr-2"
                      checked={isInvoiceChecked1}
                      onChange={handleInvoiceChecked1} />
                    <label htmlFor="tax">Click to enter tax percent.</label>
                  </div>
                  <div className="flex items-center mb-[6px] text-[14px] font-normal">
                    <input  type="checkbox"
                      id="invoice2"
                      className="form-checkbox accent-[#3e8ca7] mr-2"
                      checked={isInvoiceChecked2}
                      onChange={handleInvoiceChecked2} />
                    <label htmlFor="amount">Click to enter other amount.</label>
                  </div>
                  <p className="text-[14px] font-normal mb-6">
                    Note: The tax amount is subjected to the country and region. Other charges may include shipping or handling fees.
                  </p>
                  <div className='w-full flex items-end justify-end gap-[12px] pb-4'>
                    <button onClick={() => { setOrderPopVisible(false) }} className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]">Back</button>
                    <button onClick={handleClick1} className="h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px]">Generate</button>
                  </div>

                </div>
              )}
              {activePopup==="invoice1"&& (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                  <div className='md:h-[334px] md:w-[564px] md:py-[65px] md:px-[48px] flex flex-col items-center justify-between bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                    <span className='w-full font-DM-Sans font-bold md:text-[32px] md:leading-[40px] text-[#333333]'>Confirmation Message</span>
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
              {activePopup==="invoice2" && (
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

                <div className='p-[16px] w-[356px] h-[290px] md:h-[435px] md:w-[760px] md:py-[26px] flex flex-col gap-[24px] items-center bg-white border-[1px] border-[#D9D9D9] rounded-[10px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
                  <div className='h-[40px] md:h-[50px] flex items-start justify-center w-full text-center border-b-[1px] border-dotted border-[#33333340]'>
                    <span className='font-DM-Sans text-center font-medium text-[16px] md:text-[22px] md:leading-[24px] text-[#333333]'>Download Receipt</span>
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
            <button onClick={handleOrderCreation} disabled={!(requestSheetStatus == "inAdminProgress" || requestSheetStatus == "isUserCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${requestSheetStatus == "isPending" || requestSheetStatus == "inUserProgress" ? "text-[#333333]" : "text-white"} ${requestSheetStatus == "isPending" || requestSheetStatus == "inUserProgress" ? "bg-[#E2E8F0]" : requestSheetStatus == "inAdminProgress" || requestSheetStatus == "isUserCompleted" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Request sheet sent</button>
            <button onClick={handleCostEstimateClick} disabled={!(costEstimateStatus == "inAdminProgress" || costEstimateStatus == "isUserCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${costEstimateStatus == "isPending" || costEstimateStatus == "inUserProgress" ? "text-[#333333]" : "text-white"} ${costEstimateStatus == "isPending" || costEstimateStatus == "inUserProgress" ? "bg-[#E2E8F0]" : costEstimateStatus == "inAdminProgress" || costEstimateStatus == "isUserCompleted" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Cost estimation</button>
            <button onClick={handleFormalRequestClick} disabled={!(formalRequestStatus == "inAdminProgress" || formalRequestStatus == "isUserCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${formalRequestStatus == "isPending" || formalRequestStatus == "inUserProgress" ? "text-[#333333]" : "text-white"} ${formalRequestStatus == "isPending" || formalRequestStatus == "inUserProgress" ? "bg-[#E2E8F0]" : formalRequestStatus == "inAdminProgress" || formalRequestStatus == "isUserCompleted" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Formal request</button>
            <button onClick={handleSampleShippingClick} disabled={!(sampleShippingStatus == "inTransit" || sampleShippingStatus == "isUserCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${sampleShippingStatus == "isPending" || sampleShippingStatus == "inUserProgress" ? "text-[#333333]" : "text-white"} ${sampleShippingStatus == "isPending" || sampleShippingStatus == "inUserProgress" ? "bg-[#E2E8F0]" : sampleShippingStatus == "inAdminProgress" || sampleShippingStatus == "isUserCompleted" ? "bg-[#FF914D]" : sampleShippingStatus == "inTransit" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Sample recieved</button>
            <button onClick={handleQualityCheckClick} disabled={!(qualityCheckStatus == "inAdminProgress" || qualityCheckStatus == "isUserCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${qualityCheckStatus == "isPending" || qualityCheckStatus == "inUserProgress" ? "text-[#333333]" : "text-white"} ${qualityCheckStatus == "isPending" || qualityCheckStatus == "inUserProgress" ? "bg-[#E2E8F0]" : qualityCheckStatus == "inAdminProgress" || qualityCheckStatus == "isUserCompleted" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Quality check</button>
            <button onClick={handleLibraryPrepClick} disabled={!(libraryPrepStatus == "inAdminProgress" || libraryPrepStatus == "isUserCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${libraryPrepStatus == "isPending" || libraryPrepStatus == "inUserProgress" ? "text-[#333333]" : "text-white"} ${libraryPrepStatus == "isPending" || libraryPrepStatus == "inUserProgress" ? "bg-[#E2E8F0]" : libraryPrepStatus == "inAdminProgress" || libraryPrepStatus == "isUserCompleted" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Library report</button>
            <button onClick={handleAnalysisProgressClick} disabled={!(analysisProgressStatus == "inAdminProgress" || analysisProgressStatus == "isUserCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${analysisProgressStatus == "isPending" || analysisProgressStatus == "inUserProgress" ? "text-[#333333]" : "text-white"} ${analysisProgressStatus == "isPending" || analysisProgressStatus == "inUserProgress" ? "bg-[#E2E8F0]" : analysisProgressStatus == "inAdminProgress" || analysisProgressStatus == "isUserCompleted" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Aanalysis start</button>
            <button onClick={handleAnalysisDoneClick} disabled={!(analysisDoneStatus == "inAdminProgress" || analysisDoneStatus == "isUserCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${analysisDoneStatus == "isPending" || analysisDoneStatus == "inUserProgress" ? "text-[#333333]" : "text-white"} ${analysisDoneStatus == "isPending" || analysisDoneStatus == "inUserProgress" ? "bg-[#E2E8F0]" : analysisDoneStatus == "inAdminProgress" || analysisDoneStatus == "isUserCompleted" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Aanalysis completed</button>
            <button onClick={handleAnalysisRawDataClick} disabled={!(analysisRawDataStatus == "inAdminProgress" || analysisRawDataStatus == "isUserCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${analysisRawDataStatus == "isPending" || analysisRawDataStatus == "inUserProgress" ? "text-[#333333]" : "text-white"} ${analysisRawDataStatus == "isPending" || analysisRawDataStatus == "inUserProgress" ? "bg-[#E2E8F0]" : analysisRawDataStatus == "inAdminProgress" || analysisRawDataStatus == "isUserCompleted" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Raw data</button>
            <button onClick={handleAnalysisSpecificationClick} disabled={!(analysisSpecificationStatus == "inAdminProgress" || analysisSpecificationStatus == "isUserCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${analysisSpecificationStatus == "isPending" || analysisSpecificationStatus == "inUserProgress" ? "text-[#333333]" : "text-white"} ${analysisSpecificationStatus == "isPending" || analysisSpecificationStatus == "inUserProgress" ? "bg-[#E2E8F0]" : analysisSpecificationStatus == "inAdminProgress" || analysisSpecificationStatus == "isUserCompleted" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Aanalysis Specification</button>
            <button onClick={handleInvoiceClick} disabled={!(invoiceStatus == "inAdminProgress" || invoiceStatus == "isUserCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${invoiceStatus == "isPending" || invoiceStatus == "inUserProgress" ? "text-[#333333]" : "text-white"} ${invoiceStatus == "isPending" || invoiceStatus == "inUserProgress" ? "bg-[#E2E8F0]" : invoiceStatus == "inAdminProgress" || invoiceStatus == "isUserCompleted" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Invoice</button>
            <button onClick={handlePaymentClick} disabled={!(paymentStatus == "inAdminProgress" || paymentStatus == "isUserCompleted")} className={`h-[44px] w-[113px] md:h-[64px] md:w-[184px] p-[4px] md:p-[8px] rounded-[4px] md:rounded-[6px] ${paymentStatus == "isPending" || paymentStatus == "inUserProgress" ? "text-[#333333]" : "text-white"} ${paymentStatus == "isPending" || paymentStatus == "inUserProgress" ? "bg-[#E2E8F0]" : paymentStatus == "inAdminProgress" || paymentStatus == "isUserCompleted" ? "bg-[#FF914D]" : "bg-[#5CE1E6]"} font-DM-Sans font-medium text-[8px] md:text-[14px] leading-[24px] text-center`}>Recipt</button>
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