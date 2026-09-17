import ScreenNav from '../components/ScreenNav';
import ProjectListing from '../components/ProjectListing';
import { categories } from '../data/profile';
import useProjects from '../hooks/useProjects';

export default function CategoryScreen({ categoryId }) {
  const category = categories.find((c) => c.id === categoryId) || { id: categoryId, title: categoryId };
  const { projects, error } = useProjects();

  if (error) {
    return (
      <>
        <ScreenNav />
        <p>{'// не удалось загрузить project.json'}</p>
      </>
    );
  }

  if (!projects) {
    return <ScreenNav />;
  }

  const items = projects.filter((p) => p.category === categoryId);

  return (
    <>
      <ScreenNav />
      <ProjectListing category={category} items={items} />
    </>
  );
}
