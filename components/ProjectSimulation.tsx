import React, { useState, useEffect } from 'react';
import { 
  Smartphone, Monitor, Globe, Moon, Sun, Plus, Check, 
  BarChart3, MessageSquare, Lock, Fingerprint, Bell, 
  User, Search, Layout, Type, 
  Save, ArrowLeft, CheckCircle2, ShoppingBag, Building2, GraduationCap, Server,
  ShoppingCart, Star, PlayCircle, TrendingUp, Users, Briefcase,
  PieChart, Activity, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProjects } from '../context/ProjectContext';
import { Project } from '../types';

type ProjectType = 'mobile' | 'dashboard' | 'website';
type ColorTheme = 'blue' | 'purple' | 'green' | 'orange';
type FontType = 'sans' | 'serif';
type ProjectCategory = 'ecommerce' | 'corporate' | 'education' | 'saas';

interface Feature {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const ProjectSimulation: React.FC = () => {
  const { addProject } = useProjects();
  const [projectType, setProjectType] = useState<ProjectType>('mobile');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [themeColor, setThemeColor] = useState<ColorTheme>('blue');
  const [fontType, setFontType] = useState<FontType>('sans');
  const [projectName, setProjectName] = useState('');
  const [projectCategory, setProjectCategory] = useState<ProjectCategory>('ecommerce');
  const [activeFeatures, setActiveFeatures] = useState<string[]>(['analytics']);
  const [isSaved, setIsSaved] = useState(false);

  // Reset save state on changes
  useEffect(() => {
    if (isSaved) {
        const timer = setTimeout(() => setIsSaved(false), 2000);
        return () => clearTimeout(timer);
    }
  }, [isSaved, projectType, isDarkMode, themeColor, fontType, activeFeatures, projectName, projectCategory]);

  const featuresList: Feature[] = [
    { id: 'analytics', label: 'إحصائيات', icon: <BarChart3 size={14} /> },
    { id: 'chat', label: 'شات فوري', icon: <MessageSquare size={14} /> },
    { id: 'auth', label: 'حماية ودخول', icon: <Lock size={14} /> },
    { id: 'notifications', label: 'تنبيهات', icon: <Bell size={14} /> },
    { id: 'profile', label: 'ملف مستخدم', icon: <User size={14} /> },
    { id: 'search', label: 'بحث متقدم', icon: <Search size={14} /> },
  ];

  const categories = [
    { id: 'ecommerce', label: 'متجر إلكتروني', icon: <ShoppingBag size={14} /> },
    { id: 'education', label: 'منصة تعليمية', icon: <GraduationCap size={14} /> },
    { id: 'corporate', label: 'موقع شركات', icon: <Building2 size={14} /> },
    { id: 'saas', label: 'نظام SaaS', icon: <Server size={14} /> },
  ];

