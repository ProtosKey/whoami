import { Link } from 'react-router-dom';
import TerminalPrompt from './TerminalPrompt';
import RepoLink from './RepoLink';
import styles from './ProjectListing.module.css';

export default function ProjectListing({ category, items }) {
  const width = Math.max(...items.map((p) => p.name.length));

  return (
    <section className={styles.section}>
      <TerminalPrompt command={`ls ./${category.id}`} />
      <p className={styles.total}>total {items.length}</p>
      {items.map((project) => {
        const pad = ' '.repeat(width - project.name.length);
        return (
          <div key={project.slug} className={styles.row}>
            <p className={styles.line}>
              <span className={styles.perm}>drwxr-xr-x</span>
              <Link to={`/projects/${project.slug}`} className={styles.name}>
                [ {project.name}
                {pad} ]
              </Link>
              <span className={styles.desc}>{project.description}</span>
            </p>
            <p className={styles.sub}>
              <span className={styles.stackLabel}>stack:</span>{' '}
              <span className={styles.stackValue}>{project.stack.join(', ')}</span>
              <RepoLink path={project.github} className={styles.repo} />
            </p>
          </div>
        );
      })}
    </section>
  );
}
