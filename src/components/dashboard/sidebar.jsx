import React from 'react';
import '../style/style.css'

const Sidebar = () => {
  return (
    <div className="sidebar-menu">
      <div className="menu-header">
        <span className="sidebar-logo">
            <img src="Vector.png" alt="Logo" />
        </span>
        <div className="d-flex flex-column list_menu">
            <img src="menu.png" alt="menu" className="img-size" />
            <img src="shape_5.png" alt="shape_5" className="img-size" />
            <img src="shape.png" alt="shape" className="img-size" />
            <img src="shape_4.png" alt="shape_4" className="img-size" />
            <img src="Vector_1.png" alt="Vector_1" className="img-size" />
            <img src="shape_1.png" alt="shape_1" className="img-size" />
            <img src="shape_3.png" alt="shape_3" className="img-size" />
            
        </div>
          <img src="collapse.png" alt="collapse" className="collapse-icon-img"/>
      </div>
    </div>
  );
};

export default Sidebar;
