import React, { useState, useEffect } from 'react';
import Sidebar from '../Component/Sidebar';
import { Outlet } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="dashboard-container">
      {!isMobile && (
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
      )}
      <div className="main-content-wrapper">
        {isMobile && <MobileSidebarToggle />}
        <Outlet />
      </div>
    </div>
  );
};

const MobileSidebarToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="mobile-menu-btn" onClick={toggleSidebar}>
        ☰
      </button>
      {isOpen && (
        <div className={`mobile-sidebar-overlay ${isOpen ? 'open' : ''}`}>
          <div className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
            <Sidebar />
            <button className="close-btn" onClick={toggleSidebar}>
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
