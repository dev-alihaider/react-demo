import React from 'react';

const SearchBar = () => {
  return (
    <div className="input-group">
      <input type="text" className="form-control border-0" placeholder="Start searching here..." />
      <div class="input-group-append border-0">
        <img src="line.png" alt='line' class="line-input"/>
        <button className="dropdown-toggle border-0" type="button" data-bs-toggle="dropdown">
          Search in .... <img src="arrow_down.png" class="arrow_down_png float-right" />
        </button>
        <ul class="dropdown-menu border-0">
          <li><a className="dropdown-item border-0" href="#">Option 1</a></li>
          <li><a className="dropdown-item" href="#">Option 2</a></li>
          <li><a className="dropdown-item" href="#">Option 3</a></li>
        </ul>
        <button class="btn btn-blue border-0" type="button">
          <img src="search.png" alt="search" className='search'/>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
