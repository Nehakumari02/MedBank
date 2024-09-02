"use client"
import React, { useEffect, useState } from 'react'
import { OrdersDataTable } from '@/components/AdminDashboard/Orders/OrdersDataTable'

const Orders = () => {
  const [data,setData] = useState([]);

  useEffect(()=>{
    const fetchOrdersByUserId = async()=>{
      try{
        const response = await fetch('/api/admin_fetchOrders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        console.log("data",data)
        setData(data.data)
        
      }catch(error){
        console.log("fetch orders error ",error)
      }
    }

    fetchOrdersByUserId();
  },[])

  return (
    <div className='w-full p-[19px] md:h-[calc(100vh-104px)] overflow-y-scroll'>
      <OrdersDataTable data={data}/>
    </div>
  )
}

export default Orders