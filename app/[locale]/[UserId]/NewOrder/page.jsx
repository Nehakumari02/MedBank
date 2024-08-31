"use client"
import React, { useEffect } from 'react'
import NewOrderBox from '@/components/UserDashboard/NewOrder/NewOrderBox'
import {OrderProvider} from '@/contexts/OrderContext'
import { setEngine } from 'crypto'
import { useSession } from 'next-auth/react'

const NewOrder = () => {
  const {data:session} = useSession();
  const createNewOrder =async()=>{
    try{
      const response = await fetch('/api/newOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userId:session.user.id}),
      });
      const data = await response.json();
      console.log(data.message)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    createNewOrder();
  },[session])
  return (
    <OrderProvider>
      <div className='w-full h-full p-[10px] md:p-[19px]'>
        <NewOrderBox/>
      </div>
    </OrderProvider>
  )
}

export default NewOrder