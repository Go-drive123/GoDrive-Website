import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img1 from '../../assets/images/login-bg.jpg';
import AuthForm from './FormComponents/AuthForm';
import InputField from './FormComponents/InputField';
import SubmitButton from './FormComponents/SubmitButton';
import Checkbox from './FormComponents/Checkbox';
import SocialButton from './FormComponents/SocialButton';
import { FaGoogle, FaFacebookF, FaEnvelope } from 'react-icons/fa';
import PasswordField from './FormComponents/PasswordField';
import axios from '../../utils/axios';

const Login = ({ setIsLoggedIn, setUserRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email === 'inmakesgoldentheater@gmail.com' && password === 'admin@123') {
      localStorage.setItem('token', 'admin-token'); // You might want to store a real token here
      setIsLoggedIn(true);
      setUserRole('admin');
      navigate('/admin-dashboard');
      return;
    }
    
    try {
      const { data } = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', data.token);
      if (typeof setIsLoggedIn === 'function') setIsLoggedIn(true);
      if (typeof setUserRole === 'function') setUserRole(data.role);
      if (data.role === 'admin') {
        navigate('/admin-dashboard');
      } else if (data.role === 'driver') {
        navigate('/driver-dashboard');
      } else {
        navigate('/user-dashboard');
      }
    } catch (error) {
      toast.error(error.response.data.message || 'An error occurred');
      console.error(error);
    }
  };


  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${img1})` }}>
      <ToastContainer />
      <AuthForm title="Sign in" onSubmit={handleSubmit}>
        <InputField
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          icon={<FaEnvelope />}
          className="border-black"
        />
        <PasswordField
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border-black"
        />
        <Checkbox
          label="Keep me signed in"
          name="keepSignedIn"
          checked={keepSignedIn}
          onChange={(e) => setKeepSignedIn(e.target.checked)}
        />
        <SubmitButton label="Sign in" />
        <div className="text-center text-gray-600 mb-3">or</div>
        <div className="flex justify-between items-center">
          <SocialButton
            label="Sign in with Google"
            onClick={() => { /* Handle Google sign-in */ }}
            icon={<FaGoogle />}
            className="bg-blue-600 hover:bg-blue-700 text-white mr-2"
          />
          <SocialButton
            label="Sign in with Facebook"
            onClick={() => { /* Handle Facebook sign-in */ }}
            icon={<FaFacebookF />}
            className="bg-blue-900 hover:bg-blue-800 text-white ml-2"
          />
        </div>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <a href="/forgot-password" className="hover:underline">Forgot password?</a>
          <a href="/signup" className="hover:underline">Don't have an account? Register</a>
        </div>
      </AuthForm>
    </div>
  );
};

Login.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
  setUserRole: PropTypes.func.isRequired,
};

export default Login;
