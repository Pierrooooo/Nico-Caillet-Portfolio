'use client'

import Link from 'next/link';
import styles from './page.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface Work {
    id: string;
    title: string;
    desc: string;
    image: string;
}

const works: Work[] = [
    { id: '1', title: 'Work 1', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque pariatur atque, ut dolor quam laborum omnis at voluptatem vero magni, excepturi, tempora ratione et distinctio. Hic, reprehenderit. Sit, eum?', image: 'https://images.unsplash.com/photo-1720264715773-ec63cbb81e52?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '2', title: 'Work 2', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque pariatur atque, ut dolor quam laborum omnis at voluptatem vero magni, excepturi, tempora ratione et distinctio. Hic, reprehenderit. Sit, eum?', image: 'https://images.unsplash.com/photo-1719857090179-aa689c5d7434?q=80&w=2769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '3', title: 'Work 3', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque pariatur atque, ut dolor quam laborum omnis at voluptatem vero magni, excepturi, tempora ratione et distinctio. Hic, reprehenderit. Sit, eum?', image: 'https://images.unsplash.com/photo-1720209388220-a26fbff2a64f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

export default function Works(): JSX.Element {
    return (
        <main className={styles.main}>
            <h1>Works Page</h1>
            <section className='section section--slider'>
                <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                {works.map(work => (
                    <SwiperSlide key={work.id} className={styles.slide}>
                        <Link href={`/works/${work.id}`} className={styles.slide_link}>
                            <img src={work.image} alt="" />
                            <div className={styles.slide_texts_container}>
                                <p className={styles.slide_title}>{work.title}</p>
                                <p className={styles.slide_desc}>{work.desc}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
                </Swiper>
            </section>
        </main>
    );
}
