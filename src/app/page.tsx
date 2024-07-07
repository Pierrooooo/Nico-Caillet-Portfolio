'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Grid from "./grid";

export default function Home() {
  return (
    <div className={styles.main}>
      <Link href="/works">
        <p>View Works</p>
      </Link>

      <Grid />
    </div>
  );
}
