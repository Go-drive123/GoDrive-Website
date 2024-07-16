// OtpVerification.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../utils/axios'; // Ensure axios is correctly imported and configured

const OtpVerification = ({ setIsLoggedIn, setUserRole }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract email from location state
  const email = location.state?.email || '';

  const [otp, setOtp] = useState(new Array(4).fill(''));

  useEffect(() => {
    if (!email) {
      toast.error("Email not found, redirecting to signin.");
      navigate('/');
    }
  }, [email, navigate]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const finalOtp = otp.join('');
    try {
      const response = await axios.post('/api/auth/verify-otp', { email, otp: finalOtp });
      toast.success(response.data.message);

      // Assuming response.data.role contains user's role after verification
      const { role } = response.data;
      console.log("User role:", role);

      setIsLoggedIn(true);
      setUserRole(role);

      // Redirect based on user role
      switch (role) {
        case 'driver':
          navigate('/driver-dashboard');
          break;
        case 'user':
          navigate('/user-dashboard');
          break;
        default:
          navigate('/'); // Default redirect if role is not recognized
          break;
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'An error occurred';
      toast.error(errorMessage);
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">OTP Verification</h2>
          <div className="flex justify-center mb-6 space-x-2">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                name="otp"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                className="w-16 h-16 text-center border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-2xl"
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
