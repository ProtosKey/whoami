import { profile } from '../data/profile';
import TerminalPrompt from './TerminalPrompt';
import KeyValueList from './KeyValueList';
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
  { label: 'phone', value: '+7 (917) 876-38-22', href: 'tel:+79178763822' },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <TerminalPrompt path="/projects" command="whoami" />
      <KeyValueList rows={rows} />
    </header>
  );
}
