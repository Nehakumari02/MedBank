"use client"
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/Images/Home/logo.png";
import {dashboardIcon,dashboardSelectedIcon,ordersIcon,ordersSelectedIcon,chatsIcon,chatsSelectedIcon,paymentsIcon,paymentsSelectedIcon,archiveIcon,archiveSelectedIcon,settingsIcon,settingSelectedIcon,logOutIcon} from './Icons'
import { usePathname, useRouter } from "next/navigation";
import { useSidebarContext } from "@/contexts/SidebarContext";

const menuItems = [
  {
    text: "Dashboard",
    icon: dashboardIcon,
    selectedIcon: dashboardSelectedIcon,
    path: "Dashboard",
  },
  {
    text: "Orders",
    icon: ordersIcon,
    selectedIcon: ordersSelectedIcon,
    path: "Orders",
  },
  {
    text: "Chats",
    icon: chatsIcon,
    selectedIcon: chatsSelectedIcon,
    path: "Chats",
  },
  {
    text: "Payments",
    icon: paymentsIcon,
    selectedIcon: paymentsSelectedIcon,
    path: "Payments",
  },
  {
    text: "Archive",
    icon: archiveIcon,
    selectedIcon: archiveSelectedIcon,
    path: "Archive",
  },
];

const Sidebar = () => {
  const [profilePicture, setProfilePicture] = useState('');
  const [userId, setUserId] = useState(1234);
  const router = useRouter();
  const {sidebarVisibility}=useSidebarContext();
  const path = usePathname().split("/")[3];
  const pathToRedirect = usePathname().split("/").slice(2).join("/");
  const language = usePathname().split("/")[1];

  const selected = true;

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <div className={`${sidebarVisibility?"w-[228px]":"w-[130px]"} h-full flex flex-col py-[35px] px-[25px] items-center gap-[57px] text-[#333333] border-r-[1px] border-[#3333331A]`}>
      <div className="w-[80px] h-[80px]">
      <Image src={Logo} alt="Logo" className="h-[80px] w-[80px]"></Image>
      </div>
      <div className={`h-full flex flex-col items-center justify-between ${sidebarVisibility?"w-[168px]":"w-[43px]"}`}>
        <div className={`flex flex-col ${sidebarVisibility?"items-start":"items-center"} w-full gap-[4px]`}>
          {menuItems.map((item) => (
            <button
              key={item.text}
              onClick={() => router.push(`/${language}/${userId}/${item.path}`)}
              className={`h-[40px] w-full flex items-center justify-start gap-[10px] py-[8px] pr-[12px] pl-[12px] ${path==item.path?"border-l-[1px] border-[#3E8DA7] rounded-[3px] bg-[#E8F3FE]":""}`}
            >
              {path==item.path?item.selectedIcon:item.icon}
              <span className={`font-DM-Sans font-normal text-[16px] leading-[24px] ${path==item.path?"text-[#3E8DA7]":""} ${sidebarVisibility?"":"hidden"}`}>{item.text}</span>
            </button>
          ))}
        </div>
        <div className={`flex flex-col ${sidebarVisibility?"items-start":"items-center"} justify-between w-full gap-[16px]`}>
        <button
              onClick={() => router.push(`/${language}/${userId}/Settings`)}
              className={`h-[40px] w-full flex items-center justify-start gap-[10px] py-[8px] pr-[12px] pl-[12px] ${path=="Settings"?"border-l-[1px] border-[#3E8DA7] rounded-[3px] bg-[#E8F3FE]":""}`}
            >
              {path=="Settings"?settingSelectedIcon:settingsIcon}
              <span className={`font-DM-Sans font-normal text-[16px] leading-[24px] ${path=="Settings"?"text-[#3E8DA7]":""} ${sidebarVisibility?"":"hidden"}`}>Settings</span>
            </button>
            <button
              className={`h-[40px] w-full flex items-center justify-start gap-[10px] py-[8px] pr-[12px] pl-[12px]`}
            >
              {logOutIcon}
              <span className={`font-DM-Sans font-normal text-[16px] leading-[24px] ${sidebarVisibility?"":"hidden"}`}>Logout</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;