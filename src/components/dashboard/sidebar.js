import React, { useState } from 'react';
import '../style/style.css'

const Sidebar = () => {
  return (
    <div class="sidebar-menu">
      <div className="menu-header">
        <span class="sidebar-logo">
            <img src="Vector.png" alt="Logo" />
        </span>
        <div className="d-flex flex-column list_menu">
            <img src="menu.png" alt="menu" class="img-size" />
            <img src="shape_5.png" alt="shape_5" class="img-size" />
            <img src="shape.png" alt="shape" class="img-size" />
            <img src="shape_4.png" alt="shape_4" class="img-size" />
            <img src="Vector_1.png" alt="Vector_1" class="img-size" />
            <img src="shape_1.png" alt="shape_1" class="img-size" />
            <img src="shape_3.png" alt="shape_3" class="img-size" />
            
        </div>
          <img src="collapse.png" alt="collapse" class="collapse-icon-img"/>
      </div>
    </div>
  );
};

export default Sidebar;
