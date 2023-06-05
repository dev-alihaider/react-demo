import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Sidebar from './sidebar';
import SearchBar from './search_bar';
import ComponentSearch from './component_search';

const Dashboard = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('user: ' + username, 'password: ' + password);

  }, [username, password]);

  const loginUser = async () => { 
    let user = prompt('Enter your username');
    let pass = prompt('Enter your password');
    
    try {
      const response = await fetch('https://front-end-dev.alvanda.com/api/auth/login'
      , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: user, password: pass })
      });

      if (response.ok) {
        // Authentication succeeded
        console.log('User authenticated successfully');
      } else {
        // Authentication failed
        console.log('Authentication failed');
      }
    } catch (error) {
      console.error('Error occurred during authentication:', error);
    }
  };
  return (
    <div className="dashboard">
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="content">
        <div className="top-section">
          <SearchBar/>
          <span><img src="notification.png" alt="Notificatin" className="notification"/></span>
          <a className="avatar text-decoration-none" onClick={loginUser}>DH</a>
        </div>
        <div className="flow-section">
            <span className="title-flows">Flows</span>
            <span className="help-section"><img src='question.png' className="question" alt="flow"/> How do Flows work? </span>
        </div>
        <div className="component-section row">
          <div className="col-6">
            <div className="c-type-help">
              <span className="c-title">Component Type</span>
              <span><img src="question_light.png" className="c-type" alt="type"/></span>
            </div>
            <ComponentSearch/>
          </div>
          <div className="col-6">
            <div className="c-type-help">
              <span className="c-title">Specific Component</span>
              <span><img src="question_light.png" className="c-type" alt='component'/></span>
            </div>
            <ComponentSearch/>
          </div>
        </div>
        <div className="row">
            <div className="d-flex w-100 info-section">
                <img src="info.png" className="info" alt='info'/>
                <span className="info-span">
                  Please use the Search Fields above to either display the Flow of a specific Component Type or to find where a specific component is in their Flow.
                </span>
            </div>
        </div>
        {/* Main content */}
      </div>
    </div>
  );
};

export default Dashboard;
