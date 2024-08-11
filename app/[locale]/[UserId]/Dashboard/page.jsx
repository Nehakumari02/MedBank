"use client"
import React from 'react'
import OrderOverView from '../../../../components/UserDashboard/Dashboard/OrderOverView'
import DashboardDataTable from '../../../../components/UserDashboard/Dashboard/DataTable'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Dashboard = () => {
  const orderOverview ={
    pending:19,
    progress:7,
    completed:3
  }

  return (
    <div className='w-full p-[19px]'>
      <OrderOverView orderOverview={orderOverview}/>
      {/* <DashboardDataTable/> */}
    </div>
  )
}

export default Dashboard