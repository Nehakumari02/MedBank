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

      <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  )
}

export default Dashboard