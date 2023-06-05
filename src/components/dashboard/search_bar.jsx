import React from 'react';

const SearchBar = () => {
  return (
    <div className="input-group">
      <input type="text" className="form-control border-0" placeholder="Start searching here..." />
      <div className="input-group-append border-0">
        <img src="line.png" alt='line' className="line-input"/>
        <button className="dropdown-toggle border-0" type="button" data-bs-toggle="dropdown">
          Search in .... <img src="arrow_down.png" className="arrow_down_png float-right" alt="search"/>
        </button>
        <ul className="dropdown-menu border-0">
          <li><a className="dropdown-item border-0" href="#">Option 1</a></li>
          <li><a className="dropdown-item" href="#">Option 2</a></li>
          <li><a className="dropdown-item" href="#">Option 3</a></li>
        </ul>
        <button className="btn btn-blue border-0" type="button">
          <img src="search.png" alt="search" className='search'/>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
