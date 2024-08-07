'use client'

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { titleFont } from '../utils/fonts';
import Image from 'next/image';
import ToggleButton from '../toggle-button';
import FollowButton from '../components/followButton';
import { lineWrapper } from '../components/lineWrapper';
import { letterWrapper } from '../components/letterWrapper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';

interface Work {
    id: string;
    title: string;
    desc: string;
    image: string;
}

const works: Work[] = [
    { id: '1', title: 'Work 1', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque pariatur atque, ut dolor quam laborum omnis at voluptatem vero magni, excepturi, tempora ratione et distinctio. Hic, reprehenderit. Sit, eum?', image: '/assets/images/landscape-01.webp' },
    { id: '2', title: 'Work 2', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque pariatur atque, ut dolor quam laborum omnis at voluptatem vero magni, excepturi, tempora ratione et distinctio. Hic, reprehenderit. Sit, eum?', image: '/assets/images/landscape-02.webp' },
    { id: '3', title: 'Work 3', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque pariatur atque, ut dolor quam laborum omnis at voluptatem vero magni, excepturi, tempora ratione et distinctio. Hic, reprehenderit. Sit, eum?', image: '/assets/images/landscape-01.webp' },
];


export default function Works(): JSX.Element {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [windowHeight, setWindowHeight] = useState<number>(0);
    const [currentWorkId, setCurrentWorkId] = useState<string>(works[0].id);
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        }
    }, []);

    const handleSlideChange = (swiper: any) => {
        const activeWork = works[swiper.realIndex];
        setCurrentWorkId(activeWork.id);
    };

    return (
        <main className={styles.main}>
            <h1 className={`${titleFont.className} page_title`}>Works</h1>
            <section className='section section--slider'>
                <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                loop={true}
                onSlideChange={handleSlideChange}
                >
                {works.map(work => (
                    <SwiperSlide key={work.id} className={styles.slide}>
                        <Link href={`/works/${work.id}`} className={styles.slide_link}>
                            <Image 
                                src={work.image}
                                alt=""
                                width={windowWidth}
                                height={windowHeight}
                            />
                            <div className="overlay"></div>
                            <div className={styles.slide_texts_container}>
                                <p className={styles.slide_desc}>
                                    {lineWrapper({ desc: work.desc, className: styles.line_span })}
                                </p>
                                <p className={`${titleFont.className} ${styles.slide_title}`}>
                                    {letterWrapper({ title: work.title, spaceClassName: styles.space_margin })}
                                </p>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
                <FollowButton />
                <div className={styles.slide_id_text}>{parseFloat(currentWorkId) > 9 ? currentWorkId: '0' + currentWorkId}</div>
                </Swiper>
            </section>
            <ToggleButton />
        </main>
    );
}
