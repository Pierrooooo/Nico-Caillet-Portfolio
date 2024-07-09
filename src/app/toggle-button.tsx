import React, { useState } from 'react';

const ToggleButton: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleBodyClass = () => {
    if (isToggled) {
      document.body.classList.remove('monochrome');
    } else {
      document.body.classList.add('monochrome');
    }
    setIsToggled(!isToggled);
  };

  return (
    <button className='toggle_body' onClick={toggleBodyClass}>
      Try me
    </button>
  );
};

export default ToggleButton;