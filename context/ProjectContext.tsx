import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Project } from '../types';

interface ProjectContextType {
  projects: Project[];
  addProject: (project: Project) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

// Initial Data from Portfolio
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
  },
  {
    id: '3',
    title: 'نظام ERP للموارد البشرية',
    category: 'software',
    description: 'برمجية سحابية لإدارة شؤون الموظفين، الرواتب، والحضور والانصراف للشركات الكبرى.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    tags: ['Vue.js', 'Laravel', 'MySQL'],
    link: '#'
  },
  {
    id: '4',
    title: 'تصميم واجهة تطبيق "مصرفي"',
    category: 'ui-ux',
    description: 'تصميم تجربة مستخدم عصرية لتطبيق بنكي يركز على سهولة التحويلات والمدفوعات.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop',
    tags: ['Figma', 'Prototyping', 'Design System']
  },
  {
    id: '5',
    title: 'متجر "أناقة" للأزياء',
    category: 'web',
    description: 'متجر إلكتروني متكامل متعدد التجار (Multi-vendor) مع بوابات دفع محلية.',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    link: '#'
  },
  {
    id: '6',
    title: 'برنامج إدارة العيادات',
    category: 'software',
    description: 'نظام مكتبي وسحابي لحجز المواعيد وإدارة ملفات المرضى إلكترونياً.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
    tags: ['Electron', 'React', 'SQLite']
  },
  {
    id: '7',
    title: 'تطبيق "صحتي" للياقة',
    category: 'mobile',
    description: 'تطبيق لمتابعة التمارين الرياضية والنظام الغذائي مع تقارير أسبوعية.',
    imageUrl: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1000&auto=format&fit=crop',
    tags: ['React Native', 'Redux', 'HealthKit']
  },
  {
    id: '8',
    title: 'هوية بصرية لشركة "بناء"',
    category: 'ui-ux',
    description: 'إعادة تصميم الهوية البصرية وتجربة المستخدم لموقع شركة مقاولات كبرى.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
    tags: ['Adobe XD', 'Illustrator', 'Branding']
  }
];

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const addProject = (project: Project) => {
    setProjects((prev) => [project, ...prev]);
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject }}>
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
