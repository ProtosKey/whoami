import TerminalPrompt from './TerminalPrompt';
import ProjectEntry from './ProjectEntry';
import styles from './ProjectListing.module.css';

export default function ProjectListing({ category, items }) {
  return (
    <section className={styles.section}>
      <TerminalPrompt command={`ls ./${category.id}`} />
      <p className={styles.total}>total {items.length}</p>
      {items.map((project) => (
        <ProjectEntry key={project.slug} project={project} />
      ))}
    </section>
  );
}
