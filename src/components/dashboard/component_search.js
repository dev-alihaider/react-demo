import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const ComponentSearch = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="dropdown">
      <div className="input-group component-search w-100 border h-49px">
        <input
          type="text"
          className="form-control border-0 component-search"
          placeholder="Type here..."
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button
          className="btn btn-search-component"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaSearch />
        </button>
      </div>
      <ul className="dropdown-menu">
        {filteredOptions.map((option, index) => (
          <li
            key={index}
            className={`dropdown-item ${option === selectedOption ? 'active' : ''}`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentSearch;