  const toggleFeature = (id: string) => {
    setActiveFeatures(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const handleSave = () => {
    // Determine image based on category
    let imageUrl = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop';
    if (projectCategory === 'ecommerce') imageUrl = 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop';
    if (projectCategory === 'education') imageUrl = 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop';
    if (projectCategory === 'corporate') imageUrl = 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop';

    // Map simulation type to portfolio category
    let portfolioCategory = 'web';
    if (projectType === 'mobile') portfolioCategory = 'mobile';
    if (projectType === 'dashboard') portfolioCategory = 'software';

    const newProject: Project = {
      id: Date.now().toString(),
      title: projectName || 'مشروع ذكي جديد',
      category: portfolioCategory,
      description: `نظام ${categories.find(c => c.id === projectCategory)?.label} متكامل. تم إنشاؤه وتخصيصه باستخدام محرك الذكاء الاصطناعي الخاص بمعين.`,
      imageUrl: imageUrl,
      tags: ['AI Generated', projectCategory, ...activeFeatures.slice(0, 2)],
      link: '#'
    };

    addProject(newProject);
    setIsSaved(true);
  };

  const colors = {
    blue: { bg: 'bg-blue-500', text: 'text-blue-500', light: 'bg-blue-50', border: 'border-blue-500', ring: 'ring-blue-500', hoverBg: 'hover:bg-blue-600', fill: 'fill-blue-500' },
    purple: { bg: 'bg-purple-600', text: 'text-purple-600', light: 'bg-purple-50', border: 'border-purple-600', ring: 'ring-purple-600', hoverBg: 'hover:bg-purple-600', fill: 'fill-purple-600' },
    green: { bg: 'bg-emerald-500', text: 'text-emerald-500', light: 'bg-emerald-50', border: 'border-emerald-500', ring: 'ring-emerald-500', hoverBg: 'hover:bg-emerald-600', fill: 'fill-emerald-500' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-500', light: 'bg-orange-50', border: 'border-orange-500', ring: 'ring-orange-500', hoverBg: 'hover:bg-orange-600', fill: 'fill-orange-500' },
  };

  const currentColor = colors[themeColor];

  const getDeviceDimensions = () => {
    switch (projectType) {
        case 'mobile': return 'w-[320px] h-[640px] rounded-[3rem] border-[8px]';
        case 'dashboard': return 'w-full max-w-2xl h-[480px] rounded-xl border-[8px] translate-y-8';
        case 'website': return 'w-full max-w-2xl h-[480px] rounded-xl border-[8px] translate-y-8';
        default: return '';
    }
  };

  // Helper to render dynamic content inside the screen based on category AND project type
  const renderScreenContent = () => {
    const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
    const textColor = isDarkMode ? 'text-white' : 'text-gray-800';
    const subText = isDarkMode ? 'text-gray-400' : 'text-gray-500';

    switch (projectCategory) {
      case 'ecommerce':
        if (projectType === 'dashboard') {
             // Dashboard View for Ecommerce
             return (
                 <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="grid grid-cols-3 gap-3">
                        {/* Stat Cards */}
                        <div className={`${cardBg} p-3 rounded-xl shadow-sm`}>
                             <div className="text-xs text-gray-400 mb-1">المبيعات</div>
                             <div className={`text-lg font-bold ${textColor}`}>$12,450</div>
                        </div>
                         <div className={`${cardBg} p-3 rounded-xl shadow-sm`}>
                             <div className="text-xs text-gray-400 mb-1">الطلبات</div>
                             <div className={`text-lg font-bold ${textColor}`}>345</div>
                        </div>
                         <div className={`${cardBg} p-3 rounded-xl shadow-sm`}>
                             <div className="text-xs text-gray-400 mb-1">الزوار</div>
                             <div className={`text-lg font-bold ${textColor}`}>1.2k</div>
                        </div>
                    </div>
                    {/* Chart area */}
                     <div className={`${cardBg} p-4 rounded-xl shadow-sm h-32 flex items-end justify-between px-4 gap-2`}>
                        {[40, 60, 45, 80, 55, 90, 70, 60, 85, 50, 75, 95].map((h, i) => (
                          <div key={i} style={{ height: `${h}%` }} className={`w-full rounded-t-sm opacity-80 ${currentColor.bg}`} />
                        ))}
                     </div>
                     {/* Recent Orders Table Row */}
                     <div className={`${cardBg} p-3 rounded-xl shadow-sm space-y-2`}>
                        <div className="flex justify-between text-xs font-bold border-b pb-2 border-gray-100 opacity-60">
                            <span>رقم الطلب</span>
                            <span>الحالة</span>
                            <span>القيمة</span>
                        </div>
                         {[1,2].map(i => (
                             <div key={i} className="flex justify-between text-xs items-center py-1">
                                 <span className={textColor}>#23{i}4</span>
                                 <span className="text-green-500 bg-green-50 px-2 py-0.5 rounded-full text-[10px]">مدفوع</span>
                                 <span className={textColor}>$120.00</span>
                             </div>
                         ))}
                     </div>
                 </div>
             )
        }
        // Website or Mobile View for Ecommerce
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Banner - Larger on website */}
            <div className={`w-full ${projectType === 'website' ? 'h-48' : 'h-32'} rounded-xl ${currentColor.light} flex items-center justify-center relative overflow-hidden transition-all duration-500`}>
               <div className={`absolute right-0 bottom-0 opacity-20 transform translate-x-4 translate-y-4`}>
                 <ShoppingBag size={projectType === 'website' ? 140 : 100} className={currentColor.text} />
               </div>
               <div className="text-center z-10">
                 <span className={`text-xs font-bold ${currentColor.text} block mb-1`}>عروض حصرية</span>
                 <h3 className={`${projectType === 'website' ? 'text-3xl' : 'text-xl'} font-bold ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`}>تسوق الآن</h3>
                 {projectType === 'website' && <button className={`mt-3 px-6 py-2 bg-white rounded-full text-xs font-bold shadow-md ${currentColor.text} hover:scale-105 transition-transform`}>تصفح المجموعة</button>}
               </div>
            </div>
            
            {/* Products Grid */}
            <div className={`grid ${projectType === 'website' ? 'grid-cols-4' : 'grid-cols-2'} gap-3 transition-all duration-500`}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`${cardBg} p-3 rounded-xl shadow-sm border border-transparent hover:border-${themeColor}-200 transition-all group`}>
                  <div className={`w-full h-20 rounded-lg ${currentColor.light} mb-2 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                    <ShoppingBag size={32} className={`${currentColor.text} opacity-50`} />
                  </div>
                  <div className={`h-2 w-16 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} mb-1`}></div>
                  <div className="flex justify-between items-center mt-2">
                    <span className={`text-xs font-bold ${currentColor.text}`}>$99</span>
                    <div className={`p-1.5 rounded-full ${currentColor.bg} text-white cursor-pointer hover:opacity-80`}>
                      <ShoppingCart size={10} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'education':
         if (projectType === 'dashboard') {
             return (
                 <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                     <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                         <div className={`${cardBg} p-3 rounded-xl shadow-sm min-w-[100px] flex-1`}>
                             <div className="text-xs text-gray-400 mb-1">الدورات</div>
                             <div className={`text-xl font-bold ${textColor}`}>12</div>
                         </div>
                         <div className={`${cardBg} p-3 rounded-xl shadow-sm min-w-[100px] flex-1`}>
                             <div className="text-xs text-gray-400 mb-1">ساعات</div>
                             <div className={`text-xl font-bold ${textColor}`}>45h</div>
                         </div>
                         <div className={`${cardBg} p-3 rounded-xl shadow-sm min-w-[100px] flex-1`}>
                             <div className="text-xs text-gray-400 mb-1">شهادات</div>
                             <div className={`text-xl font-bold ${textColor}`}>3</div>
                         </div>
                     </div>
                     <div className={`${cardBg} p-4 rounded-xl shadow-sm`}>
                         <div className={`text-sm font-bold mb-3 ${textColor}`}>النشاط الأسبوعي</div>
                         <div className="flex items-end gap-2 h-24 justify-between">
                            {[30, 50, 40, 70, 40, 80, 60].map((h, i) => (
                              <div key={i} style={{ height: `${h}%` }} className={`w-full rounded-t-sm ${currentColor.bg}`} />
                            ))}
                         </div>
                     </div>
                     <div className={`${cardBg} p-3 rounded-xl shadow-sm flex items-center justify-between`}>
                         <div className="flex items-center gap-2">
                             <div className={`w-8 h-8 rounded-full ${currentColor.light} flex items-center justify-center text-xs font-bold ${currentColor.text}`}>85%</div>
                             <span className={`text-xs ${textColor}`}>معدل الإكمال</span>
                         </div>
                         <Activity size={16} className="text-gray-400" />
                     </div>
                 </div>
             )
         }
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
             {projectType === 'website' && (
                 <div className={`${cardBg} p-6 rounded-xl text-center mb-4 border border-gray-100 shadow-sm relative overflow-hidden`}>
                     <div className={`absolute top-0 right-0 w-20 h-20 ${currentColor.light} rounded-full blur-2xl -translate-y-1/2 translate-x-1/2`}></div>
                     <h2 className={`text-xl font-bold mb-2 ${textColor} relative z-10`}>تعلم مهارات المستقبل</h2>
                     <p className="text-xs text-gray-500 mb-4 relative z-10">انضم لأكثر من مليون متعلم حول العالم</p>
                     <button className={`${currentColor.bg} text-white px-6 py-2 rounded-full text-xs font-bold shadow-md hover:scale-105 transition-transform relative z-10`}>ابدأ التعلم مجاناً</button>
                 </div>
             )}
             <div className="flex justify-between items-center mb-2">
               <h3 className={`font-bold ${textColor}`}>دوراتي التعليمية</h3>
               <span className={`text-xs ${currentColor.text} cursor-pointer`}>مشاهدة الكل</span>
             </div>
             <div className={projectType === 'website' ? "grid grid-cols-2 gap-3" : "space-y-3"}>
                 {[1, 2, 3, 4].slice(0, projectType === 'website' ? 4 : 3).map((i) => (
                   <div key={i} className={`${cardBg} p-4 rounded-xl shadow-sm flex gap-3 items-center border border-gray-50 hover:border-gray-200 transition-colors`}>
                     <div className={`w-10 h-10 rounded-lg ${currentColor.light} flex items-center justify-center shrink-0`}>
                       <PlayCircle size={20} className={currentColor.text} />
                     </div>
                     <div className="flex-1">
                       <div className={`h-2 w-20 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} mb-2`}></div>
                       <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                         <div className={`h-full ${currentColor.bg}`} style={{ width: `${i * 30}%` }}></div>
                       </div>
                       <div className="flex justify-between mt-1">
                           <span className="text-[9px] text-gray-400">الدرس {i}</span>
                           <span className="text-[9px] text-gray-400">{i * 25}%</span>
                       </div>
                     </div>
                   </div>
                 ))}
             </div>
          </div>
        );

      case 'corporate':
        return (
          <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
             {/* Hero */}
             <div className={`w-full ${projectType === 'website' ? 'py-12' : 'py-8'} px-4 rounded-2xl ${currentColor.bg} text-white text-center relative overflow-hidden shadow-lg`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center backdrop-blur-sm shadow-inner">
                      <Building2 size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-1">نبني المستقبل</h3>
                    <p className="text-xs opacity-80">شريكك الاستراتيجي للنمو الرقمي</p>
                    {projectType !== 'dashboard' && <button className="mt-4 bg-white text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg hover:bg-gray-50 transition-colors">تواصل معنا</button>}
                </div>
             </div>

             {projectType === 'dashboard' ? (
                 <div className="grid grid-cols-2 gap-3">
                     <div className={`${cardBg} p-3 rounded-xl shadow-sm`}>
                         <div className="text-xs text-gray-400 mb-1">المشاريع</div>
                         <div className={`font-bold text-lg ${textColor}`}>12</div>
                     </div>
                     <div className={`${cardBg} p-3 rounded-xl shadow-sm`}>
                         <div className="text-xs text-gray-400 mb-1">العملاء</div>
                         <div className={`font-bold text-lg ${textColor}`}>45</div>
                     </div>
                     <div className={`${cardBg} p-3 rounded-xl shadow-sm col-span-2`}>
                         <div className="text-xs text-gray-400 mb-2">نمو الإيرادات</div>
                         <div className="h-16 flex items-end gap-1">
                             {[20,40,30,50,40,60,80,65,85,70,90].map((h,i) => (
                                 <div key={i} className={`flex-1 ${currentColor.bg} opacity-80 rounded-t-sm`} style={{height: `${h}%`}}></div>
                             ))}
                         </div>
                     </div>
                 </div>
             ) : (
                 <div className="grid grid-cols-3 gap-2">
                   {[
                     { icon: <Briefcase size={14} />, label: 'استشارات' },
                     { icon: <Users size={14} />, label: 'فريقنا' },
                     { icon: <Star size={14} />, label: 'الجودة' }
                   ].map((item, idx) => (
                     <div key={idx} className={`${cardBg} p-3 rounded-xl shadow-sm text-center flex flex-col items-center gap-2 border border-gray-50 hover:border-${themeColor}-100 transition-colors`}>
                       <div className={`p-2 rounded-full ${currentColor.light} ${currentColor.text}`}>{item.icon}</div>
                       <span className={`text-[10px] ${subText} font-medium`}>{item.label}</span>
                     </div>
                   ))}
                 </div>
             )}
             
             {projectType !== 'dashboard' && (
                 <div className={`${cardBg} p-3 rounded-xl shadow-sm flex items-center gap-3 border border-gray-50`}>
                   <div className="w-16 h-16 bg-gray-100 rounded-lg shrink-0 flex items-center justify-center">
                       <Briefcase size={20} className="text-gray-300" />
                   </div>
                   <div>
                     <div className={`h-2 w-20 bg-gray-200 rounded-full mb-2`}></div>
                     <div className={`h-2 w-32 bg-gray-100 rounded-full`}></div>
                   </div>
                 </div>
             )}
          </div>
        );
      
      case 'saas':
        if (projectType === 'website') {
             return (
                 <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                     <div className="text-center py-8">
                         <div className={`w-14 h-14 ${currentColor.light} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                             <Server size={28} className={currentColor.text} />
                         </div>
                         <h2 className={`text-2xl font-bold mb-2 ${textColor}`}>الجيل القادم من البرمجيات</h2>
                         <p className="text-gray-400 text-xs mb-6">أتمتة، ذكاء، وسرعة في مكان واحد</p>
                         <div className="flex justify-center gap-2">
                            <button className={`${currentColor.bg} text-white px-6 py-2 rounded-full font-bold text-sm shadow-md`}>ابدأ مجاناً</button>
                            <button className={`${cardBg} ${textColor} border border-gray-200 px-6 py-2 rounded-full font-bold text-sm`}>عرض توضيحي</button>
                         </div>
                     </div>
                     <div className="grid grid-cols-2 gap-3">
                         {[1,2,3,4].map(i => (
                             <div key={i} className={`${cardBg} p-4 rounded-xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow`}>
                                 <div className={`w-8 h-8 rounded-lg ${currentColor.light} mb-2`}></div>
                                 <div className="h-2 w-12 bg-gray-200 rounded-full mb-1"></div>
                                 <div className="h-1.5 w-8 bg-gray-100 rounded-full"></div>
                             </div>
                         ))}
                     </div>
                 </div>
             )
        }
        // Mobile & Dashboard for SaaS
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Stats Row */}
            <div className={`grid ${projectType === 'dashboard' ? 'grid-cols-4' : 'grid-cols-2'} gap-3`}>
              <div className={`${cardBg} p-3 rounded-xl shadow-sm`}>
                <div className="flex items-center gap-2 mb-2 text-gray-400 text-xs">
                  <TrendingUp size={12} /> المبيعات
                </div>
                <span className={`text-lg font-bold ${currentColor.text}`}>$24k</span>
              </div>
              <div className={`${cardBg} p-3 rounded-xl shadow-sm`}>
                <div className="flex items-center gap-2 mb-2 text-gray-400 text-xs">
                  <Users size={12} /> المستخدمين
                </div>
                <span className={`text-lg font-bold ${currentColor.text}`}>8.2k</span>
              </div>
              {projectType === 'dashboard' && (
                  <>
                    <div className={`${cardBg} p-3 rounded-xl shadow-sm`}>
                        <div className="flex items-center gap-2 mb-2 text-gray-400 text-xs">
                        <Star size={12} /> التقييم
                        </div>
                        <span className={`text-lg font-bold ${currentColor.text}`}>4.9</span>
                    </div>
                    <div className={`${cardBg} p-3 rounded-xl shadow-sm`}>
                        <div className="flex items-center gap-2 mb-2 text-gray-400 text-xs">
                        <Zap size={12} /> السرعة
                        </div>
                        <span className={`text-lg font-bold ${currentColor.text}`}>0.2s</span>
                    </div>
                  </>
              )}
            </div>

