import { Link } from 'react-router-dom';
import styles from './ProjectTile.module.css';

export default function ProjectTile({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className={styles.tile}>
      <p className={styles.command}>
        <span className={styles.ps1}>$</span> cat ./projects/{project.slug}
      </p>
      <p className={styles.description}>{project.description}</p>
      <p className={styles.stack}>[{project.stack.join(', ')}]</p>
    </Link>
  );
}
