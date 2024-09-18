"use client"
import React, { useEffect, useState } from 'react'
import { DashboardOrderDataTable } from '@/components/AdminDashboard/Dashboard/DashboardOrderDataTable';
import { DashboardCustomerListDataTable } from '@/components/AdminDashboard/Dashboard/DashboardCustomerListDataTable';
import { DashboardPaymentListDataTable } from '@/components/AdminDashboard/Dashboard/DashboardPaymentStatusDataTable';
import { DashboardSampleListDataTable } from '@/components/AdminDashboard/Dashboard/DashboardSampleListDataTable';

const AdminDashboard = () => {
  const [ordersData,setOrdersData] = useState([]);
  const [searchQueryOrders,setSearchQueryOrders] = useState("");
  const [customersData,setCustomersData] = useState([]);
  const [searchQueryCustomers,setSearchQueryCustomers] = useState("");
  const [paymentData,setPaymentData] = useState([]);
  const [searchQueryPayment,setSearchQueryPayment] = useState("");
  const [sampleData,setSampleData] = useState([]);
  const [searchQuerySample,setSearchQuerySample] = useState("");
  const { token, notificationPermissionStatus } = useFcmToken('66e055de6ddc7825fbd8a103')

  useEffect(()=>{
    const fetchOrdersByUserId = async()=>{
      try{
        const response = await fetch('/api/admin_fetchCustomers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ page:1, limit:2, searchQueryCustomers}),
        });
        const data = await response.json();
        if(data.error){
          setCustomersData([]);
        }
        console.log("data for customers",data)
        setCustomersData(data.data)
        
      }catch(error){
        console.log("fetch orders error ",error)
      }
    }

    fetchOrdersByUserId();
  },[searchQueryCustomers])

  useEffect(()=>{
    const fetchOrdersByUserId = async()=>{
      try{
        const response = await fetch('/api/admin_fetchOrders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ page:1, limit:2, searchQueryOrders }),
        });
        const data = await response.json();
        if(data.error){
          setOrdersData([]);
        }
        console.log("data",data)
        setOrdersData(data.data)
        
      }catch(error){
        console.log("fetch orders error ",error)
      }
    }

    fetchOrdersByUserId();
  },[searchQueryOrders])

  useEffect(()=>{
    const fetchOrdersByUserId = async()=>{
      try{
        const response = await fetch('/api/admin_fetchPaymentList', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ page:1, limit:2, searchQueryPayment }),
        });
        const data = await response.json();
        if(data.error){
          setPaymentData([]);
        }
        console.log("data",data)
        setPaymentData(data.data)
        
      }catch(error){
        console.log("fetch orders error ",error)
      }
    }

    fetchOrdersByUserId();
  },[searchQueryPayment])

  useEffect(()=>{
    const fetchOrdersByUserId = async()=>{
      try{
        const response = await fetch('/api/admin_fetchSamples', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ page:1, limit:2, searchQuerySample }),
        });
        const data = await response.json();
        if(data.error){
          setSampleData([]);
        }
        console.log("data",data)
        setSampleData(data.data)
        
      }catch(error){
        console.log("fetch orders error ",error)
      }
    }

    fetchOrdersByUserId();
  },[searchQuerySample])

  return (
    <div className='w-full p-[10px] md:p-[19px] space-y-6'>
      <DashboardOrderDataTable data={ordersData} searchQuery={searchQueryOrders} setSearchQuery={setSearchQueryOrders} />
      <DashboardCustomerListDataTable data={customersData} searchQuery={searchQueryCustomers} setSearchQuery={setSearchQueryCustomers} />
      <DashboardPaymentListDataTable data={paymentData} searchQuery={searchQueryPayment} setSearchQuery={setSearchQueryPayment} />
      <DashboardSampleListDataTable data={sampleData} searchQuery={searchQuerySample} setSearchQuery={setSearchQuerySample} />
    </div>
  )
}

export default AdminDashboard;
