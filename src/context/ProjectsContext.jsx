import { createContext, useContext, useEffect, useState } from 'react';

// TODO: временно захардкожено — GitHub-логин единственный на весь сайт,
// в project.json владельца репозитория не кладут.
const GITHUB_USERNAME = 'ProtosKey';

const ProjectsContext = createContext({ projects: null, error: null });

export function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch('/project.json')
      .then((res) => {
        if (!res.ok) throw new Error(`/project.json: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const list = Object.entries(data).map(([slug, project]) => ({
          slug,
          github: `${GITHUB_USERNAME}/${slug}`,
          ...project,
        }));
        setProjects(list);
      })
      .catch((err) => {
        if (!cancelled) setError(err);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return <ProjectsContext.Provider value={{ projects, error }}>{children}</ProjectsContext.Provider>;
}

export function useProjects() {
  return useContext(ProjectsContext);
}
