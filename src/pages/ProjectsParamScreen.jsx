import { useParams } from 'react-router-dom';
import ScreenNav from '../components/ScreenNav';
import useProjects from '../hooks/useProjects';
import CategoryScreen from './CategoryScreen';
import ProjectDetailPage from './ProjectDetailPage';

export default function ProjectsParamScreen() {
  const { slug } = useParams();
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

  const isCategory = projects.some((p) => p.category === slug);

  return isCategory ? <CategoryScreen categoryId={slug} /> : <ProjectDetailPage />;
}
