import { useParams, Navigate } from 'react-router-dom';
import BracketLink from '../components/BracketLink';
import TerminalPrompt from '../components/TerminalPrompt';
import KeyValueList from '../components/KeyValueList';
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

  const meta = [
    { label: 'category', value: project.category },
    { label: 'repo', value: `github.com/${project.github}`, href: `https://github.com/${project.github}`, external: true },
    { label: 'stack', value: project.stack.join(', ') },
  ];

  return (
    <div className={styles.inner}>
      <BracketLink to="/projects" className={styles.back}>
        cd ../projects
      </BracketLink>

      <TerminalPrompt path={`/projects/${project.slug}`} command="cat README.md" />

      <h1 className={styles.title}>{project.name}</h1>
      {category && <p className={styles.categoryLine}>{category.title}</p>}

      <p className={styles.description}>{project.description}</p>

      {project.features && project.features.length > 0 && (
        <ul className={styles.features}>
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      )}

      <KeyValueList rows={meta} />

      <p className={styles.placeholder}>
        {'// TODO: полное описание из README.md репозитория появится здесь автоматически'}
      </p>
    </div>
  );
}
