import { Link } from 'react-router-dom';
import DashList from './DashList';
import styles from './ProjectEntry.module.css';

const PERM = 'drwxr-xr-x';

export default function ProjectEntry({ project }) {
  const rows = [
    {
      label: 'link',
      value: `github.com/${project.github}`,
      href: `https://github.com/${project.github}`,
      external: true,
    },
    { label: 'summary', value: project.description },
    { label: 'stack', value: (project.stack || []).join(', ') },
  ];

  return (
    <div className={styles.entry}>
      <p className={styles.line}>
        <span className={styles.perm}>{PERM}</span>{' '}
        <Link to={`/projects/${project.slug}`} className={styles.name}>
          [ {project.name} ]
        </Link>
      </p>
      <DashList rows={rows} showTotal={false} width={PERM.length} />
    </div>
  );
}
