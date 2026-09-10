import { useParams, Navigate } from 'react-router-dom';
import BracketLink from '../components/BracketLink';
import TerminalPrompt from '../components/TerminalPrompt';
import DashList from '../components/DashList';
import Markdown from '../components/Markdown';
import { getProjectBySlug } from '../data/projects';
import { categories as categoryList } from '../data/profile';
import styles from './ProjectDetailPage.module.css';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/error" replace />;
  }

  const category = categoryList.find((c) => c.id === project.category);

  const statsRows = [
    { label: 'status', value: project.status },
    { label: 'stars', value: String(project.stats.stars) },
    { label: 'last_commit', value: project.stats.lastCommit },
    { label: 'language', value: project.stats.language },
    { label: 'category', value: category ? category.title : project.category },
    { label: 'stack', value: project.stack.join(', ') },
    {
      label: 'repo',
      value: `github.com/${project.github}`,
      href: `https://github.com/${project.github}`,
      external: true,
    },
  ];

  return (
    <div className={styles.inner}>
      <BracketLink to="/projects" className={styles.back}>
        cd ../projects
      </BracketLink>

      <h1 className={styles.title}>{project.name}</h1>
      <p className={styles.summary}>{project.description}</p>

      <section className={styles.section}>
        <TerminalPrompt command={`stat ./projects/${project.slug}`} />
        <DashList rows={statsRows} />
      </section>

      <section className={styles.section}>
        <TerminalPrompt command={`cat ./projects/${project.slug}/README.md`} />
        <div className={styles.readme}>
          {project.readme ? (
            <Markdown>{project.readme}</Markdown>
          ) : (
            <>
              {project.features && project.features.length > 0 && (
                <ul className={styles.features}>
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              )}
              <p className={styles.placeholder}>
                {'// TODO: полное README для этого проекта ещё не добавлено'}
              </p>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
