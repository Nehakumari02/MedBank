"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Logo from './logo.png';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    router.push('/User_Interface/Dashboard');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full relative flex justify-between items-start flex-wrap">
        <div className="absolute top-[-4.5em] w-full px-8">
          <Link href="/" className="text-gray-800 text-base no-underline">← Back</Link>
        </div>
        <hr className="w-full border-t border-gray-300 my-4" />
        <div className="flex flex-col items-start">
          <Image src={Logo} alt="MedBank Logo" className="w-24 mb-6" />
          <h1 className="text-2xl font-bold mb-2">Get Started</h1>
          <p className="text-base text-gray-600 mb-6">Create an account to continue!</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-end max-w-md w-full">
          <input
            type="text"
            name="username"
            placeholder="Name"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 mb-4"
          >
            Register
          </button>
          <p className="text-xs text-gray-600 mb-6">
            By signing up, I accept all of Medbank&apos;s terms and conditions,
            <Link href="/Personal-Information" className="text-blue-400"> Personal Information</Link>,
            <Link href="/CancellationPolicy" className="text-blue-400"> Cancellation Policy</Link>,
            <Link href="/SitePolicy" className="text-blue-400"> Site Policy</Link>, and acknowledge their
            <Link href="/PrivacyPolicy" className="text-blue-400"> Privacy Policy</Link>.
          </p>
        </form>
        <p className="text-sm text-gray-600 text-center w-full mt-4">
          Already have an Account? <Link href="/Login" className="text-blue-400">Sign-In</Link>
        </p>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Success!</h2>
            <p className="text-base text-gray-600 mb-6">Congratulations! You have successfully Registered <br/> for MEDBANK. Welcome aboard!</p>
            <button
              onClick={closeModal}
              className="p-3 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


