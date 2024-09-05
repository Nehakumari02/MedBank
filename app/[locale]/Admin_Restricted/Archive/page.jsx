'use client'
import React, { useEffect, useState } from 'react'
import {ArchiveDataTable} from '@/components/AdminDashboard/Archive/ArchiveDataTable'

const Archive = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const response = await fetch('/api/admin_fetchArchiveOrders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        // console.log("data", data)
        setData(data.data)
      } catch (error) {
        console.log("Error fetching all orders: ", error)
      }
    }

    fetchAllOrders();
  }, [])
  return (
    <div className='w-full p-[19px] md:h-[calc(100vh-104px)] overflow-y-scroll'>
      <ArchiveDataTable data={data}/>
    </div>
  )
}

export default Archive