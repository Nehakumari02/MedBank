"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Logo from './logo.png';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
          <h1>Welcome Back!</h1>
          <p>Login account to continue!</p>
        </div>
        <form onSubmit={handleSubmit}>
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
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
          <p className="forgot-password">
            <Link href="/forgot-password">Forgot Password?</Link>
          </p>
        </form>
        <p className="login-link">
          Don&apos;t have an Account? <Link href="/Signup">Register</Link>
        </p>
      </div>
    </div>
  );
}
