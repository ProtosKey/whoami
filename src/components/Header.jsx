import { profile } from '../data/profile';
import TerminalPrompt from './TerminalPrompt';
import DashList from './DashList';
import styles from './Header.module.css';

const rows = [
  { label: 'name', value: profile.name },
  { label: 'location', value: profile.location },
  { label: 'education', value: profile.education },
  { label: 'specialization', value: profile.specialization },
  { label: 'english', value: profile.english },
  { label: 'github', value: 'github.com/ProtosKey', href: 'https://github.com/ProtosKey', external: true },
  { label: 'telegram', value: '@rinat_iy', href: 'https://t.me/rinat_iy', external: true },
  { label: 'email', value: 'rinat.gazizullin.31@bk.ru', href: 'mailto:rinat.gazizullin.31@bk.ru' },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <TerminalPrompt command="whoami -l" />
      <DashList rows={rows} />
    </header>
  );
}
