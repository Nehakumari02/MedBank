import { useTranslations } from 'next-intl'
import {DashboardDataTable} from './DashboardDataTable'

import React, { useEffect, useState } from "react";
import {pendingIcon,progressIcon,completedIcon} from '../Icons'
import Tutorial from  '@/components/Tutorial'

const OrderOverView = ({data, totalPages, currentPage, setCurrentPage, buttons, searchQuery, setSearchQuery}) => {
  const [showTutorial, setShowTutorial] = useState(false);
  
  
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    //localStorage.setItem('hasVisited', 'false');

    // Check if the screen width is larger than 768px
    console.log(window.innerWidth)
    const isDesktopView = window.innerWidth >= 1317;
    console.log('hasVisited:', hasVisited);
    console.log('isDesktopView:', isDesktopView);
  
    if (isDesktopView&&!hasVisited) {
      setShowTutorial(true);
      localStorage.setItem('hasVisited', 'true');
    }
    
    if (showTutorial) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Clean up: Remove the class when the component unmounts or the tutorial closes
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [showTutorial]);

  const handleCloseTutorial = () => {
    setShowTutorial(false);
  };

  const t = useTranslations("DashBoard.orderOverView")
  return (
    <div className={`${showTutorial?"h-[calc(100vh-146px)] overflow-y-hidden":""}`}>
    <DashboardDataTable data={data} totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} buttons={buttons} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  )
}

export default OrderOverView