import React, { useEffect, useState } from 'react';
import styles from './followButton.module.css';

const FollowButton: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0);

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
      setScale(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
      setScale(0);
      window.removeEventListener('pointermove', handleMouseMove);
    };
    
    const parentElement = document.querySelector('.section.section--slider');
    if (parentElement) {
      parentElement.addEventListener('mouseenter', handleMouseEnter);
      parentElement.addEventListener('mouseleave', handleMouseLeave);
    }
  }, []);

  const buttonStyle: React.CSSProperties = {
    top: position.y,
    left: position.x,
    opacity: opacity,
    scale: scale,
  };

  return (
    <div style={buttonStyle} className={`${styles.drag_button} `}>
      <span>Drag</span>
    </div>
  );
};

export default FollowButton;
