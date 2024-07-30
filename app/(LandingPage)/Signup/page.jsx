"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from './logo.png';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
   

<div className="signup-page">
        <div className="signup-container">
            <div className="top-bar">
            <Link href="/" className="back-link">← Back</Link>
            
            </div>
            <hr className="divider" />
            <div className="left-column">
            <Image src={Logo} alt="MedBank Logo" className="logo" />
            <h1>Get Started</h1>
            <p>Create an account to continue!</p>
            </div>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="Name"
                value={formData.username}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Create Password"
                value={formData.password}
                onChange={handleChange}
            />
            <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
            />
            <button type="submit">Register</button>
            <p className="terms">
                By signing up, I accept all of Medbank's terms and conditions,
                <Link href="/Personal-Information"> Personal Information</Link>,
                <Link href="/CancellationPolicy"> Cancellation Policy</Link>,
                <Link href="/SitePolicy"> Site Policy</Link>, and acknowledge their
                <Link href="/PrivacyPolicy"> Privacy Policy</Link>.
            </p>
            </form>
            <p className="login-link">
            Already have an Account? <Link href="/login">Sign-In</Link>
            </p>
        </div>
    </div>



  );
}
