import useYaml from '../hooks/useYaml';
import TerminalPrompt from './TerminalPrompt';
import DashList from './DashList';
import styles from './SkillsSection.module.css';

export default function SkillsSection() {
  const { data: skills, error } = useYaml('/skills.yaml');

  if (error) {
    return <p>{'// не удалось загрузить skills.yaml'}</p>;
  }

  if (!skills) {
    return null;
  }

  const rows = Object.entries(skills).map(([label, items]) => ({
    label,
    value: items.join(', '),
  }));

  return (
    <section className={styles.section}>
      <TerminalPrompt command="skills -l" />
      <DashList rows={rows} />
    </section>
  );
}
