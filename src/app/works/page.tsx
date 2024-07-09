'use client'

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

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
    { id: '1', title: 'Work 1', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque pariatur atque, ut dolor quam laborum omnis at voluptatem vero magni, excepturi, tempora ratione et distinctio. Hic, reprehenderit. Sit, eum?', image: 'https://images.pexels.com/photos/26754397/pexels-photo-26754397/free-photo-of-mer-aube-paysage-soleil-couchant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: '2', title: 'Work 2', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque pariatur atque, ut dolor quam laborum omnis at voluptatem vero magni, excepturi, tempora ratione et distinctio. Hic, reprehenderit. Sit, eum?', image: 'https://images.unsplash.com/photo-1719857090179-aa689c5d7434?q=80&w=2769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '3', title: 'Work 3', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque pariatur atque, ut dolor quam laborum omnis at voluptatem vero magni, excepturi, tempora ratione et distinctio. Hic, reprehenderit. Sit, eum?', image: 'https://images.unsplash.com/photo-1720209388220-a26fbff2a64f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const letterWrapper = (title: string) => {
    return title.split('').map((char, index, arr) => {
        if (char !== ' ') {
            const previousChar = arr[index - 1];
            const spanClass = previousChar === ' ' ? 'space_margin' : '';
            return (
                <span key={index} className={spanClass || undefined}>
                    {char}
                </span>
            );
        }
    });
};

const lineWrapper = (desc: string) => {
    return (
        <>
            {desc.split('\n').map((line, index) => (
                <span key={index} className={styles.line_span}>
                    {line}
                    <br />
                </span>
            ))}
        </>
    );
};




export default function Works(): JSX.Element {
    const [currentWorkId, setCurrentWorkId] = useState<string>(works[0].id);

    const handleSlideChange = (swiper: any) => {
        const activeWork = works[swiper.realIndex];
        setCurrentWorkId(activeWork.id);
    };

    return (
        <main className={styles.main}>
            <h1 className='page_title'>Works</h1>
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
                            {/* <img src={work.image} alt="" /> */}
                            <Image 
                            src={work.image}
                            alt=""
                            />
                            <div className="overlay"></div>
                            <div className={styles.slide_texts_container}>
                                <p className={styles.slide_desc}>
                                    {lineWrapper(work.desc)}
                                    {/* {work.desc} */}
                                </p>
                                <p className={styles.slide_title}>
                                    {letterWrapper(work.title)}
                                </p>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
                <div className={styles.slide_id_text}>{parseFloat(currentWorkId) > 9 ? currentWorkId: '0' + currentWorkId}</div>
                </Swiper>
            </section>
        </main>
    );
}
