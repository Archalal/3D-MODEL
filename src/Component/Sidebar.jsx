import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div style={{
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      width: '16.666%', 
     
      padding: '20px',
      overflowY: 'auto', 
      zIndex: 1000,
      boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
    }}>
      <h3>3D Model</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
     <Link to="/" style={{textDecoration:"none"}}>
        <li style={{ padding: '8px 0' }}>
          <h4>OverView</h4>
        </li>
     </Link>
       <Link to='/viewModel' style={{textDecoration:"none"}}>
        <li style={{ padding: '8px 0',listStyle: 'none' }}>
          <h4>View</h4>
        </li>
       </Link>
      
      </ul>
    </div>
  );
};

export default Sidebar;