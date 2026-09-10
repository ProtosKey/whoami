import ScreenNav from '../components/ScreenNav';
import ProjectListing from '../components/ProjectListing';
import { categories } from '../data/profile';
import { projects } from '../data/projects';

export default function CategoryScreen({ categoryId }) {
  const category = categories.find((c) => c.id === categoryId);
  const items = projects.filter((p) => p.category === categoryId);

  return (
    <>
      <ScreenNav />
      <ProjectListing category={category} items={items} />
    </>
  );
}
