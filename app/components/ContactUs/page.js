"use client"
import React, { useState } from "react";
import HomePageSectionHeader from "../HomePageSectionHeader/page";
import contactUsBg from "../../../public/Images/Home/contactUsBg.png";
import Image from "next/image";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    inquiryDetails: ""
  });
  const [confirmEmail, setConfirmEmail] = useState("");
  const [check,setCheck] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = ()=>{
    if(formData.email!==confirmEmail){
      alert("Email doesn't match");
      return;
    }
    if(!check){
      alert("Please accept terms and conditions");
      return;
    }
    console.log(formData);
    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
      inquiryDetails: ""
    });
    setCheck(false);
    setConfirmEmail("");
    alert("Form submitted successfully.")
  }

  return (
    <section className="md:px-[42px] lg:px-[62px] py-[100px] w-full text-[#333333] bg-[#7171710D]">
      <HomePageSectionHeader title={"Contact Us"} subTitle={"Contact Us"} />
      <div className="md:pl-[50px] lg:pl-[90px] pt-[20px] pb-[80px] w-full flex gap-[32px]">
        <div className="relative w-full">
          <div className="w-full lg:w-[441px] flex flex-col gap-[24px]">
            <span className="flex items-center justify-start gap-[12px] font-sans text-[36px] font-medium leading-[42px] gradient-primary bg-clip-text text-transparent">
              REACH OUT TO US
            </span>
            <p className="font-sans font-normal text-[20px] leading-[34px]">
              Connect with Medbank's team for inquiries, support, and
              collaboration opportunities. We're here to assist you with your
              genetic analysis needs and provide personalized guidance every
              step of the way.
            </p>
          </div>
          <div className="absolute md:top-[200px] md:right-[50%] md:translate-x-[50%] lg:translate-x-0 lg:top-[50px] lg:right-[20px] bg-white md:w-[675px] shadow-lg p-[70px] flex flex-col gap-[24px] rounded-3xl">
            <div className="relative z-0">
              <input
                type="text"
                value={formData.name}
                onChange={(e)=>handleChange(e)}
                id="name"
                className="block py-2.5 px-0 w-full text-[17px] font-sans font-normal leading-[22px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute text-[17px] font-sans font-normal leading-[22px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Full Name
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                value={formData.phoneNumber}
                onChange={(e)=>handleChange(e)}
                id="phoneNumber"
                className="block py-2.5 px-0 w-full text-[17px] font-sans font-normal leading-[22px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="phoneNumber"
                className="absolute text-[17px] font-sans font-normal leading-[22px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Phone Number
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                value={formData.email}
                onChange={(e)=>handleChange(e)}
                id="email"
                className="block py-2.5 px-0 w-full text-[17px] font-sans font-normal leading-[22px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-[17px] font-sans font-normal leading-[22px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Email Address
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
                id="confirmEmail"
                className="block py-2.5 px-0 w-full text-[17px] font-sans font-normal leading-[22px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="confirmEmail"
                className="absolute text-[17px] font-sans font-normal leading-[22px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Confirm Email Address
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                value={formData.inquiryDetails}
                onChange={(e)=>handleChange(e)}
                id="inquiryDetails"
                className="block py-2.5 px-0 w-full text-[17px] font-sans font-normal leading-[22px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="inquiryDetails"
                className="absolute text-[17px] font-sans font-normal leading-[22px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Inquiry Details
              </label>
            </div>
            <div>
              <label className="inline-flex items-start">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={check}
                  onChange={()=>setCheck(!check)}
                  required
                />
                <span className="ml-2">
                  By clicking checkbox, I authorize Medbank to call me and send
                  text messages and emails to me about Medbank and services at
                  the phone number or email address I entered above. You can opt
                  out anytime. You also agree to our Terms of Service. Privacy
                  Policy.
                </span>
              </label>
            </div>
            <button onClick={()=>handleSubmit()} className="h-[55px] w-[170px] px-[10px] flex items-center justify-center gap-[8px] bg-[#FFAA00] rounded-full text-[#003E5C]">
              {DmIcon} Get Guide
            </button>
          </div>
        </div>
      </div>
      <Image src={contactUsBg} alt="bgImage" className="w-full md:h-[650px]" />
    </section>
  );
};

export default ContactUs;

  const DmIcon = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_1803_1757)">
  <path d="M15.3209 0.0478115L0.264889 7.61581C0.190222 7.65848 0.128889 7.71448 0.0808889 7.78381C0.0328889 7.85315 0.00622222 7.93048 0.000888889 8.01581C-0.00444444 8.10115 0.0142222 8.18115 0.0568889 8.25581C0.0995556 8.33048 0.158222 8.38915 0.232889 8.43181L3.75289 10.6078V15.5358C3.75289 15.6425 3.78222 15.7358 3.84089 15.8158C3.89956 15.8958 3.97689 15.9518 4.07289 15.9838C4.16889 16.0158 4.26756 16.0158 4.36889 15.9838C4.47022 15.9518 4.54756 15.8931 4.60089 15.8078L7.01689 12.6078L12.4249 15.9358C12.5636 16.0211 12.7102 16.0291 12.8649 15.9598C13.0196 15.8905 13.1076 15.7758 13.1289 15.6158L15.9929 0.543812C16.0142 0.458478 16.0062 0.373145 15.9689 0.287811C15.9316 0.202478 15.8782 0.133145 15.8089 0.079812C15.7396 0.0264788 15.6596 -0.0028553 15.5689 -0.00818825C15.4782 -0.0135212 15.3956 0.00514412 15.3209 0.0478115ZM4.20089 9.77581L1.43289 8.07981L12.4729 2.52781L4.20089 9.77581ZM4.69689 14.1278V10.5918L12.4569 3.79181L4.69689 14.1278ZM12.3289 14.7838L7.57689 11.8558L14.6969 2.36781L12.3289 14.7838Z" fill="#003E5C"/>
  </g>
  <defs>
  <clipPath id="clip0_1803_1757">
  <rect width="16" height="16" fill="white" transform="matrix(1 0 0 -1 0 16)"/>
  </clipPath>
  </defs>
  </svg>