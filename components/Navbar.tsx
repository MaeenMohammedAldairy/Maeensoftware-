import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Monitor, Smartphone, Paintbrush, Database, Code2, Info, Target, ArrowLeft, Briefcase, LogIn } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'الرئيسية', path: '/' },
  { 
    label: 'من نحن', 
    path: '/about',
    children: [
      { label: 'عن الشركة', path: '/about', description: 'قصتنا ورحلتنا', iconName: 'info' },
      { label: 'الرؤية والرسالة', path: '/mission', description: 'قيمنا ومبادئنا', iconName: 'target' },
      { label: 'انضم للفريق', path: '/careers', description: 'فرص وظيفية', iconName: 'briefcase' },
    ]
  },
  { 
    label: 'خدماتنا', 
    path: '/services',
    children: [
      { label: 'تطوير المواقع', path: '/services/web-development', description: 'مواقع سريعة ومتجاوبة', iconName: 'monitor' },
      { label: 'تطبيقات الجوال', path: '/services/mobile-apps', description: 'iOS و Android', iconName: 'smartphone' },
      { label: 'تصميم UI/UX', path: '/services/ui-ux-design', description: 'تصاميم عصرية وجذابة', iconName: 'paintbrush' },
      { label: 'المتاجر الإلكترونية', path: '/services/ecommerce', description: 'حلول بيع متكاملة', iconName: 'database' },
    ]
  },
  { label: 'منتجاتنا', path: '/products' },
  { label: 'المدونة', path: '/blog' },
  { label: 'أعمالنا', path: '/portfolio' },
  { label: 'تواصل معنا', path: '/contact' },
];

