import styles from './TerminalWindow.module.css';

export default function TerminalWindow({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
