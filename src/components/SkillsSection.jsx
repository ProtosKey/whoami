import { skills } from '../data/profile';
import TerminalPrompt from './TerminalPrompt';
import DashList from './DashList';
import styles from './SkillsSection.module.css';

const rows = skills.map((s) => ({ label: s.label, value: s.items.join(', ') }));

export default function SkillsSection() {
  return (
    <section className={styles.section}>
      <TerminalPrompt command="skills -l" />
      <DashList rows={rows} />
    </section>
  );
}
