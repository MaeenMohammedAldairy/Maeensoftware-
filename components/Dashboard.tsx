import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Users, FolderKanban, Wallet, FileText, Settings, 
  Bell, Search, LogOut, ChevronDown, Plus, MoreVertical,
  TrendingUp, ArrowUpRight, ArrowDownRight, Clock, CheckCircle2, AlertCircle,
  PieChart, DollarSign, Calendar, Mail, Phone, MoreHorizontal, Filter, Download,
  CreditCard, Briefcase, HelpCircle, ChevronRight, ChevronLeft, PanelLeftClose, PanelRightClose,
  Cpu, Zap, Activity, GitBranch, Code2, Globe, Lock, Terminal, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  // Mobile sidebar state removed in favor of bottom nav
  const [isCollapsed, setIsCollapsed] = useState(false); // Desktop collapse
  const [activeSection, setActiveSection] = useState('dashboard');

  // Dashboard Home Data
  const stats = [
    { title: 'إجمالي الإيرادات', value: '450,200 ر.س', change: '+12.5%', isPositive: true, icon: Wallet },
    { title: 'المشاريع النشطة', value: '12', change: '+2', isPositive: true, icon: FolderKanban },
    { title: 'العملاء الجدد', value: '24', change: '-4%', isPositive: false, icon: Users },
    { title: 'المهام المعلقة', value: '8', change: 'مستقر', isPositive: true, icon: AlertCircle },
  ];

  const recentProjects = [
    { name: 'متجر أزياء سحاب', client: 'شركة سحاب', status: 'جاري العمل', progress: 75, date: '15 مارس' },
    { name: 'تطبيق توصيل', client: 'مؤسسة السرعة', status: 'مكتمل', progress: 100, date: '10 مارس' },
    { name: 'نظام إدارة موارد', client: 'شركة البناء', status: 'قيد المراجعة', progress: 90, date: '08 مارس' },
    { name: 'موقع تعريفي', client: 'عيادات النخبة', status: 'جديد', progress: 10, date: '05 مارس' },
  ];

  const menuItems = [
    { id: 'dashboard', label: 'الرئيسية', icon: LayoutDashboard },
    { id: 'projects', label: 'المشاريع', icon: FolderKanban },
    { id: 'ai-lab', label: 'المختبر الذكي', icon: Cpu },
    { id: 'clients', label: 'العملاء', icon: Users },
    { id: 'finance', label: 'المالية', icon: Wallet },
    { id: 'team', label: 'الفريق', icon: Briefcase },
    { id: 'reports', label: 'التقارير', icon: FileText },
    { id: 'settings', label: 'الإعدادات', icon: Settings },
  ];

  // --- Sub-Components for Sections ---

  const AIEngineView = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);
    const [generatedProject, setGeneratedProject] = useState<any>(null);
  
    const steps = [
      { label: "تحليل السلوك", icon: <Activity size={18} /> },
      { label: "توليد النموذج", icon: <Cpu size={18} /> },
      { label: "كتابة الكود", icon: <Code2 size={18} /> },
      { label: "التحسين الذاتي", icon: <Zap size={18} /> },
    ];
  
    const simulationLogs = [
      "بدء مسح سلوك المستخدم...",
      "تم تحديد الاهتمام: تجارة إلكترونية ذكية",
      "تحليل المنافسين في السوق المحلي...",
      "جاري توليد واجهات المستخدم (Wireframing)...",
      "تطبيق خوارزميات تحسين التحويل (CRO)...",
      "كتابة كود React للمكونات الأساسية...",
      "ربط قاعدة البيانات المستقلة...",
      "تم إطلاق النموذج التجريبي v1.02",
    ];
  
    useEffect(() => {
      let logIndex = 0;
      const interval = setInterval(() => {
        if (logIndex < simulationLogs.length) {
          setLogs(prev => [...prev.slice(-4), simulationLogs[logIndex]]);
          setActiveStep(Math.floor((logIndex / simulationLogs.length) * 4));
          logIndex++;
        } else {
          // Reset for loop effect
          logIndex = 0;
          setLogs([]);
          setGeneratedProject({
             name: "متجر المستقبل " + Math.floor(Math.random() * 100),
             score: 98,
             traffic: "1.2k/h"
          });
        }
      }, 1500);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="bg-neutral rounded-3xl overflow-hidden relative text-white min-h-[calc(100vh-8rem)] animate-in fade-in duration-500 shadow-2xl">
        {/* Matrix / Cyber Background */}
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(32, 255, 77, .1) 25%, rgba(32, 255, 77, .1) 26%, transparent 27%, transparent 74%, rgba(32, 255, 77, .1) 75%, rgba(32, 255, 77, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(32, 255, 77, .1) 25%, rgba(32, 255, 77, .1) 26%, transparent 27%, transparent 74%, rgba(32, 255, 77, .1) 75%, rgba(32, 255, 77, .1) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="relative z-10 p-8 lg:p-12">
          
          <div className="flex flex-col lg:flex-row gap-16 items-start lg:items-center">
            
            {/* Text Content */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold mb-6 animate-pulse">
                <Sparkles size={14} />
                النظام يعمل بشكل تلقائي
              </div>
              
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                نظام "معين" المستقل <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">يبني نفسه بنفسه</span>
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                ليس مجرد موقع، بل كيان رقمي حي. نظامنا يستخدم الذكاء الاصطناعي لتوليد مشاريع جديدة، اختبارها، وتحسين أدائها تلقائياً بناءً على تفاعل الزوار دون أي تدخل بشري.
              </p>
  
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { title: "توليد مشاريع", val: "تلقائي", icon: <GitBranch className="text-purple-400" /> },
                   { title: "التعلم الذاتي", val: "نشط", icon: <Cpu className="text-blue-400" /> },
                   { title: "تحسين الكود", val: "مستمر", icon: <Code2 className="text-yellow-400" /> },
                   { title: "الأمان", val: "مدعوم بـ AI", icon: <Lock className="text-green-400" /> },
                 ].map((stat, idx) => (
                   <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                      <div className="p-2 bg-white/5 rounded-lg">{stat.icon}</div>
                      <div>
                        <p className="text-gray-400 text-xs">{stat.title}</p>
                        <p className="font-bold text-white">{stat.val}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
  
            {/* Visualization Dashboard */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-gray-900 rounded-3xl border border-gray-800 shadow-2xl overflow-hidden relative">
                {/* Top Bar */}
                <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs font-mono text-gray-400">Maeen_AI_Core_v2.0.exe</div>
                  <div className="text-gray-500"><Terminal size={14} /></div>
                </div>
  
                {/* Core Visualization */}
                <div className="p-6 md:p-8 space-y-8">
                  
                  {/* Steps Progress */}
                  <div className="flex justify-between relative">
                     <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -z-10"></div>
                     {steps.map((step, idx) => (
                       <div key={idx} className={`flex flex-col items-center gap-2 transition-all duration-500 ${idx <= activeStep ? 'opacity-100 scale-110' : 'opacity-40 scale-100'}`}>
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 bg-gray-900 ${idx <= activeStep ? 'border-green-500 text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]' : 'border-gray-700 text-gray-500'}`}>
                             {idx < activeStep ? <CheckCircle2 size={18} /> : step.icon}
                          </div>
                          <span className="text-[10px] font-bold">{step.label}</span>
                       </div>
                     ))}
                  </div>
  
                  {/* Central Animation */}
                  <div className="relative h-48 rounded-2xl bg-black/50 border border-gray-800 flex items-center justify-center overflow-hidden group">
                     
                     {/* Grid Lines */}
                     <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
  
                     {/* Rotating Core */}
                     <div className="relative z-10 animate-[spin_10s_linear_infinite]">
                        <div className="w-24 h-24 rounded-full border border-green-500/30 flex items-center justify-center relative">
                          <div className="absolute inset-0 border border-blue-500/30 rounded-full animate-ping"></div>
                          <Globe className="text-white/80 animate-pulse" size={40} />
                        </div>
                     </div>
  
                     {/* Floating Nodes */}
                     <div className="absolute top-4 left-4 p-2 bg-gray-800 rounded text-[10px] text-green-400 font-mono animate-bounce delay-100">Optimizing...</div>
                     <div className="absolute bottom-4 right-4 p-2 bg-gray-800 rounded text-[10px] text-blue-400 font-mono animate-bounce delay-700">Building UI...</div>
  
                     {/* Generated Project Popup */}
                     {generatedProject && (
                        <div className="absolute inset-0 bg-gray-900/90 flex items-center justify-center animate-in zoom-in duration-300">
                           <div className="text-center">
                              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2 text-white shadow-lg">
                                 <CheckCircle2 size={24} />
                              </div>
                              <h4 className="font-bold text-white mb-1">تم إنشاء مشروع جديد</h4>
                              <p className="text-xs text-gray-400 mb-2">{generatedProject.name}</p>
                              <div className="flex gap-2 justify-center text-[10px] font-mono">
                                 <span className="bg-gray-800 px-2 py-1 rounded text-yellow-400">Score: {generatedProject.score}</span>
                                 <span className="bg-gray-800 px-2 py-1 rounded text-blue-400">Traffic: {generatedProject.traffic}</span>
                              </div>
                           </div>
                        </div>
                     )}
                  </div>
  
                  {/* Terminal Logs */}
                  <div className="bg-black rounded-xl p-4 font-mono text-xs h-32 overflow-hidden flex flex-col justify-end border border-gray-800">
                    {logs.map((log, i) => (
                      <div key={i} className="mb-1 flex gap-2 animate-in fade-in slide-in-from-left-2">
                         <span className="text-green-500 opacity-50">{`>`}</span>
                         <span className={i === logs.length - 1 ? 'text-white font-bold' : 'text-gray-500'}>{log}</span>
                      </div>
                    ))}
                    <div className="flex gap-2 mt-1">
                        <span className="text-green-500 animate-pulse">{`_`}</span>
                    </div>
                  </div>
  
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    );
  };

  const DashboardHome = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-gray-50 rounded-xl text-primary">
                  <stat.icon size={24} />
                </div>
                <span className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${stat.isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                  {stat.change}
                  {stat.isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                </span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Area */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold text-gray-900 text-lg">تحليل الإيرادات</h3>
              <p className="text-sm text-gray-500">مقارنة بالأشهر الستة الماضية</p>
            </div>
            <button className="text-sm font-bold text-primary bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
              تحميل التقرير
            </button>
          </div>
          <div className="h-64 flex items-end justify-between gap-4 pt-4 px-2">
              {[40, 65, 45, 80, 55, 90, 70, 60, 95, 85, 60, 75].map((h, i) => (
                <div key={i} className="w-full bg-gray-50 rounded-t-lg relative group">
                  <div 
                    className="absolute bottom-0 w-full bg-primary rounded-t-lg transition-all duration-1000 group-hover:bg-secondary"
                    style={{ height: `${h}%` }}
                  ></div>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {h}k
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-gray-400 font-bold uppercase">
              <span>يناير</span><span>فبراير</span><span>مارس</span><span>أبريل</span><span>مايو</span><span>يونيو</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
            <div className="bg-primary text-white p-6 rounded-2xl shadow-lg shadow-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-4">إجراء سريع</h3>
                <div className="grid grid-cols-2 gap-3">
                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-xl flex flex-col items-center gap-2 transition-colors">
                      <Plus size={20} />
                      <span className="text-xs font-bold">مشروع جديد</span>
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-xl flex flex-col items-center gap-2 transition-colors">
                      <Users size={20} />
                      <span className="text-xs font-bold">إضافة عميل</span>
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-xl flex flex-col items-center gap-2 transition-colors">
                      <FileText size={20} />
                      <span className="text-xs font-bold">فاتورة</span>
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-xl flex flex-col items-center gap-2 transition-colors">
                      <TrendingUp size={20} />
                      <span className="text-xs font-bold">تحليل</span>
                    </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">آخر النشاطات</h3>
              <div className="space-y-4">
                {[1,2,3].map((_, i) => (
                  <div key={i} className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0 text-xs font-bold">AH</div>
                      <div>
                        <p className="text-sm text-gray-800 font-medium leading-tight">قام <span className="font-bold">أحمد</span> بتحديث حالة مشروع <span className="text-primary">متجر سحاب</span></p>
                        <p className="text-xs text-gray-400 mt-1 flex items-center gap-1"><Clock size={10} /> منذ ساعتين</p>
                      </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-900 text-lg">المشاريع الحديثة</h3>
            <button onClick={() => setActiveSection('projects')} className="text-primary text-sm font-bold hover:underline">عرض الكل</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
                <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold">
                  <tr>
                      <th className="px-6 py-4 text-right">المشروع</th>
                      <th className="px-6 py-4 text-right">العميل</th>
                      <th className="px-6 py-4 text-right">الحالة</th>
                      <th className="px-6 py-4 text-right">الإنجاز</th>
                      <th className="px-6 py-4 text-right">آخر تحديث</th>
                      <th className="px-6 py-4 text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {recentProjects.map((project, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4"><div className="font-bold text-gray-900">{project.name}</div></td>
                        <td className="px-6 py-4 text-sm text-gray-500">{project.client}</td>
                        <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              project.status === 'مكتمل' ? 'bg-green-100 text-green-700' :
                              project.status === 'جاري العمل' ? 'bg-blue-100 text-blue-700' :
                              project.status === 'قيد المراجعة' ? 'bg-orange-100 text-orange-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>{project.status}</span>
                        </td>
                        <td className="px-6 py-4 w-48">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                  <div className="h-full bg-primary rounded-full" style={{width: `${project.progress}%`}}></div>
                              </div>
                              <span className="text-xs font-bold text-gray-600">{project.progress}%</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-400">{project.date}</td>
                        <td className="px-6 py-4 text-right">
                            <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={18} /></button>
                        </td>
                      </tr>
                  ))}
                </tbody>
            </table>
          </div>
      </div>
    </div>
  );

  const ProjectsView = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
         <div>
            <h2 className="text-2xl font-bold text-gray-900">إدارة المشاريع</h2>
            <p className="text-gray-500">تتبع سير العمل والمهام</p>
         </div>
         <div className="flex gap-3">
             <button className="bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-gray-50">
                <Filter size={16} /> تصفية
             </button>
             <button className="bg-primary text-white px-6 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-blue-600">
                <Plus size={18} /> مشروع جديد
             </button>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {['قيد التنفيذ', 'مراجعة', 'مكتمل'].map((status, i) => (
           <div key={i} className="bg-gray-100/50 p-4 rounded-2xl h-full">
             <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-600 flex items-center gap-2">
                   <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-orange-500' : 'bg-green-500'}`}></div>
                   {status}
                </h3>
                <span className="bg-white px-2 py-0.5 rounded-lg text-xs font-bold text-gray-400 shadow-sm">3</span>
             </div>
             <div className="space-y-3">
                {[1,2,3].map(j => (
                   <div key={j} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all group">
                      <div className="flex justify-between mb-3">
                         <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${j%2===0 ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'}`}>
                           {j%2===0 ? 'تطبيق جوال' : 'تطوير ويب'}
                         </span>
                         <button className="text-gray-300 hover:text-gray-600"><MoreHorizontal size={16} /></button>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors">مشروع {status} {j}</h4>
                      <p className="text-xs text-gray-400 mb-4 line-clamp-2">تطوير واجهة المستخدم وربط واجهة برمجة التطبيقات...</p>
                      
                      <div className="flex items-center justify-between border-t border-gray-50 pt-3">
                         <div className="flex -space-x-2 space-x-reverse">
                             {[1,2,3].slice(0, j).map(u => (
                                <img key={u} src={`https://i.pravatar.cc/100?img=${u+i*5}`} className="w-6 h-6 rounded-full border-2 border-white" alt="member" />
                             ))}
                         </div>
                         <div className="flex items-center gap-3 text-gray-400">
                             <span className="flex items-center gap-1 text-xs"><Clock size={12} /> 2 يوم</span>
                             <span className="flex items-center gap-1 text-xs"><CheckCircle2 size={12} /> 5/8</span>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
           </div>
         ))}
      </div>
    </div>
  );

  const ClientsView = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
       <div className="flex justify-between items-center">
         <h2 className="text-2xl font-bold text-gray-900">قائمة العملاء</h2>
         <button className="bg-primary text-white px-6 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
            <Plus size={18} /> إضافة عميل
         </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
         {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group">
               <div className="relative w-20 h-20 mx-auto mb-4">
                  <img src={`https://i.pravatar.cc/150?img=${i+10}`} className="w-full h-full rounded-full object-cover border-4 border-gray-50 group-hover:border-blue-50 transition-colors" alt="client" />
                  <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
               </div>
               <h3 className="font-bold text-gray-900 text-lg mb-1">محمد عبدالله</h3>
               <p className="text-xs text-gray-500 mb-4">المدير التنفيذي - شركة الأفق</p>
               
               <div className="flex justify-center gap-2 mb-6">
                  <button className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"><Mail size={16} /></button>
                  <button className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-600 hover:text-white transition-colors"><Phone size={16} /></button>
               </div>

               <div className="grid grid-cols-2 gap-2 border-t border-gray-50 pt-4">
                  <div className="text-center">
                     <div className="text-xs text-gray-400 mb-1">المشاريع</div>
                     <div className="font-bold text-gray-800">3</div>
                  </div>
                  <div className="text-center border-r border-gray-50">
                     <div className="text-xs text-gray-400 mb-1">المدفوعات</div>
                     <div className="font-bold text-gray-800">$12k</div>
                  </div>
               </div>
            </div>
         ))}
      </div>
    </div>
  );

  const FinanceView = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
             <p className="text-gray-400 text-sm mb-2">الرصيد الحالي</p>
             <h3 className="text-4xl font-bold mb-8">245,500 <span className="text-lg text-gray-400 font-normal">ر.س</span></h3>
             <div className="flex gap-4">
                <button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-md py-2 rounded-xl text-sm font-bold transition-colors">سحب</button>
                <button className="flex-1 bg-white text-gray-900 py-2 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors">إيداع</button>
             </div>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-center">
             <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-50 text-green-600 rounded-lg"><ArrowUpRight size={20} /></div>
                <span className="text-sm font-bold text-gray-500">الدخل (شهري)</span>
             </div>
             <h3 className="text-2xl font-bold text-gray-900">85,200 ر.س</h3>
             <p className="text-xs text-green-600 mt-2 font-bold">+12% مقارنة بالشهر الماضي</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-center">
             <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-red-50 text-red-600 rounded-lg"><ArrowDownRight size={20} /></div>
                <span className="text-sm font-bold text-gray-500">المصروفات (شهري)</span>
             </div>
             <h3 className="text-2xl font-bold text-gray-900">12,450 ر.س</h3>
             <p className="text-xs text-red-600 mt-2 font-bold">+5% مقارنة بالشهر الماضي</p>
          </div>
       </div>

       <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
             <h3 className="font-bold text-gray-900">سجل المعاملات</h3>
             <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary"><Download size={16} /> تصدير</button>
          </div>
          <table className="w-full">
             <thead className="bg-gray-50 text-gray-500 text-xs font-bold uppercase">
                <tr>
                   <th className="px-6 py-4 text-right">رقم الفاتورة</th>
                   <th className="px-6 py-4 text-right">العميل</th>
                   <th className="px-6 py-4 text-right">التاريخ</th>
                   <th className="px-6 py-4 text-right">المبلغ</th>
                   <th className="px-6 py-4 text-right">الحالة</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-gray-50">
                {[1,2,3,4,5].map(i => (
                   <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-mono font-bold text-gray-800">#INV-2024-{100+i}</td>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900">شركة التقنية الحديثة</td>
                      <td className="px-6 py-4 text-sm text-gray-500">2{i} مارس 2024</td>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900">{i * 1500 + 500} ر.س</td>
                      <td className="px-6 py-4">
                         <span className={`px-3 py-1 rounded-full text-xs font-bold ${i === 2 ? 'bg-orange-50 text-orange-600' : 'bg-green-50 text-green-600'}`}>
                            {i === 2 ? 'معلق' : 'مدفوع'}
                         </span>
                      </td>
                   </tr>
                ))}
             </tbody>
          </table>
       </div>
    </div>
  );

  const TeamView = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
       <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">فريق العمل</h2>
          <button className="bg-primary text-white px-6 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
             <Plus size={18} /> إضافة عضو
          </button>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {name: 'أحمد المدير', role: 'مدير النظام', status: 'online'},
            {name: 'سارة المصممة', role: 'UI/UX Designer', status: 'online'},
            {name: 'خالد المطور', role: 'Backend Dev', status: 'offline'},
            {name: 'نورة المبيعات', role: 'Sales Manager', status: 'online'},
            {name: 'فهد التقني', role: 'Frontend Dev', status: 'offline'},
            {name: 'ليلى المحتوى', role: 'Content Writer', status: 'online'},
          ].map((member, i) => (
             <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between hover:border-blue-100 transition-colors">
                <div className="flex items-center gap-4">
                   <div className="relative">
                      <img src={`https://i.pravatar.cc/150?img=${i+20}`} className="w-12 h-12 rounded-full object-cover" alt="member" />
                      <div className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full ${member.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-900">{member.name}</h4>
                      <p className="text-xs text-gray-500">{member.role}</p>
                   </div>
                </div>
                <div className="flex gap-2">
                   <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${member.status === 'online' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                      {member.status}
                   </span>
                   <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
                </div>
             </div>
          ))}
       </div>
    </div>
  );

  const ReportsView = () => (
     <div className="space-y-6 animate-in fade-in duration-500">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">التقارير والتحليلات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><PieChart size={18} /> توزيع المشاريع</h3>
              <div className="flex items-center justify-center h-48 gap-4">
                 <div className="w-32 h-32 rounded-full border-[16px] border-primary border-r-secondary border-b-orange-400 border-l-green-400"></div>
                 <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-primary rounded-full"></div> تطوير ويب (40%)</div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-secondary rounded-full"></div> تطبيقات (25%)</div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-orange-400 rounded-full"></div> متاجر (20%)</div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-400 rounded-full"></div> تصميم (15%)</div>
                 </div>
              </div>
           </div>
           <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><TrendingUp size={18} /> معدل النمو</h3>
              <div className="h-48 flex items-end gap-2">
                 {[20,30,25,40,35,50,45,60,55,70].map((h, i) => (
                    <div key={i} className="flex-1 bg-blue-50 hover:bg-primary transition-colors rounded-t-lg relative group" style={{height: `${h}%`}}>
                       <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {h}%
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
     </div>
  );

  const SettingsView = () => (
     <div className="max-w-3xl space-y-8 animate-in fade-in duration-500">
        <h2 className="text-2xl font-bold text-gray-900">إعدادات النظام</h2>
        
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8">
           <div className="flex items-start gap-6 pb-8 border-b border-gray-100">
              <div className="w-20 h-20 rounded-full bg-gray-100 relative overflow-hidden group cursor-pointer">
                 <img src="https://i.pravatar.cc/150?img=11" className="w-full h-full object-cover" alt="profile" />
                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-xs font-bold">تغيير</span>
                 </div>
              </div>
              <div>
                 <h3 className="text-lg font-bold text-gray-900">الملف الشخصي</h3>
                 <p className="text-sm text-gray-500 mb-4">قم بتحديث معلوماتك الشخصية وصورتك</p>
                 <div className="flex gap-4">
                    <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-blue-600">حفظ التغييرات</button>
                    <button className="px-4 py-2 bg-gray-50 text-gray-600 text-xs font-bold rounded-lg hover:bg-gray-100">إلغاء</button>
                 </div>
              </div>
           </div>

           <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">الاسم الأول</label>
                    <input type="text" defaultValue="أحمد" className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-blue-50 outline-none text-sm" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">الاسم الأخير</label>
                    <input type="text" defaultValue="المدير" className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-blue-50 outline-none text-sm" />
                 </div>
              </div>
              <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">البريد الإلكتروني</label>
                  <input type="email" defaultValue="maeen.mohammedaldeiry@gmail.com" className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-blue-50 outline-none text-sm" dir="ltr" />
              </div>
           </div>

           <div className="pt-6 border-t border-gray-100 space-y-4">
               <h3 className="font-bold text-gray-900">التنبيهات</h3>
               {[
                  'استلام رسائل بريد إلكتروني عند تحديث المشاريع',
                  'إشعارات سطح المكتب عند استلام رسائل جديدة',
                  'التقرير الأسبوعي التلقائي'
               ].map((setting, i) => (
                  <div key={i} className="flex items-center justify-between">
                     <span className="text-sm text-gray-600">{setting}</span>
                     <div className={`w-10 h-6 rounded-full p-1 cursor-pointer transition-colors ${i === 0 ? 'bg-primary' : 'bg-gray-200'}`}>
                        <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${i === 0 ? '-translate-x-4' : ''}`}></div>
                     </div>
                  </div>
               ))}
           </div>
        </div>
     </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans" dir="rtl">
      
      {/* Desktop Sidebar (Hidden on Mobile) */}
      <aside 
        className={`hidden lg:flex fixed inset-y-0 right-0 z-50 bg-neutral text-white transition-all duration-300 ease-in-out 
          ${isCollapsed ? 'lg:w-24' : 'lg:w-72'}
          flex-col shadow-2xl lg:shadow-none
        `}
      >
        <div className={`flex items-center justify-between p-6 border-b border-gray-800 ${isCollapsed ? 'lg:justify-center' : ''}`}>
          {!isCollapsed ? (
             <Link to="/" className="text-2xl font-bold tracking-tight flex items-center gap-2">
                <div className="bg-primary p-1.5 rounded-lg">
                    <LayoutDashboard size={20} className="text-white" />
                </div>
                <span className="animate-in fade-in duration-300">معين<span className="text-primary">.</span></span>
             </Link>
          ) : (
             <div className="bg-primary p-2 rounded-xl animate-in zoom-in duration-300">
                <LayoutDashboard size={24} className="text-white" />
             </div>
          )}

          {/* Desktop Toggle */}
          <button onClick={() => setIsCollapsed(!isCollapsed)} className="hidden lg:block text-gray-400 hover:text-white transition-colors">
              {isCollapsed ? <PanelLeftClose size={20} className="rotate-180" /> : <PanelRightClose size={20} />} 
          </button>
        </div>

        <nav className="p-4 space-y-2 flex-1 overflow-y-auto scrollbar-hide">
           {menuItems.map(item => (
              <button 
                key={item.id}
                onClick={() => { setActiveSection(item.id); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all relative group
                    ${activeSection === item.id 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }
                    ${isCollapsed ? 'justify-center px-0' : ''}
                `}
              >
                 <item.icon size={22} className={`${activeSection === item.id ? 'animate-pulse' : ''}`} />
                 
                 {!isCollapsed && <span className="font-medium whitespace-nowrap">{item.label}</span>}

                 {/* Tooltip for collapsed state */}
                 {isCollapsed && (
                    <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 bg-gray-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-xl border border-gray-700">
                        {item.label}
                        <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                    </div>
                 )}
              </button>
           ))}
        </nav>

        <div className={`p-4 border-t border-gray-800 ${isCollapsed ? 'flex justify-center' : ''}`}>
           <Link 
             to="/" 
             className={`flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors w-full ${isCollapsed ? 'justify-center px-0' : ''}`}
             title={isCollapsed ? "تسجيل الخروج" : ""}
           >
              <LogOut size={22} />
              {!isCollapsed && <span className="font-bold">تسجيل الخروج</span>}
           </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main 
        className={`flex-1 flex flex-col min-w-0 overflow-hidden transition-all duration-300 ease-in-out ${
           isCollapsed ? 'lg:mr-24' : 'lg:mr-72'
        }`}
      >
        
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 h-20 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-gray-800">
              {activeSection === 'dashboard' ? 'لوحة القيادة' : 
               activeSection === 'projects' ? 'إدارة المشاريع' :
               activeSection === 'ai-lab' ? 'المختبر الذكي' :
               activeSection === 'clients' ? 'العملاء' :
               activeSection === 'finance' ? 'الإدارة المالية' :
               activeSection === 'team' ? 'فريق العمل' :
               activeSection === 'reports' ? 'التقارير' : 'الإعدادات'}
            </h2>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden md:flex relative group">
              <input 
                type="text" 
                placeholder="بحث في النظام..." 
                className="w-64 pl-4 pr-10 py-2.5 rounded-full bg-gray-100 border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm group-hover:bg-white group-hover:shadow-sm"
              />
              <Search size={18} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <Bell size={22} />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
            </button>

            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="text-left hidden md:block">
                <p className="text-sm font-bold text-gray-800">أحمد المدير</p>
                <p className="text-xs text-gray-500">مسؤول النظام</p>
              </div>
              <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-10 h-10 rounded-full border-2 border-gray-100 cursor-pointer hover:ring-2 hover:ring-primary hover:ring-offset-2 transition-all" />
              
              <Link 
                to="/" 
                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors ml-2"
                title="تسجيل الخروج"
              >
                  <LogOut size={20} />
              </Link>
            </div>
          </div>
        </header>

        {/* Dynamic Content Area */}
        <div className="flex-1 overflow-auto p-6 lg:p-10 pb-24 lg:pb-10 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
          {activeSection === 'dashboard' && <DashboardHome />}
          {activeSection === 'projects' && <ProjectsView />}
          {activeSection === 'ai-lab' && <AIEngineView />}
          {activeSection === 'clients' && <ClientsView />}
          {activeSection === 'finance' && <FinanceView />}
          {activeSection === 'team' && <TeamView />}
          {activeSection === 'reports' && <ReportsView />}
          {activeSection === 'settings' && <SettingsView />}
        </div>
      </main>

      {/* Mobile Bottom Navigation Bar (Fixed) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 pb-safe">
          <div className="flex items-center justify-between p-2 overflow-x-auto gap-4 px-4" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            {menuItems.map(item => (
              <button 
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex flex-col items-center gap-1 min-w-[3.5rem] p-2 rounded-xl transition-all duration-300 ${
                  activeSection === item.id ? 'text-primary scale-105' : 'text-gray-400 hover:bg-gray-50'
                }`}
              >
                <item.icon size={24} className={activeSection === item.id ? 'fill-primary/10 stroke-[2.5px]' : ''} />
                <span className={`text-[10px] font-bold ${activeSection === item.id ? 'text-primary' : 'text-gray-500'}`}>{item.label}</span>
              </button>
            ))}
             <Link 
              to="/" 
              className="flex flex-col items-center gap-1 min-w-[3.5rem] p-2 rounded-xl text-red-400 hover:bg-red-50 transition-all"
            >
              <LogOut size={24} />
              <span className="text-[10px] font-bold">خروج</span>
            </Link>
          </div>
      </nav>
    </div>
  );
};

export default Dashboard;