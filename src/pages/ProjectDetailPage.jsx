import { useParams, Navigate } from 'react-router-dom';
import ScreenNav from '../components/ScreenNav';
import TerminalPrompt from '../components/TerminalPrompt';
import DashList from '../components/DashList';
import useProjects from '../hooks/useProjects';
import { categories as categoryList } from '../data/profile';
import styles from './ProjectDetailPage.module.css';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const { projects, error } = useProjects();

  if (error) {
    return <Navigate to="/error" replace />;
  }

  if (!projects) {
    return (
      <div className={styles.inner}>
        <ScreenNav />
      </div>
    );
  }

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/error" replace />;
  }

  const category = categoryList.find((c) => c.id === project.category);

  const statsRows = [
    { label: 'status', value: project.status },
    { label: 'category', value: category ? category.title : project.category },
    { label: 'stack', value: (project.stack || []).join(', ') },
    {
      label: 'repo',
      value: `github.com/${project.github}`,
      href: `https://github.com/${project.github}`,
      external: true,
    },
  ];

  return (
    <div className={styles.inner}>
      <ScreenNav />

      <h1 className={styles.title}>{project.name}</h1>
      <p className={styles.summary}>{project.description}</p>

      <section className={styles.section}>
        <TerminalPrompt command={`stat ./projects/${project.slug}`} />
        <DashList rows={statsRows} />
      </section>

      {project.possibilities && project.possibilities.length > 0 && (
        <section className={styles.section}>
          <TerminalPrompt command={`cat ./projects/${project.slug}/README.md`} />
          <div className={styles.readme}>
            <ul className={styles.features}>
              {project.possibilities.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
