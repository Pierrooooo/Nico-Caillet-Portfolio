'use client'

import { useParams } from 'next/navigation';
import styles from "../page.module.css";


export default function Work(): JSX.Element {
    const { id } = useParams();

    return (
        <div className={styles.main}>
            <h1>Work ID: {id}</h1>
            {/* Additional content for the specific work item */}
        </div>
    );
}