const IconMap: Record<string, React.ReactNode> = {
  monitor: <Monitor size={20} />,
  smartphone: <Smartphone size={20} />,
  paintbrush: <Paintbrush size={20} />,
  database: <Database size={20} />,
  info: <Info size={20} />,
  target: <Target size={20} />,
  briefcase: <Briefcase size={20} />,
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 border-b border-gray-100 shadow-sm' 
          : 'py-4 border-b border-transparent'
      }`}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className={`absolute inset-0 transition-colors duration-300 ${scrolled ? 'bg-white/95' : 'bg-white/90'}`}></div>
        <div className="absolute inset-0 backdrop-blur-xl"></div>
        <img 
           src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop" 
           alt="Header Texture" 
           className="w-full h-full object-cover opacity-[0.03]"
        />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex justify-between items-center h-16 gap-4">
          
          <Link to="/" className="flex items-center gap-2.5 group shrink-0 relative z-50">
            <div className="bg-gradient-to-br from-primary to-blue-600 p-2.5 rounded-xl text-white shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all group-hover:scale-105 group-hover:rotate-3">
              <Code2 size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-neutral tracking-tight leading-none">معين<span className="text-primary">.</span></span>
              <span className="text-[10px] text-gray-400 tracking-wider font-medium hidden sm:block">للحلول البرمجية</span>
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-6 flex-1 justify-end">
            <nav className="flex items-center gap-1 bg-gray-50/50 p-1.5 rounded-full border border-gray-100/50">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 relative z-10 whitespace-nowrap ${
                      isActive(item.path)
                        ? 'text-primary bg-white shadow-sm'
                        : 'text-gray-600 hover:text-primary hover:bg-white/60'
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 opacity-50 group-hover:opacity-100" />
                    )}
                  </Link>

                  {item.children && (
                    <div className="absolute top-full right-0 pt-4 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden p-2 ring-1 ring-black/5">
                        <div className="flex flex-col gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.path}
                              className="flex items-start gap-4 p-3 rounded-xl hover:bg-blue-50/50 transition-all group/item border border-transparent hover:border-blue-100/50"
                            >
                              <div className="text-gray-400 mt-1 bg-gray-50 p-2.5 rounded-xl group-hover/item:bg-white group-hover/item:text-primary group-hover/item:shadow-sm transition-all duration-300">
                                {child.iconName && IconMap[child.iconName]}
                              </div>
                              <div>
                                <span className="block text-neutral font-bold text-sm mb-1 group-hover/item:text-primary transition-colors flex items-center gap-1">
                                  {child.label}
                                  <ArrowLeft size={12} className="opacity-0 translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                                </span>
                                <span className="block text-gray-400 text-xs leading-relaxed group-hover/item:text-gray-500">{child.description}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="w-px h-8 bg-gray-200"></div>

            <div className="flex items-center gap-3">
               <Link
                to="/login"
                className="flex items-center gap-2 text-gray-600 hover:text-primary font-bold text-sm transition-colors p-2 rounded-lg hover:bg-gray-50"
                title="دخول العملاء"
              >
                <LogIn size={20} />
              </Link>

              <Link
                to="/contact"
                className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 shrink-0 flex items-center gap-2 whitespace-nowrap"
              >
                اطلب عرض سعر
              </Link>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2.5 text-gray-600 hover:text-primary hover:bg-blue-50 transition-colors bg-gray-50 rounded-xl border border-gray-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div 
        className={`fixed inset-0 bg-neutral/60 backdrop-blur-sm z-[60] transition-opacity duration-500 xl:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div 
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white/95 backdrop-blur-2xl z-[70] transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) xl:hidden flex flex-col border-l border-white/20 shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none"></div>

        <div className="p-6 flex justify-between items-center relative z-10">
           <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg text-white">
              <Code2 size={20} />
            </div>
            <span className="text-xl font-bold text-neutral">معين.</span>
          </Link>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-6 relative z-10 scrollbar-hide">
          <form onSubmit={handleSearch} className="relative mb-8">
            <input
              type="text"
              placeholder="ابحث في الموقع..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pr-12 pl-4 rounded-2xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm font-medium"
            />
            <Search size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </form>

          <div className="space-y-1">
            {navItems.map((item) => (
              <div key={item.label} className="flex flex-col overflow-hidden">
                <div 
                  className={`flex items-center justify-between p-1 rounded-xl transition-colors ${
                    isActive(item.path) ? 'bg-blue-50/50' : 'hover:bg-gray-50'
                  }`}
                >
                  {item.children ? (
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`flex-1 px-3 py-3 text-base font-bold text-right transition-colors flex items-center gap-3 w-full ${
                        isActive(item.path) ? 'text-primary' : 'text-gray-600 hover:text-neutral'
                      }`}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex-1 px-3 py-3 text-base font-bold transition-colors flex items-center gap-3 ${
                        isActive(item.path) ? 'text-primary' : 'text-gray-600 hover:text-neutral'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                  
                  {item.children && (
                    <button 
                      onClick={() => toggleDropdown(item.label)}
                      className={`p-2 mx-1 rounded-lg transition-all duration-300 ${
                        activeDropdown === item.label ? 'bg-primary/10 text-primary rotate-180' : 'text-gray-400'
                      }`}
                    >
                      <ChevronDown size={18} />
                    </button>
                  )}
                </div>

                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    item.children && activeDropdown === item.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-3 pb-2 pt-1 space-y-1 relative">
                    <div className="absolute right-3 top-2 bottom-2 w-0.5 bg-gray-100 rounded-full"></div>
                    
                    {item.children?.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 text-gray-500 hover:text-primary transition-all pr-5"
                      >
                         <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
                        <span className="block text-sm font-medium text-gray-600">{child.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 border-t border-gray-100 bg-white/50 backdrop-blur-md space-y-3">
           <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full bg-white text-gray-700 border border-gray-200 px-4 py-4 rounded-2xl font-bold text-base hover:bg-gray-50 transition-all gap-2"
           >
              <LogIn size={18} />
              تسجيل الدخول
           </Link>
           <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full bg-neutral text-white px-4 py-4 rounded-2xl font-bold text-base shadow-lg shadow-gray-900/10 active:scale-95 transition-all gap-2"
            >
              اطلب عرض سعر
              <ArrowLeft size={18} />
            </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;