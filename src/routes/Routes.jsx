import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Common/Navbar';
import Footer from '../components/Common/Footer'; // Import Footer component
import About from '../components/Pages/About';
import Help from '../components/Pages/Help';
import Home from '../components/Pages/Home';
import Contact from '../components/Pages/Contact';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import ForgotPassword from '../components/Auth/ForgotPassword';
import NotFound from '../components/Pages/NotFound';
import AdminDashboard from '../components/Admin/AdminDashboard';
import DriverDashboard from '../components/Driver/DriverDashboard';
import UserDashboard from '../components/User/UserDashboard';
import ProtectedRoute from '../components/Common/ProtectedRoute';
import OtpVerification from '../components/Auth/OtpVerification'; // Import OtpVerification component

function AppRoutes() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  // Paths where Navbar and Footer should be hidden
  const hideNavbarPaths = [
    '/signin',
    '/signup',
    '/forgot-password',
    '/admin-dashboard',
    '/driver-dashboard',
    '/user-dashboard',
  ];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {/* Conditionally render Navbar */}
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/signin"
          element={<Login setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />}
        />
        <Route
          path="/signup"
          element={<Register setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/verify-otp"
          element={<OtpVerification setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />}
        />
        <Route
          path="/driver-dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn} userRole={userRole} requiredRole="driver">
              <DriverDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn} userRole={userRole} requiredRole="user">
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Conditionally render Footer */}
      {!shouldHideNavbar && <Footer />}
    </>
  );
}

export default AppRoutes;
