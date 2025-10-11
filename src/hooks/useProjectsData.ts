import { useEffect, useState } from 'react';
import type { ProjectInfoProps } from '../interfaces/useProjectsData.interface';

export default function useProjectsData() {
  const [projects, setProjects] = useState<ProjectInfoProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const projectRepos = [
    "cash-counter",
    "products-exit-app",
    "product-entry-app",
  ];

  useEffect(() => {
    async function fetchProjects() {
      try {
        const fetched: ProjectInfoProps[] = [];

        for (const repo of projectRepos) {
          const baseUrl = `https://ismaelmarot.github.io/${repo}`;
          const jsonUrl = `${baseUrl}/project.json`;

          const response = await fetch(jsonUrl);
          if (!response.ok) continue;

          const data = await response.json();
          fetched.push({
            ...data,
            url: baseUrl,
          });
        }

        setProjects(fetched);
      } catch (err) {
        setError("No se pudieron cargar los proyectos.");
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return { projects, loading, error };
}
