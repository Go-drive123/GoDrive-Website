import React, { useState } from 'react';
import img1 from '../../assets/images/fp-bg.jpg';
import AuthForm from './FormComponents/AuthForm';
import InputField from './FormComponents/InputField';
import SubmitButton from './FormComponents/SubmitButton';
import { FaEnvelope } from 'react-icons/fa';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      console.log('Forgot password request response:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: `url(${img1})` }}>
      <AuthForm title="Forgot Password" onSubmit={handleSubmit}>
        <InputField
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          icon={<FaEnvelope />}
          className="border-black"
        />
        <SubmitButton label="Reset Password" />
        <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
          <a href="/signin" className="hover:underline">Back to Login</a>
        </div>
      </AuthForm>
    </div>
  );
};

export default ForgotPassword;
