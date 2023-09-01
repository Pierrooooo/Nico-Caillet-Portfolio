import fs from 'fs';
import Link from 'next/link';
import PageTransition from '../components/PageTransition';
import Image from 'next/image';
import { useState } from 'react';

const DelayedLink = ({ to, delay, children }) => {
    const [redirect, setRedirect] = useState(false);

    const handleClick = (event) => {
      event.preventDefault();
      setRedirect(true);
      setTimeout(() => {
        window.location.href = to;
      }, delay);
    };
  
    if (redirect) {
      return <>{children}</>;
    }
  
    return (
      <a href={to} onClick={handleClick}>
        {children}
      </a>
    );
  };
  

export async function getServerSideProps() {
    const filePath = process.cwd() + '/public/datas/works.json';

    try {
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        const works = JSON.parse(fileContents);

        return {
            props: {
                works,
            },
        };
    } catch (error) {
        console.error('Error reading or parsing works.json:', error);
        return {
            props: {
                works: [],
            },
        };
    }
}

function Works({ works }) {
    return (
        <PageTransition>
            <div>
                <h1>Works</h1>
                <ul>
                {Object.keys(works.works).map((projectId) => (
                    <li className='test' key={projectId}>
                        <DelayedLink to={`/works/${projectId}`} delay={1000}>
                            <img src={works.works[projectId].images[0].url} className='animatedImage'></img>
                        </DelayedLink>
                    </li>
                ))}
                </ul>
            </div>
        </PageTransition>
    );
  }

export default Works;