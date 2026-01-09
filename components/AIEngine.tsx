import React, { useState, useEffect } from 'react';
import { Cpu, Zap, Activity, GitBranch, Code2, Database, Globe, Lock, CheckCircle2, RefreshCw, Terminal, Sparkles } from 'lucide-react';

const AIEngine: React.FC = () => {
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
    <section className="py-24 bg-neutral relative overflow-hidden text-white" id="ai-lab">
      {/* Matrix / Cyber Background */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(32, 255, 77, .1) 25%, rgba(32, 255, 77, .1) 26%, transparent 27%, transparent 74%, rgba(32, 255, 77, .1) 75%, rgba(32, 255, 77, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(32, 255, 77, .1) 25%, rgba(32, 255, 77, .1) 26%, transparent 27%, transparent 74%, rgba(32, 255, 77, .1) 75%, rgba(32, 255, 77, .1) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold mb-6 animate-pulse">
              <Sparkles size={14} />
              النظام يعمل بشكل تلقائي
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
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
    </section>
  );
};

export default AIEngine;