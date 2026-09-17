import { useLocation } from 'react-router-dom';
import BracketLink from './BracketLink';
import useProjects from '../hooks/useProjects';
import styles from './ScreenNav.module.css';

const staticItems = [
  { to: '/projects', label: 'whoami' },
  { to: '/projects/skills', label: 'skills' },
];

export default function ScreenNav() {
  const { pathname } = useLocation();
  const { projects } = useProjects();

  const activeCategoryIds = [...new Set((projects || []).map((p) => p.category))];
  const categoryItems = activeCategoryIds.map((id) => ({ to: `/projects/${id}`, label: id }));

  const items = [...staticItems, ...categoryItems];

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
