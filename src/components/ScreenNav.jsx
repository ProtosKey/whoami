import { useLocation } from 'react-router-dom';
import BracketLink from './BracketLink';
import styles from './ScreenNav.module.css';

const items = [
  { to: '/projects', label: 'whoami' },
  { to: '/projects/skills', label: 'skills' },
  { to: '/projects/mobile', label: 'mobile' },
  { to: '/projects/systems', label: 'systems' },
  { to: '/projects/other', label: 'other' },
];

export default function ScreenNav() {
  const { pathname } = useLocation();

  return (
    <nav className={styles.nav}>
      {items.map((item) => (
        <BracketLink key={item.to} to={item.to} active={pathname === item.to}>
          {item.label}
        </BracketLink>
      ))}
    </nav>
  );
}
