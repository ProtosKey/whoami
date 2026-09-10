import { Link } from 'react-router-dom';
import styles from './BracketLink.module.css';

function Inner({ children }) {
  return (
    <>
      <span className={styles.bracket} aria-hidden="true">[ </span>
      {children}
      <span className={styles.bracket} aria-hidden="true"> ]</span>
    </>
  );
}

export default function BracketLink({ to, href, external, active, children, className = '', ...rest }) {
  const cls = `${styles.link} ${active ? styles.active : ''} ${className}`.trim();

  if (href) {
    return (
      <a
        className={cls}
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        <Inner>{children}</Inner>
      </a>
    );
  }

  return (
    <Link className={cls} to={to} {...rest}>
      <Inner>{children}</Inner>
    </Link>
  );
}
