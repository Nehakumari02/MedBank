import React from 'react'
import OrderOverView from '../../../../components/UserDashboard/Dashboard/OrderOverView'

const Dashboard = () => {
  const orderOverview ={
    pending:19,
    progress:7,
    completed:3
  }

  return (
    <div className='w-full p-[19px]'>
      <OrderOverView orderOverview={orderOverview}/>

    </div>
  )
}

export default Dashboard