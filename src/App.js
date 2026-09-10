import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TerminalWindow from './components/TerminalWindow';
import WhoamiScreen from './pages/WhoamiScreen';
import SkillsScreen from './pages/SkillsScreen';
import CategoryScreen from './pages/CategoryScreen';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ErrorPage from './pages/ErrorPage';

function AppRoutes() {
  return (
    <TerminalWindow>
      <Routes>
        <Route path="/" element={<Navigate to="/projects" replace />} />
        <Route path="/projects" element={<WhoamiScreen />} />
        <Route path="/projects/skills" element={<SkillsScreen />} />
        <Route path="/projects/mobile" element={<CategoryScreen categoryId="mobile" />} />
        <Route path="/projects/systems" element={<CategoryScreen categoryId="systems" />} />
        <Route path="/projects/other" element={<CategoryScreen categoryId="other" />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </TerminalWindow>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
