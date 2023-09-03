import { useState } from 'react';


function DropdownButton() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={handleToggleDropdown}>
        {selectedOption || 'View More'}
      </button>
      {isDropdownOpen && (
        <div className="dropdown-options">
          <div className="option-underconstruction" onClick={() => handleOptionClick('Opción 1')}>Under Construction</div>
          <img className='button-activity' src="/img/alertNoftfound.png" alt="" />
        </div>
      )}
    </div>
  );
}

export default DropdownButton;