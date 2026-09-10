import styles from './TerminalPrompt.module.css';

export default function TerminalPrompt({ path, command }) {
  return (
    <p className={styles.prompt}>
      <span className={styles.ps1}>root@ {path}#</span> {command}
    </p>
  );
}
