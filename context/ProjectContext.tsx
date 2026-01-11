
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Project } from '../types';
import { api } from '../services/api';

interface ProjectContextType {
  projects: Project[];
  addProject: (project: Project) => Promise<void>;
  isLoading: boolean;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

const initialProjects: Project[] = [
  {
    id: '1',
    title: 'منصة تعليمية ذكية (LMS)',
    category: 'web',
    description: 'نظام إدارة تعلم متكامل للمدارس الخاصة يدعم الفصول الافتراضية والاختبارات الآلية.',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: '#'
  },
  {
    id: '2',
    title: 'تطبيق "توصيل" اللوجستي',
    category: 'mobile',
    description: 'تطبيق لتتبع الشحنات وإدارة المندوبين مع خرائط تفاعلية وتوجيه ذكي.',
    imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000&auto=format&fit=crop',
    tags: ['Flutter', 'Firebase', 'Google Maps API'],
    link: '#'
  }
];

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const stored = await api.projects.getAll();
        if (stored.length === 0) {
          // Initialize DB if empty
          for (const p of initialProjects) {
            await api.projects.create(p);
          }
          setProjects(initialProjects);
        } else {
          setProjects(stored);
        }
      } catch (error) {
        console.error("Failed to load projects", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const addProject = async (project: Project) => {
    await api.projects.create(project);
    setProjects(prev => [project, ...prev]);
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, isLoading }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
};
