import Link from 'next/link';
import fs from 'fs';
import PageTransition from '../../components/PageTransition';

export async function getServerSideProps(context) {
    const { ProjectId } = context.query;
    const filePath = process.cwd() + '/public/datas/works.json';

    try {
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        const works = JSON.parse(fileContents);

        const project = works.works[ProjectId];

        return {
            props: {
                project,
            },
        };
    } catch (error) {
        console.error('Error reading or parsing works.json:', error);
        return {
            props: {
                project: null,
            },
        };
    }
}

export default function ProjectPage({ project }) {

    if (!project) {
        return <div>Project not found.</div>;
    }

    return (
        <PageTransition>
            <div>
                <img src={project.images[0].url}></img>
                <Link href="/works">
                    <a>Back to Projects</a>
                </Link>
                <h1>{project.title}</h1>
                <ul>
                    {Object.keys(project.images).map((imageId) => (
                    <li key={imageId}>
                        <img src={project.images[imageId].utl} alt={project.images[imageId].title} />
                    </li>
                    ))}
                </ul>
            </div>
        </PageTransition>
    );
}

