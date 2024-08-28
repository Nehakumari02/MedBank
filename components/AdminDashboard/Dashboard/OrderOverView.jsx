import { useTranslations } from 'next-intl'
import {DashboardDataTable} from './DashboardDataTable'

import React, { useEffect, useState } from "react";
import {pendingIcon,progressIcon,completedIcon} from '../Icons'
import Tutorial from  '@/components/Tutorial'

const OrderOverView = ({orderOverview,data}) => {

  const t = useTranslations("DashBoard.orderOverView")
  return (
    <div>
    <DashboardDataTable data={data}/>
    </div>
  )
}

export default OrderOverView