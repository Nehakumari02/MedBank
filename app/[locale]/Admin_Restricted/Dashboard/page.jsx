"use client"
import React from 'react'
import OrderOverView from '../../../../components/AdminDashboard/Dashboard/OrderOverView'
import { useSession } from 'next-auth/react'

const Dashboard = () => {
  const {data:session} = useSession();
  console.log(session)
  console.log(session?.user.id)

  const orderOverview ={
    pending:19,
    progress:7,
    completed:3
  }

  const data= [
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
  ]

  return (
    <div className='w-full p-[10px] md:p-[19px]'>
      <OrderOverView orderOverview={orderOverview} data={data}/>
    </div>
  )
}

export default Dashboard