import React, { useEffect, useState, useRef } from 'react';

const FollowButton: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const parentRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.pageX,
        y: event.pageY,
      });
    };

    const handleMouseEnter = () => {
      window.addEventListener('pointermove', handleMouseMove);
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
      window.removeEventListener('pointermove', handleMouseMove);
    };
    
    const parentElement = document.querySelector('.section.section--slider');
    if (parentElement) {
      parentElement.addEventListener('mouseenter', handleMouseEnter);
      parentElement.addEventListener('mouseleave', handleMouseLeave);
    }

    // return () => {
    //   if (parentElement) {
    //     parentElement.removeEventListener('mouseenter', handleMouseEnter);
    //     parentElement.removeEventListener('mouseleave', handleMouseLeave);
    //   }
    //   window.removeEventListener('pointermove', handleMouseMove);
    // };
  }, []);

  const buttonStyle: React.CSSProperties = {
    top: position.y,
    left: position.x,
    opacity: opacity,
    transition: 'opacity 0.3s',
  };

  return (
    <button style={buttonStyle} className='drag_button'>
      <span>Drag</span>
    </button>
  );
};

export default FollowButton;
