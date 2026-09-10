import styles from './RepoLink.module.css';

export default function RepoLink({ path, className = '' }) {
  return (
    <a
      className={`${styles.repo} ${className}`.trim()}
      href={`https://github.com/${path}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.muted}>github.com/</span>
      {path.split('/')[1] ? (
        <>
          <span className={styles.muted}>{path.split('/')[0]}/</span>
          {path.split('/')[1]}
        </>
      ) : (
        path
      )}
    </a>
  );
}
