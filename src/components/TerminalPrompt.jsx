import styles from './TerminalPrompt.module.css';

export default function TerminalPrompt({ command }) {
  return (
    <p className={styles.prompt}>
      <span className={styles.ps1}>root#</span> {command}
    </p>
  );
}
