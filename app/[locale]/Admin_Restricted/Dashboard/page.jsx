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
  const [totalPages,setTotalPages] = React.useState(10);
  const [currentPage,setCurrentPage] = React.useState(2);
  const [buttons,setButtons] = React.useState([1,2,3,4,5,6,"..."]);
  
  React.useEffect(()=>{
    if(currentPage<4){
      setButtons(()=>{
        return([1,2,3,4,"...",totalPages])
      })
    }else if(currentPage>totalPages-3&&currentPage<=totalPages){
      setButtons(()=>{
        return([1,"...",totalPages-3,totalPages-2,totalPages-1,totalPages])
      })
    }else{
      setButtons(()=>{
        return([1,"...",currentPage-1,currentPage,currentPage+1,"...",totalPages])
      })
    }
  },[currentPage])

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
      <OrderOverView orderOverview={orderOverview} data={data} totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} buttons={buttons} />
    </div>
  )
}

export default AdminDashboard;
