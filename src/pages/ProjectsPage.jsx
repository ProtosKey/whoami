import Header from '../components/Header';
import SkillsSection from '../components/SkillsSection';
import ProjectListing from '../components/ProjectListing';
import { categories } from '../data/profile';
import { projects } from '../data/projects';
import styles from './ProjectsPage.module.css';

export default function ProjectsPage() {
  return (
    <div className={styles.main}>
      <Header />
      <SkillsSection />

      {categories.map((category) => {
        const items = projects.filter((p) => p.category === category.id);
        if (items.length === 0) return null;
        return <ProjectListing key={category.id} category={category} items={items} />;
      })}
    </div>
  );
}
