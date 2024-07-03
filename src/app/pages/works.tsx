import Link from 'next/link';

interface Work {
    id: string;
    title: string;
}

const works: Work[] = [
    { id: '1', title: 'Work 1' },
    { id: '2', title: 'Work 2' },
    { id: '3', title: 'Work 3' },
];

export default function Works(): JSX.Element {
    return (
        <div>
            <h1>Works Page</h1>
            <ul>
                {works.map(work => (
                    <li key={work.id}>
                        <Link href={`/work/${work.id}`}>
                            <p>{work.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
