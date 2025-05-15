import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      width: '240px',
      padding: '24px 16px',
      overflowY: 'auto',
      zIndex: 1000,
      backgroundColor: '#ffffff',
      boxShadow: '4px 0 12px rgba(0, 0, 0, 0.08)',
      borderRight: '1px solid rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease'
    }}>
    
      <div style={{
        padding: '0 8px 24px 8px',
        marginBottom: '16px',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
      }}>
        <h3 style={{
          margin: 0,
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#0d9488',
          letterSpacing: '-0.5px'
        }}>3D Model Studio</h3>
      </div>

    
      <ul style={{ 
        listStyle: 'none', 
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <li style={{
            padding: '12px 16px',
            borderRadius: '8px',
            transition: 'all 0.2s ease',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
           
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0d9488'
            }}>
             <i class="fa-solid fa-house"></i>
            </div>
            <span style={{
              fontSize: '1rem',
              fontWeight: 500,
              color: '#1e293b'
            }}>Overview</span>
          </li>
        </Link>

        <Link to="/viewModel" style={{ textDecoration: 'none' }}>
          <li style={{
            padding: '12px 16px',
            borderRadius: '8px',
            transition: 'all 0.2s ease',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0d9488'
            }}>
           <i class="fa-solid fa-eye"></i>
            </div>
            <span style={{
              fontSize: '1rem',
              fontWeight: 500,
              color: '#1e293b'
            }}>View Model</span>
          </li>
        </Link>
      </ul>

      {/* Bottom spacer */}
      <div style={{ height: '40px' }}></div>
    </div>
  );
};

export default Sidebar;