            {/* Chart Area */}
            {activeFeatures.includes('analytics') && (
              <div className={`${cardBg} p-4 rounded-xl shadow-sm`}>
                 <div className="flex justify-between items-center mb-4">
                    <span className={`text-xs font-bold ${textColor}`}>الأداء الشهري</span>
                    <PieChart size={14} className="text-gray-400" />
                 </div>
                 <div className="flex items-end gap-2 h-24 justify-between px-2">
                    {[40, 65, 45, 80, 55, 90, 70, 60, 95, 85, 45, 60].slice(0, projectType === 'dashboard' ? 12 : 7).map((h, i) => (
                      <div key={i} style={{ height: `${h}%` }} className={`w-full rounded-t-sm opacity-80 ${currentColor.bg} transition-all duration-500`} />
                    ))}
                 </div>
              </div>
            )}

            {/* Table/List */}
            <div className={`${cardBg} rounded-xl shadow-sm overflow-hidden`}>
              {(projectType === 'dashboard' ? [1, 2, 3, 4] : [1, 2, 3]).map(i => (
                <div key={i} className="flex items-center justify-between p-3 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${currentColor.bg}`}></div>
                    <div className={`h-2 w-16 bg-gray-200 rounded-full`}></div>
                  </div>
                  <div className={`h-2 w-8 bg-gray-100 rounded-full`}></div>
                  {projectType === 'dashboard' && <div className="h-2 w-12 bg-gray-100 rounded-full"></div>}
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-background overflow-hidden relative" id="simulation">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Controls Side */}
          <div className="lg:w-5/12 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold mb-4">
                <span className="animate-pulse w-2 h-2 rounded-full bg-primary"></span>
                استوديو التصميم التفاعلي
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-neutral mb-4 leading-tight">
                ابدأ مشروعك <br/>
                <span className={`text-transparent bg-clip-text bg-gradient-to-l from-neutral to-${themeColor === 'orange' ? 'orange' : themeColor === 'green' ? 'emerald' : themeColor}-500 transition-colors duration-500`}>
                  بشكل تفاعلي الآن
                </span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                <span className="font-bold text-gray-800">ما الذي يميزنا؟</span> نحن نمنحك السيطرة الكاملة. 
                اختر مجالك، خصص هويتك، وشاهد فكرتك تتجسد أمامك قبل كتابة سطر كود واحد.
                <br />
                <span className="font-bold text-gray-800 mt-2 block">لماذا تختار معين؟</span> لأننا نحول هذا النموذج الأولي إلى واقع ملموس بأحدث التقنيات.
              </p>
            </div>

            {/* Input: Project Name */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-gray-900 block">اسم المشروع</label>
              <input 
                type="text" 
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="اكتب اسم مشروعك..."
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium shadow-sm"
              />
            </div>

            {/* Project Category Selection */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-gray-900 block">مجال المشروع (يغير المحتوى)</label>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setProjectCategory(cat.id as ProjectCategory)}
                    className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold transition-all border ${
                      projectCategory === cat.id
                        ? 'bg-neutral text-white border-neutral shadow-lg transform scale-[1.02]'
                        : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {cat.icon}
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Platform Selection */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-gray-900 block">نوع المنصة</label>
              <div className="grid grid-cols-3 gap-2 p-1 bg-white rounded-xl border border-gray-200 shadow-sm">
                <button
                  onClick={() => setProjectType('mobile')}
                  className={`flex flex-col items-center justify-center gap-1 py-3 rounded-lg text-xs font-bold transition-all ${
                    projectType === 'mobile' ? 'bg-neutral text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <Smartphone size={20} /> تطبيق جوال
                </button>
                <button
                  onClick={() => setProjectType('dashboard')}
                  className={`flex flex-col items-center justify-center gap-1 py-3 rounded-lg text-xs font-bold transition-all ${
                    projectType === 'dashboard' ? 'bg-neutral text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <Layout size={20} /> لوحة تحكم
                </button>
                <button
                  onClick={() => setProjectType('website')}
                  className={`flex flex-col items-center justify-center gap-1 py-3 rounded-lg text-xs font-bold transition-all ${
                    projectType === 'website' ? 'bg-neutral text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <Globe size={20} /> موقع ويب
                </button>
              </div>
            </div>

            {/* Appearance Controls */}
            <div className="grid grid-cols-2 gap-6">
               {/* Colors */}
               <div className="space-y-3">
                <label className="text-sm font-bold text-gray-900 block">لون الهوية</label>
                <div className="flex gap-2">
                  {(Object.keys(colors) as ColorTheme[]).map((c) => (
                    <button
                      key={c}
                      onClick={() => setThemeColor(c)}
                      className={`w-8 h-8 rounded-full ${colors[c].bg} border-2 transition-all transform ${
                        themeColor === c ? 'border-neutral scale-110 ring-2 ring-offset-2 ring-gray-100' : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
                      }`}
                      aria-label={c}
                    />
                  ))}
                </div>
              </div>

               {/* Mode & Font */}
               <div className="space-y-3">
                 <label className="text-sm font-bold text-gray-900 block">المظهر والخط</label>
                 <div className="flex gap-2">
                    <button
                      onClick={() => setIsDarkMode(!isDarkMode)}
                      className={`p-2 rounded-lg border transition-all ${
                        isDarkMode ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-600 border-gray-200'
                      }`}
                      title="الوضع الليلي"
                    >
                      {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
                    </button>
                    <button
                      onClick={() => setFontType(fontType === 'sans' ? 'serif' : 'sans')}
                      className="flex-1 px-3 py-2 rounded-lg bg-white border border-gray-200 text-xs font-bold text-gray-600 hover:border-gray-300 transition-all flex items-center justify-center gap-1"
                    >
                      <Type size={16} />
                      {fontType === 'sans' ? 'عصري' : 'رسمي'}
                    </button>
                 </div>
               </div>
            </div>

            {/* Features Grid */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-gray-900 block">إضافة خصائص</label>
              <div className="flex flex-wrap gap-2">
                {featuresList.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => toggleFeature(feature.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold border transition-all duration-300 ${
                      activeFeatures.includes(feature.id)
                        ? `${currentColor.bg} text-white border-transparent shadow-md`
                        : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {activeFeatures.includes(feature.id) ? <Check size={12} /> : <Plus size={12} />}
                    {feature.icon}
                    {feature.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Save Button */}
            <button
               onClick={handleSave}
               className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                   isSaved ? 'bg-green-500 scale-95' : 'bg-neutral hover:bg-gray-800 hover:-translate-y-1'
               }`}
            >
                {isSaved ? (
                    <>
                        <CheckCircle2 size={20} /> تم حفظ التصميم في المعرض
                    </>
                ) : (
                    <>
                        <Save size={20} /> حفظ النموذج وإضافته للمعرض
                    </>
                )}
            </button>

          </div>

          {/* Simulation Preview Side */}
          <div className="lg:w-7/12 w-full flex flex-col items-center justify-center">
            
            {/* The Device Frame */}
            <div 
              className={`relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] border-gray-900 bg-gray-900 shadow-2xl ${getDeviceDimensions()}`}
            >
              <div className={`w-full h-full overflow-hidden ${projectType === 'mobile' ? 'rounded-[2.5rem]' : 'rounded-lg'} ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} transition-colors duration-500 relative flex flex-col font-${fontType === 'sans' ? 'sans' : 'serif'}`}>
                
                {/* --- HEADER / NAVBAR --- */}
                <div className={`flex shrink-0 items-center justify-between px-5 py-4 ${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-sm z-20 border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-100'} transition-all`}>
                  
                  {/* Logo Area */}
                  <div className="flex items-center gap-2">
                     <div className={`w-3 h-3 rounded-full ${currentColor.bg}`}></div>
                     <div className="flex flex-col">
                        {projectName ? (
                            <span className="font-bold text-sm tracking-tight leading-none">{projectName}</span>
                        ) : (
                            <div className="w-20 h-3 rounded-full bg-gray-200 opacity-50 mb-1"></div>
                        )}
                        <span className={`text-[8px] font-medium ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                           {categories.find(c => c.id === projectCategory)?.label}
                        </span>
                     </div>
                  </div>

                  {/* Desktop Nav Links (Website Only) */}
                  {projectType === 'website' && (
                    <div className="hidden sm:flex gap-3">
                        <div className="w-12 h-2 rounded-full bg-gray-200 opacity-50"></div>
                        <div className="w-12 h-2 rounded-full bg-gray-200 opacity-50"></div>
                        <div className="w-12 h-2 rounded-full bg-gray-200 opacity-50"></div>
                    </div>
                  )}

                  {/* Search/Profile */}
                  <div className="flex items-center gap-2">
                      {activeFeatures.includes('search') && <Search size={14} className="opacity-50" />}
                      {activeFeatures.includes('profile') ? (
                        <div className={`w-7 h-7 rounded-full ${currentColor.bg} flex items-center justify-center text-white`}>
                          <User size={12} />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-gray-200 opacity-50"></div>
                      )}
                  </div>
                </div>

                {/* --- MAIN CONTENT LAYOUT --- */}
                <div className="flex flex-1 overflow-hidden relative">
                    
                    {/* Dashboard Sidebar */}
                    {projectType === 'dashboard' && (
                        <div className={`w-14 shrink-0 flex flex-col items-center py-4 gap-4 border-l ${isDarkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-100'}`}>
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className={`w-8 h-8 rounded-lg ${i === 1 ? currentColor.light : isDarkMode ? 'bg-gray-800' : 'bg-gray-100 opacity-50'}`}></div>
                            ))}
                        </div>
                    )}

                    {/* Scrollable Area */}
                    <div className="flex-1 overflow-y-auto p-5 relative scrollbar-hide">
                        
                        {/* DYNAMIC CONTENT BASED ON CATEGORY */}
                        {renderScreenContent()}

                        {/* Floating Elements */}
                        {activeFeatures.includes('chat') && (
                            <div className={`absolute bottom-4 right-4 p-3 rounded-full ${currentColor.bg} text-white shadow-lg animate-in zoom-in duration-300 z-30`}>
                                <MessageSquare size={16} />
                            </div>
                        )}

                        {/* Auth Overlay */}
                        {activeFeatures.includes('auth') && (
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center animate-in fade-in duration-300">
                                <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-2xl w-3/4 max-w-sm text-center`}>
                                    <div className={`w-12 h-12 rounded-full ${currentColor.light} mx-auto mb-3 flex items-center justify-center`}>
                                        <Fingerprint size={24} className={currentColor.text} />
                                    </div>
                                    <div className="h-2 w-20 bg-gray-200 rounded-full mx-auto mb-4 opacity-50"></div>
                                    <button className={`w-full py-2 rounded-lg ${currentColor.bg} text-white text-xs font-bold`}>
                                        تسجيل الدخول
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>
                </div>

                {/* Mobile Notch / Web Toolbar Buttons */}
                {projectType === 'mobile' ? (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-gray-900 rounded-b-xl z-20 pointer-events-none"></div>
                ) : (
                  <div className="absolute top-2 left-4 flex gap-1.5 z-20">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Background Glow */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] rounded-full blur-[100px] opacity-20 transition-colors duration-700 ${currentColor.bg}`}></div>

            {/* Timeline Visual */}
            <div className="mt-16 w-full max-w-lg hidden md:block">
                <div className="flex items-center justify-between relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
                    
                    <div className="flex flex-col items-center gap-2">
                        <div className={`w-8 h-8 rounded-full ${currentColor.bg} text-white flex items-center justify-center ring-4 ring-white shadow-sm`}>1</div>
                        <span className="text-xs font-bold text-gray-600">التصميم</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 text-gray-400 flex items-center justify-center ring-4 ring-white">2</div>
                        <span className="text-xs font-bold text-gray-400">التطوير</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 text-gray-400 flex items-center justify-center ring-4 ring-white">3</div>
                        <span className="text-xs font-bold text-gray-400">الإطلاق</span>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
                 <Link 
                   to="/contact" 
                   className="inline-flex items-center gap-2 bg-neutral text-white px-8 py-3 rounded-full font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                 >
                    ابدأ تنفيذ المشروع الآن <ArrowLeft size={18} />
                 </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectSimulation;