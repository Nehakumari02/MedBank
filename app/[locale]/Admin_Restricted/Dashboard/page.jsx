"use client"
import React, { useEffect, useState } from 'react'
import OrderOverView from '../../../../components/AdminDashboard/Dashboard/OrderOverView'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'

const Dashboard = () => {

  const orderOverview ={
    pending:19,
    progress:7,
    completed:3
  }

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
    <div className='w-full p-[10px] md:p-[19px]'>
      <OrderOverView orderOverview={orderOverview} data={data}/>
    </div>
  )
}

export default Dashboard