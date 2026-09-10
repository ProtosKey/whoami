import BracketLink from './BracketLink';
import styles from './DashList.module.css';

export default function DashList({ rows, showTotal = true, width }) {
  const minWidth = Math.max(...rows.map((row) => row.label.length)) + 1;
  const effectiveWidth = width ? Math.max(width, minWidth) : minWidth;

  return (
    <div className={styles.list}>
      {showTotal && <p className={styles.total}>total {rows.length}</p>}
      {rows.map((row) => {
        const dashes = '-'.repeat(effectiveWidth - row.label.length);
        return (
          <p key={row.label} className={styles.row}>
            <span className={styles.dash}>{dashes}</span>
            <span className={styles.label}>{row.label}</span>{' '}
            {row.href ? (
              <BracketLink href={row.href} external={row.external}>
                {row.value}
              </BracketLink>
            ) : (
              <span className={styles.value}>{row.value}</span>
            )}
          </p>
        );
      })}
    </div>
  );
}
