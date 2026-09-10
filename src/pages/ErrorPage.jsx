import { useLocation } from 'react-router-dom';
import BracketLink from '../components/BracketLink';
import { browserName } from '../utils/browser';
import styles from './ErrorPage.module.css';

export default function ErrorPage() {
  const location = useLocation();

  return (
    <div className={styles.main}>
      <p className={styles.line}>
        <span className={styles.ps1}>root#{browserName}</span> cd {location.pathname}
      </p>
      <p className={styles.errorLine}>
        bash: cd: {location.pathname}: No such file or directory
      </p>
      <p className={styles.line}>
        <span className={styles.ps1}>root#{browserName}</span>{' '}
        <span className={styles.cursor} aria-hidden="true">_</span>
      </p>
      <BracketLink to="/projects" className={styles.back}>
        cd ~/projects
      </BracketLink>
    </div>
  );
}
