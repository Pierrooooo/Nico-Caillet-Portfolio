'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Grid from "./grid";
import HeroHome from "./home-hero"

export default function Home() {
  return (
    <main className={styles.main}>
        <Link href="/works">
          <p>View Works</p>
        </Link>
        <HeroHome/>

        <Grid />
    </main>
  );
}
