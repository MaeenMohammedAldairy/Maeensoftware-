
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Users, FolderKanban, Wallet, FileText, Settings, 
  Bell, Search, LogOut, Plus, MoreVertical, Cpu, Mail, 
  TrendingUp, Clock, CheckCircle2, MessageSquare, ArrowUpRight, ArrowDownRight,
  ChevronLeft, BarChart3, Calendar
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { Project } from '../types';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [projects, setProjects] = useState<Project[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const user = api.auth.getCurrentUser();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    const fetchData = async () => {
      try {
        const [p, m] = await Promise.all([api.projects.getAll(), api.contact.getMessages()]);
        setProjects(p);
        setMessages(m);
      } catch (error) {
        console.error("Error fetching dashboard data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user, navigate]);

  const handleLogout = () => {
    api.auth.logout();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="relative w-20 h-20">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/20 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="mt-4 text-gray-500 font-bold animate-pulse">جاري تجهيز بياناتك...</p>
      </div>
    );
  }

  const StatCard = ({ title, value, icon, trend, trendUp }: any) => (
    <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-all group">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-gray-50 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
          {icon}
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${trendUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
            {trendUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            {trend}
          </div>
        )}
      </div>
      <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-extrabold text-neutral">{value}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FBFBFE] flex font-sans" dir="rtl">
      
      {/* Enhanced Sidebar */}
      <aside className={`fixed inset-y-0 right-0 z-50 transition-all duration-500 bg-neutral text-white flex flex-col ${isSidebarOpen ? 'w-72' : 'w-20'}`}>
        <div className="p-6 border-b border-white/5 flex items-center justify-between overflow-hidden">
          {isSidebarOpen && (
            <Link to="/" className="text-2xl font-bold flex items-center gap-2 whitespace-nowrap">
              معين<span className="text-primary">.</span>
            </Link>
          )}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1.5 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ChevronLeft size={20} className={`transition-transform duration-500 ${isSidebarOpen ? '' : 'rotate-180'}`} />
          </button>
        </div>

        <nav className="p-4 flex-grow space-y-2">
          {[
            { id: 'dashboard', label: 'الرئيسية', icon: <LayoutDashboard size={20} /> },
            { id: 'projects', label: 'المشاريع', icon: <FolderKanban size={20} />, badge: projects.length },
            { id: 'messages', label: 'الرسائل', icon: <Mail size={20} />, badge: messages.length },
            { id: 'clients', label: 'العملاء', icon: <Users size={20} /> },
            { id: 'reports', label: 'التقارير', icon: <BarChart3 size={20} /> },
            { id: 'settings', label: 'الإعدادات', icon: <Settings size={20} /> },
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => setActiveSection(item.id)} 
              className={`w-full flex items-center justify-between group px-4 py-3.5 rounded-2xl transition-all duration-300 ${
                activeSection === item.id 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="shrink-0">{item.icon}</span>
                {isSidebarOpen && <span className="font-bold text-sm whitespace-nowrap">{item.label}</span>}
              </div>
              {isSidebarOpen && item.badge !== undefined && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeSection === item.id ? 'bg-white/20 text-white' : 'bg-white/10 text-gray-400'}`}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button 
            onClick={handleLogout} 
            className="w-full flex items-center gap-3 px-4 py-4 text-red-400 hover:bg-red-400/10 rounded-2xl transition-all group"
          >
            <LogOut size={20} className="shrink-0 group-hover:-translate-x-1 transition-transform" />
            {isSidebarOpen && <span className="font-bold text-sm">تسجيل الخروج</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className={`flex-1 transition-all duration-500 ${isSidebarOpen ? 'pr-72' : 'pr-20'}`}>
        
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
             <div className="relative group">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="ابحث عن مشروع أو رسالة..." 
                  className="bg-gray-50 border border-gray-100 rounded-2xl pr-10 pl-4 py-2.5 text-sm w-72 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:bg-white focus:border-primary/20 transition-all"
                />
             </div>
          </div>

          <div className="flex items-center gap-4">
             <button className="relative p-2.5 bg-gray-50 rounded-2xl text-gray-500 hover:bg-gray-100 transition-colors">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
             </button>
             <div className="w-px h-6 bg-gray-200"></div>
             <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-2xl transition-colors">
                <div className="text-left hidden md:block">
                  <p className="text-sm font-bold text-neutral leading-none mb-1">{user?.name}</p>
                  <p className="text-[10px] text-gray-400 font-medium">مدير النظام</p>
                </div>
                <div className="relative">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${user?.name}&background=0B63FF&color=fff&bold=true`} 
                    className="w-10 h-10 rounded-2xl border-2 border-white shadow-sm" 
                    alt="profile"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
             </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          {activeSection === 'dashboard' && (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="إجمالي المشاريع" value={projects.length} icon={<FolderKanban size={24} />} trend="12%+" trendUp={true} />
                <StatCard title="الرسائل الواردة" value={messages.length} icon={<Mail size={24} />} trend="5%-" trendUp={false} />
                <StatCard title="العملاء النشطون" value="24" icon={<Users size={24} />} trend="8%+" trendUp={true} />
                <StatCard title="معدل الإنجاز" value="94%" icon={<CheckCircle2 size={24} />} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Visual Chart Simulation */}
                <div className="lg:col-span-8 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h3 className="text-xl font-extrabold text-neutral">تحليل النشاط الأسبوعي</h3>
                      <p className="text-sm text-gray-400">تطور العمل والطلبات خلال الـ 7 أيام الماضية</p>
                    </div>
                    <select className="bg-gray-50 border-none rounded-xl text-xs font-bold p-2 focus:ring-0">
                      <option>آخر 7 أيام</option>
                      <option>آخر 30 يوم</option>
                    </select>
                  </div>
                  
                  <div className="h-64 flex items-end justify-between gap-4 px-2">
                    {[45, 78, 62, 95, 42, 85, 70].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
                        <div className="w-full relative">
                          <div 
                            style={{ height: `${h}%` }} 
                            className={`w-full rounded-2xl bg-gradient-to-t from-primary to-blue-400 opacity-80 group-hover:opacity-100 group-hover:shadow-[0_0_20px_rgba(11,99,255,0.3)] transition-all duration-500 cursor-pointer`}
                          ></div>
                          {/* Tooltip on hover simulation */}
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-neutral text-white text-[10px] px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            قيمة: {h}
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-gray-400">
                          {['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Task List / Notifications */}
                <div className="lg:col-span-4 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                   <h3 className="text-xl font-extrabold text-neutral mb-6 flex items-center gap-2">
                      <Calendar size={20} className="text-primary" /> مهام عاجلة
                   </h3>
                   <div className="space-y-4">
                      {[
                        { t: 'مراجعة طلب متجر الأناقة', d: 'منذ 2 ساعة', c: 'bg-orange-500' },
                        { t: 'تحديث تطبيق التوصيل', d: 'منذ 5 ساعات', c: 'bg-primary' },
                        { t: 'اجتماع فريق التصميم', d: 'غداً 10 صباحاً', c: 'bg-green-500' },
                      ].map((task, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer border border-transparent hover:border-gray-100">
                           <div className={`w-2 h-10 rounded-full ${task.c}`}></div>
                           <div className="flex-1 overflow-hidden">
                              <p className="text-sm font-bold text-neutral truncate">{task.t}</p>
                              <p className="text-[10px] text-gray-400 mt-1">{task.d}</p>
                           </div>
                           <div className="w-5 h-5 rounded-lg border-2 border-gray-200 flex items-center justify-center hover:border-primary transition-colors">
                              <CheckCircle2 size={12} className="text-white" />
                           </div>
                        </div>
                      ))}
                   </div>
                   <button className="w-full mt-6 py-3 border-2 border-dashed border-gray-100 rounded-2xl text-gray-400 text-sm font-bold hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2">
                      <Plus size={16} /> إضافة مهمة
                   </button>
                </div>
              </div>
            </>
          )}

          {activeSection === 'projects' && (
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-gray-100 flex justify-between items-center">
                 <h2 className="text-2xl font-extrabold text-neutral">إدارة المشاريع</h2>
                 <button className="bg-primary text-white px-5 py-2.5 rounded-2xl text-sm font-bold shadow-lg shadow-primary/20 flex items-center gap-2 hover:scale-105 transition-transform">
                   <Plus size={18} /> مشروع جديد
                 </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-right">
                  <thead className="bg-gray-50/50">
                    <tr>
                      <th className="p-6 text-sm font-extrabold text-gray-400">اسم المشروع</th>
                      <th className="p-6 text-sm font-extrabold text-gray-400">الفئة</th>
                      <th className="p-6 text-sm font-extrabold text-gray-400">الحالة</th>
                      <th className="p-6 text-sm font-extrabold text-gray-400">الأولوية</th>
                      <th className="p-6 text-sm font-extrabold text-gray-400"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {projects.map((p, idx) => (
                      <tr key={p.id} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="p-6">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                 <FolderKanban size={18} />
                              </div>
                              <span className="font-bold text-neutral">{p.title}</span>
                           </div>
                        </td>
                        <td className="p-6">
                           <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg">{p.category === 'web' ? 'موقع ويب' : p.category === 'mobile' ? 'تطبيق جوال' : 'نظام برمي'}</span>
                        </td>
                        <td className="p-6">
                           <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                              <span className="text-xs font-bold text-green-600">نشط</span>
                           </div>
                        </td>
                        <td className="p-6">
                           <span className={`text-[10px] font-bold px-3 py-1.5 rounded-lg ${idx === 0 ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                             {idx === 0 ? 'مرتفعة' : 'متوسطة'}
                           </span>
                        </td>
                        <td className="p-6">
                           <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-400">
                             <MoreVertical size={18} />
                           </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {projects.length === 0 && (
                <div className="py-20 text-center">
                  <FolderKanban size={48} className="mx-auto text-gray-200 mb-4" />
                  <p className="text-gray-400 font-bold">لا توجد مشاريع مضافة حالياً</p>
                </div>
              )}
            </div>
          )}

          {activeSection === 'messages' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                 <h2 className="text-2xl font-extrabold text-neutral">بريد الطلبات</h2>
                 <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-400">ترتيب حسب:</span>
                    <select className="bg-white border-none rounded-xl text-xs font-bold p-2 shadow-sm">
                      <option>الأحدث أولاً</option>
                      <option>غير المقروءة</option>
                    </select>
                 </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {messages.map((m, i) => (
                  <div 
                    key={m.id} 
                    className={`bg-white p-6 rounded-[2rem] border shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md transition-all group ${i === 0 ? 'border-primary/20 bg-primary/5' : 'border-gray-100'}`}
                  >
                    <div className="flex gap-4 items-start">
                       <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${i === 0 ? 'bg-primary text-white' : 'bg-gray-50 text-gray-400'}`}>
                          <MessageSquare size={22} />
                       </div>
                       <div>
                          <h4 className="font-extrabold text-neutral flex items-center gap-2">
                            {m.name} 
                            <span className="text-xs font-medium text-gray-400 opacity-60">({m.email})</span>
                            {i === 0 && <span className="bg-primary text-white text-[8px] px-2 py-0.5 rounded-full uppercase tracking-tighter">جديد</span>}
                          </h4>
                          <p className={`text-xs font-bold mb-2 ${i === 0 ? 'text-primary' : 'text-gray-400'}`}>{m.service === 'web' ? 'تطوير موقع' : m.service === 'mobile' ? 'تطبيق جوال' : 'استشارة تقنية'}</p>
                          <p className="text-gray-600 text-sm leading-relaxed max-w-xl">{m.message}</p>
                       </div>
                    </div>
                    <div className="flex flex-col items-end gap-3 shrink-0">
                       <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium bg-gray-50 px-3 py-1.5 rounded-xl">
                          <Clock size={12} />
                          {new Date(m.date).toLocaleDateString('ar-YE', { day: 'numeric', month: 'long' })}
                       </div>
                       <div className="flex gap-2">
                          <button className="px-4 py-2 bg-neutral text-white text-xs font-bold rounded-xl hover:bg-gray-800 transition-colors">رد سريع</button>
                          <button className="p-2 bg-gray-50 text-gray-400 rounded-xl hover:bg-red-50 hover:text-red-500 transition-colors">
                            <LogOut size={16} className="rotate-90" />
                          </button>
                       </div>
                    </div>
                  </div>
                ))}
                
                {messages.length === 0 && (
                  <div className="py-32 bg-white rounded-[2.5rem] border-2 border-dashed border-gray-100 flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-200 mb-6">
                      <Mail size={40} />
                    </div>
                    <h3 className="text-xl font-extrabold text-neutral mb-2">صندوق البريد فارغ</h3>
                    <p className="text-gray-400 max-w-xs">لا توجد رسائل أو طلبات جديدة حالياً. ستظهر هنا بمجرد أن يتواصل معك العملاء.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
