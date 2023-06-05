import React, { useState } from 'react';
import axios from 'axios';
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

  const searchComponent = async () => {
    try {
      const response = await axios.get('https://686cea9b-340d-474c-acc9-6be06390f1d7.mock.pstmn.io', {
        params: {
          q: searchValue
        }
      });
  
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }

    // Rest of the code
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
          onClick={searchComponent}
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
