import React from 'react'
import { PaymentsDataTable } from '@/components/AdminDashboard/Payments/PaymentsDataTable'

const Payments = () => {
  const data = [
    {
      id: "m5gr84i9",
      title:"DNA Test",
      invoice:"20,000 JPY",
      payment:false,
    },
    {
      id: "m5gr84i9",
      title:"RNA Test",
      invoice:"5,000 JPY",
      payment:true,
    },
    {
      id: "m5gr84i9",
      title:"DNA",
      invoice:"2,000 JPY",
      payment:false,
    },
    {
      id: "m5gr84i9",
      title:"DNA Sequencing",
      invoice:"10,000 JPY",
      payment:"inProgress",
    },
    {
      id: "m5gr84i9",
      title:"Genome Sequencing",
      invoice:"40,000 JPY",
      payment:false,
    },
  ]

  return (
    <div className='w-full p-[19px] md:h-[calc(100vh-104px)] overflow-y-scroll'>
      <PaymentsDataTable data={data}/>
    </div>
  )
}

export default Payments