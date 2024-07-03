import { useRouter } from 'next/router';
import styles from "../works.module.css";

export default function Work() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className={styles.main}>
            <h1>Work ID: {id}</h1>
            {/* Additional content for the specific work item */}
        </div>
    );
}
