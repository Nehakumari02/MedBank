"use client"
import React, { useDebugValue, useEffect, useState } from 'react'
import OrderOverView from '../../../../components/UserDashboard/Dashboard/OrderOverView'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { getToken } from 'firebase/messaging'
import {messaging} from '@/firebase.js'

const Dashboard = () => {
  const userId = usePathname().split("/")[2]
  console.log(userId)

  function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        getToken(messaging,{vapidKey:"BMeV9lF3EmvjR5oXdqF7tRL1rlwlT-vCOdyg3HXIIHg9AsCtAYaRp-1fhsmTgiuHO1_4K5BtXlsOO3o7v7XLQoc"})
      }}
    )
  }

  useEffect(()=>{
    requestPermission();
  },[])


  const [orderOverview,setOrderOverview] = useState({
    pending:0,
    progress:0,
    completed:0
  })

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
        // console.log("data",data)
        setData(data.data)
        let pending = 0
        let progress = 0
        let completed = 0
        data.data.forEach(item => {
          if (item.requestSheetStatus === 'inUserProgress') {
            pending++;
          } else if (item.requestSheetStatus !== 'inUserProgress' && item.paymentStatus !== 'isCompleted') {
            progress++;
          } else if (item.paymentStatus === 'isCompleted') {
            completed++;
          }
        });
        setOrderOverview({
          pending,progress,completed
        })
        
      }catch(error){
        console.log("fetch orders error ",error)
      }
    }

    fetchOrdersByUserId(userId);
  },[])

  return (
    <div className='w-full p-[10px] md:p-[19px]'>
      <OrderOverView orderOverview={orderOverview} data={data}/>
    </div>
  )
}

export default Dashboard