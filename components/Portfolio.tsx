import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { ExternalLink, ArrowRight, LayoutGrid, Smartphone, Monitor, Code, PenTool, Link as LinkIcon, Eye } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useProjects } from '../context/ProjectContext';

interface PortfolioProps {
  isPreview?: boolean;
}

const categories = [
  { id: 'all', label: 'الكل', icon: LayoutGrid },
  { id: 'web', label: 'مواقع ويب', icon: Monitor },
  { id: 'mobile', label: 'تطبيقات جوال', icon: Smartphone },
  { id: 'software', label: 'أنظمة وبرمجيات', icon: Code },
  { id: 'ui-ux', label: 'واجهات UI/UX', icon: PenTool },
];

const Portfolio: React.FC<PortfolioProps> = ({ isPreview = false }) => {
  const { projects } = useProjects(); // Get projects from Context
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  
  // Reset scroll when entering the full page
  useEffect(() => {
    if (!isPreview) {
      window.scrollTo(0, 0);
    }
  }, [isPreview]);

  useEffect(() => {
    const filtered = projects.filter(p => filter === 'all' || p.category === filter);
    setVisibleProjects(isPreview ? filtered.slice(0, 3) : filtered);
  }, [filter, isPreview, projects]);

  return (
    <div className={`bg-background ${!isPreview ? 'min-h-screen' : ''}`}>
      
      {/* Hero Header for Standalone Page */}
      {!isPreview && (
        <section className="relative py-20 bg-neutral text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
             <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-medium mb-6">
                معرض الأعمال
              </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">نجاحات نفخر بها</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              تصفح مجموعة من أحدث مشاريعنا التي قمنا بتنفيذها لشركاء النجاح في مختلف القطاعات.
            </p>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className={`py-16 md:py-24 ${isPreview ? 'bg-white' : ''}`} id="portfolio">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Header for Preview Mode */}
          {isPreview && (
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">أعمالنا</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-neutral mb-4">
                  مشاريع صنعت فارقاً
                </h3>
                <p className="text-gray-600">
                  نحول التحديات إلى فرص رقمية ناجحة. تصفح بعضاً من أحدث مشاريعنا.
                </p>
              </div>
              <Link 
                to="/portfolio" 
                className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                عرض كامل المعرض <ArrowRight size={20} />
              </Link>
            </div>
          )}

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                  filter === cat.id 
                    ? 'bg-neutral text-white border-neutral shadow-lg scale-105' 
                    : 'bg-white text-gray-500 border-gray-200 hover:border-primary hover:text-primary'
                }`}
              >
                <cat.icon size={18} />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <div 
                key={project.id} 
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col animate-in fade-in zoom-in duration-500"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-neutral/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white p-3 rounded-full hover:bg-blue-600 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                        title="زيارة المشروع"
                      >
                        <ExternalLink size={24} />
                      </a>
                    )}
                    <button 
                      className="bg-white text-neutral p-3 rounded-full hover:bg-gray-100 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                      title="عرض التفاصيل"
                    >
                      <Eye size={24} />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-neutral shadow-sm">
                    {categories.find(c => c.id === project.category)?.label}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                     <h3 className="text-xl font-bold text-neutral mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-1 bg-blue-50 text-blue-600 rounded-md font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                        <a href={project.link} className="text-gray-300 hover:text-primary transition-colors">
                            <LinkIcon size={16} />
                        </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {visibleProjects.length === 0 && (
             <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                <p className="text-gray-400 font-medium">لا توجد مشاريع في هذا القسم حالياً.</p>
             </div>
          )}

          {/* Footer Action for Preview */}
          {isPreview && (
            <div className="text-center mt-12 md:hidden">
              <Link 
                to="/portfolio" 
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                عرض كامل المعرض <ArrowRight size={20} />
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;