import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TerminalWindow from './components/TerminalWindow';
import WhoamiScreen from './pages/WhoamiScreen';
import SkillsScreen from './pages/SkillsScreen';
import ProjectsParamScreen from './pages/ProjectsParamScreen';
import ErrorPage from './pages/ErrorPage';
import { ProjectsProvider } from './context/ProjectsContext';

function AppRoutes() {
  return (
    <TerminalWindow>
      <Routes>
        <Route path="/" element={<Navigate to="/projects" replace />} />
        <Route path="/projects" element={<WhoamiScreen />} />
        <Route path="/projects/skills" element={<SkillsScreen />} />
        <Route path="/projects/:slug" element={<ProjectsParamScreen />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </TerminalWindow>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ProjectsProvider>
        <AppRoutes />
      </ProjectsProvider>
    </BrowserRouter>
  );
}

export default App;
