import { techStack } from '../data/profile';
import TerminalPrompt from './TerminalPrompt';
import KeyValueList from './KeyValueList';
import styles from './TechStack.module.css';

const LABELS = {
  Языки: 'languages',
  Mobile: 'mobile',
  'Web & DB': 'web_db',
  'Низкий уровень': 'low_level',
  Инструменты: 'tools',
};

const rows = techStack.map((row) => ({
  label: LABELS[row.group] || row.group,
  value: row.items.join(', '),
}));

export default function TechStack() {
  return (
    <section className={styles.section}>
      <TerminalPrompt path="/projects" command="cat stack.txt" />
      <KeyValueList rows={rows} />
    </section>
  );
}
