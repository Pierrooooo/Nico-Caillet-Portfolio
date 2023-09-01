import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const TransitionContainer = styled.div`
  transform: translateY(100%);
  animation: ${slideIn} .7s ease forwards;
`;

const PageTransition = ({ children }) => {
  const router = useRouter();
  const [isTransitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setTransitioning(true);
    };

    const handleRouteComplete = () => {
      setTransitioning(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteComplete);
    };
  }, [router]);

  return (
    <TransitionContainer  style={{ transform: isTransitioning ? 'translateY(100%)' : 'translateY(0)' }}>
      {children}
    </TransitionContainer>
  );
};

export default PageTransition;
