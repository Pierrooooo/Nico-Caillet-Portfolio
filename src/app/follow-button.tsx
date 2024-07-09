import React, { useEffect, useState } from 'react';

const FollowButton: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.pageX,
        y: event.pageY,
      });
    };
  
    window.addEventListener('pointermove', handleMouseMove);
  
    return () => {
      window.removeEventListener('pointermove', handleMouseMove);
    };
  }, []);
  

  const buttonStyle: React.CSSProperties = {
    top: position.y,
    left: position.x,
  };

  return (
    <button style={buttonStyle} className='drag_button'>
      <span>Drag</span>
    </button>
  );
};

export default FollowButton;
