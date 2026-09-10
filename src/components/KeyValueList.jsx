import styles from './KeyValueList.module.css';

function padLabel(label, width) {
  const gap = width - label.length;
  const left = Math.ceil(gap / 2);
  const right = gap - left;
  return `${' '.repeat(left)}${label}${' '.repeat(right)}`;
}

export default function KeyValueList({ rows }) {
  const width = Math.max(...rows.map((row) => row.label.length));

  return (
    <div className={styles.list}>
      {rows.map((row) => (
        <p key={row.label} className={styles.row}>
          <span className={styles.label}>[ {padLabel(row.label, width)} ]</span>{' '}
          {row.href ? (
            <a
              className={styles.link}
              href={row.href}
              target={row.external ? '_blank' : undefined}
              rel={row.external ? 'noopener noreferrer' : undefined}
            >
              {row.value}
            </a>
          ) : (
            <span className={styles.value}>{row.value}</span>
          )}
        </p>
      ))}
    </div>
  );
}
