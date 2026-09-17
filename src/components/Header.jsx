import useYaml from '../hooks/useYaml';
import TerminalPrompt from './TerminalPrompt';
import DashList from './DashList';
import styles from './Header.module.css';

export default function Header() {
  const { data: profile, error } = useYaml('/whoami.yaml');

  if (error) {
    return <p>{'// не удалось загрузить whoami.yaml'}</p>;
  }

  if (!profile) {
    return null;
  }

  const rows = Object.entries(profile).map(([label, field]) => {
    if (field.type === 'link') {
      return {
        label,
        value: field.text,
        href: field.link,
        external: field.link.startsWith('http'),
      };
    }
    return { label, value: field.text };
  });

  return (
    <header className={styles.header}>
      <TerminalPrompt command="whoami -l" />
      <DashList rows={rows} />
    </header>
  );
}
