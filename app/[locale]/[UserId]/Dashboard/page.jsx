"use client"
import React, { useEffect, useState } from 'react'
import OrderOverView from '../../../../components/UserDashboard/Dashboard/OrderOverView'
import { useSession } from 'next-auth/react'

const Dashboard = () => {
  const {data:session} = useSession();
  console.log(session)

  const orderOverview ={
    pending:19,
    progress:7,
    completed:3
  }

  const data1= [
    {
      id: "m5gr84i9",
      orderTitle:"DNA Test",
      requestSheet:true,
      costEstimate:true,
      formalRequest:true,
      sampleShipping:true,
      qualityCheck:"inProgress",
      libraryPrep:false,
      analysisProgress:false,
      analysisDone:false,
      rawData:false,
      analysisSpecification:false,
      invoice:false,
      payment:false,
    },
    {
      id: "3u1reuv4",
      orderTitle:"RNA",
      requestSheet:true,
      costEstimate:true,
      formalRequest:true,
      sampleShipping:"inProgress",
      qualityCheck:false,
      libraryPrep:false,
      analysisProgress:false,
      analysisDone:false,
      rawData:false,
      analysisSpecification:false,
      invoice:false,
      payment:false,
    },
    {
      id: "3u1reuv4",
      orderTitle:"RNA",
      requestSheet:true,
      costEstimate:true,
      formalRequest:true,
      sampleShipping:"inProgress",
      qualityCheck:false,
      libraryPrep:false,
      analysisProgress:false,
      analysisDone:false,
      rawData:false,
      analysisSpecification:false,
      invoice:false,
      payment:false,
    },
    {
      id: "derv1ws0",
      orderTitle:"Genome Sequencing",
      requestSheet:true,
      costEstimate:true,
      formalRequest:"inProgress",
      sampleShipping:false,
      qualityCheck:false,
      libraryPrep:false,
      analysisProgress:false,
      analysisDone:false,
      rawData:false,
      analysisSpecification:false,
      invoice:false,
      payment:false,
    },
    {
      id: "5kma53ae",
      orderTitle:"Amplicone Sequencing",
      requestSheet:true,
      costEstimate:"inProgress",
      formalRequest:false,
      sampleShipping:false,
      qualityCheck:false,
      libraryPrep:false,
      analysisProgress:false,
      analysisDone:false,
      rawData:false,
      analysisSpecification:false,
      invoice:false,
      payment:false,
    },
    {
      id: "derv1ws0",
      orderTitle:"Genome Sequencing",
      requestSheet:true,
      costEstimate:true,
      formalRequest:"inProgress",
      sampleShipping:false,
      qualityCheck:false,
      libraryPrep:false,
      analysisProgress:false,
      analysisDone:false,
      rawData:false,
      analysisSpecification:false,
      invoice:false,
      payment:false,
    },
    {
      id: "5kma53ae",
      orderTitle:"Amplicone Sequencing",
      requestSheet:true,
      costEstimate:"inProgress",
      formalRequest:false,
      sampleShipping:false,
      qualityCheck:false,
      libraryPrep:false,
      analysisProgress:false,
      analysisDone:false,
      rawData:false,
      analysisSpecification:false,
      invoice:false,
      payment:false,
    },
    {
      id: "bhqecj4p",
      orderTitle:"DNA Mutation",
      requestSheet:"inProgress",
      costEstimate:false,
      formalRequest:false,
      sampleShipping:false,
      qualityCheck:false,
      libraryPrep:false,
      analysisProgress:false,
      analysisDone:false,
      rawData:false,
      analysisSpecification:false,
      invoice:false,
      payment:false,
    },
    {
      id: "5kma53ae",
      orderTitle:"Amplicone Sequencing",
      requestSheet:true,
      costEstimate:"inProgress",
      formalRequest:false,
      sampleShipping:false,
      qualityCheck:false,
      libraryPrep:false,
      analysisProgress:false,
      analysisDone:false,
      rawData:false,
      analysisSpecification:false,
      invoice:false,
      payment:false,
    },
    {
      id: "bhqecj4p",
      orderTitle:"DNA Mutation",
      requestSheet:"inProgress",
      costEstimate:false,
      formalRequest:false,
      sampleShipping:false,
      qualityCheck:false,
      libraryPrep:false,
      analysisProgress:false,
      analysisDone:false,
      rawData:false,
      analysisSpecification:false,
      invoice:false,
      payment:false,
    },
    {
      id: "m5gr84i9",
      orderTitle:"DNA Test",
      requestSheet:true,
      costEstimate:true,
      formalRequest:true,
      sampleShipping:true,
      qualityCheck:"inProgress",
      libraryPrep:false,
      analysisProgress:false,
      analysisDone:false,
      rawData:false,
      analysisSpecification:false,
      invoice:false,
      payment:false,
    },
    {
      id: "3u1reuv4",
      orderTitle:"RNA",
      requestSheet:true,
      costEstimate:true,
      formalRequest:true,
      sampleShipping:"inProgress",
      qualityCheck:false,
      libraryPrep:false,
      analysisProgress:false,
      analysisDone:false,
      rawData:false,
      analysisSpecification:false,
      invoice:false,
      payment:false,
    },
    {
      id: "derv1ws0",
      orderTitle:"Genome Sequencing",
      requestSheet:true,
      costEstimate:true,
      formalRequest:"inProgress",
      sampleShipping:false,
      qualityCheck:false,
      libraryPrep:false,
      analysisProgress:false,
      analysisDone:false,
      rawData:false,
      analysisSpecification:false,
      invoice:false,
      payment:false,
    },
    {
      id: "5kma53ae",
      orderTitle:"Amplicone Sequencing",
      requestSheet:true,
      costEstimate:"inProgress",
      formalRequest:false,
      sampleShipping:false,
      qualityCheck:false,
      libraryPrep:false,
      analysisProgress:false,
      analysisDone:false,
      rawData:false,
      analysisSpecification:false,
      invoice:false,
      payment:false,
    },
    {
      id: "bhqecj4p",
      orderTitle:"DNA Mutation",
      requestSheet:"inProgress",
      costEstimate:false,
      formalRequest:false,
      sampleShipping:false,
      qualityCheck:false,
      libraryPrep:false,
      analysisProgress:false,
      analysisDone:false,
      rawData:false,
      analysisSpecification:false,
      invoice:false,
      payment:false,
    },
  ]

  const [data,setData] = useState([]);

  useEffect(()=>{
    const fetchOrdersByUserId = async(userId)=>{
      try{
        const response = await fetch('/api/fetchOrders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({userId:userId}),
        });
        const data = await response.json();
        console.log("data",data)
        setData(data.data)
        
      }catch(error){
        console.log("fetch orders error ",error)
      }
    }

    fetchOrdersByUserId("66d2c0363193e5458df2f2a0");
  },[])

  return (
    <div className='w-full p-[10px] md:p-[19px]'>
      <OrderOverView orderOverview={orderOverview} data={data}/>
    </div>
  )
}

export default Dashboard