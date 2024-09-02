"use client"
import React, { useEffect, useState } from 'react'
import OrderOverView from '../../../../components/AdminDashboard/Dashboard/OrderOverView'

const AdminDashboard = () => {
  const orderOverview = {
    pending: 19,
    progress: 7,
    completed: 3
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const response = await fetch('/api/fetchAllOrders', {
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
    <div className='w-full p-[10px] md:p-[19px]'>
      <OrderOverView orderOverview={orderOverview} data={data} />
    </div>
  )
}

export default AdminDashboard;
