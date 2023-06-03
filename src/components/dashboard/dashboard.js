import React from 'react';
import './Dashboard.css';
import Sidebar from './sidebar';
import SearchBar from './search_bar';
import ComponentSearch from './component_search';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="content">
        <div class="top-section">
          <SearchBar/>
          <span><img src="notification.png" alt="Notificatin" class="notification"/></span>
          <span class="avatar">DH</span>
        </div>
        <div class="flow-section">
            <span class="title-flows">Flows</span>
            <span class="help-section"><img src='question.png' class="question"/> How do Flows work? </span>
        </div>
        <div class="component-section row">
          <div class="col-6">
            <div class="c-type-help">
              <span class="c-title">Component Type</span>
              <span><img src="question_light.png" class="c-type"/></span>
            </div>
            <ComponentSearch/>
          </div>
          <div class="col-6">
            <div class="c-type-help">
              <span class="c-title">Specific Component</span>
              <span><img src="question_light.png" class="c-type"/></span>
            </div>
            <ComponentSearch/>
          </div>
        </div>
        <div class="row">
            <div class="d-flex w-100 info-section">
                <img src="info.png" class="info"/>
                <span class="info-span">
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
