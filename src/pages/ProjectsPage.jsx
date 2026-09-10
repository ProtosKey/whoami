import Header from '../components/Header';
import TechStack from '../components/TechStack';
import TerminalPrompt from '../components/TerminalPrompt';
import ProjectTile from '../components/ProjectTile';
import { categories } from '../data/profile';
import { projects } from '../data/projects';
import styles from './ProjectsPage.module.css';

export default function ProjectsPage() {
  return (
    <div className={styles.main}>
      <Header />
      <TechStack />

      {categories.map((category) => {
        const items = projects.filter((p) => p.category === category.id);
        if (items.length === 0) return null;

        return (
          <section key={category.id} className={styles.section}>
            <TerminalPrompt path="/projects" command={`ls ./${category.id}`} />
            <div className={styles.grid}>
              {items.map((project) => (
                <ProjectTile key={project.slug} project={project} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
