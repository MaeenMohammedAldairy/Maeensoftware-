import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, ShieldCheck, Zap, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
      {/* Background Image Layer */}
      <div className="absolute inset-0 -z-20 h-full w-full">
         <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
            alt="Office Background" 
            className="w-full h-full object-cover opacity-[0.03]"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white/90"></div>
      </div>

      {/* Modern Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-accent/10 opacity-30 blur-[100px]"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-right space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-bold animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              الخيار الأول للشركات الناشئة
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-neutral leading-[1.15] tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both delay-100">
              حلول برمجية <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-secondary">
                تسبق المستقبل
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both delay-200">
              نصمم ونطور منتجات رقمية استثنائية تجمع بين جمال التصميم وقوة الأداء. دعنا نساعدك في تحويل فكرتك إلى قصة نجاح رقمية.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both delay-300">
              <Link 
                to="/studio" 
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-[#FFB347] hover:from-[#E66040] hover:to-[#E6A035] text-white text-lg font-bold px-8 py-4 rounded-2xl shadow-xl shadow-orange-500/20 transition-all hover:scale-105 active:scale-95"
              >
                ابدأ مشروعك
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/portfolio" 
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-neutral border border-gray-200 text-lg font-bold px-8 py-4 rounded-2xl transition-all hover:shadow-lg"
              >
                <Play size={18} fill="currentColor" className="text-gray-400" />
                 شاهد أعمالنا
              </Link>
            </div>

            {/* Stats */}
            <div className="pt-8 border-t border-gray-100 flex items-center justify-center lg:justify-start gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both delay-500">
              <div className="text-center lg:text-right">
                <p className="text-3xl font-bold text-neutral font-sans">+120</p>
                <p className="text-sm text-gray-500">مشروع ناجح</p>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="text-center lg:text-right">
                <p className="text-3xl font-bold text-neutral font-sans">98%</p>
                <p className="text-sm text-gray-500">رضا العملاء</p>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="text-center lg:text-right">
                <p className="text-3xl font-bold text-neutral font-sans">+5</p>
                <p className="text-sm text-gray-500">سنوات خبرة</p>
              </div>
            </div>
          </div>

          {/* Visual Content (Left Side) */}
          <div className="lg:w-1/2 relative mt-10 lg:mt-0 w-full max-w-lg lg:max-w-none mx-auto animate-in fade-in zoom-in duration-1000 delay-300">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50 bg-white">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
                alt="Dashboard UI" 
                width="2670"
                height="1500"
                loading="eager" 
                className="w-full h-auto object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Card 1: Security */}
            <div className="absolute -top-6 -right-6 md:-right-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2.5 rounded-xl text-green-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">الأمان والحماية</p>
                  <p className="text-sm font-bold text-neutral">محمي بالكامل</p>
                </div>
              </div>
            </div>

            {/* Floating Card 2: Performance */}
            <div className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50">
               <div className="flex items-center gap-3 mb-2">
                <div className="bg-orange-100 p-2 rounded-lg text-accent">
                  <Zap size={20} />
                </div>
                <span className="text-sm font-bold text-gray-800">الأداء</span>
               </div>
               <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                 <div className="h-full bg-accent w-[92%]"></div>
               </div>
               <div className="flex justify-between mt-1">
                 <span className="text-[10px] text-gray-400">السرعة</span>
                 <span className="text-[10px] font-bold text-neutral">98/100</span>
               </div>
            </div>

             {/* Floating Card 3: Users */}
             <div className="absolute -bottom-8 -right-4 md:right-12 bg-neutral text-white p-4 rounded-2xl shadow-2xl flex items-center gap-4">
                <div className="flex -space-x-3 space-x-reverse">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-neutral" alt="user" loading="lazy" />
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400 text-xs">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                  </div>
                  <p className="text-xs text-gray-300 mt-0.5">عملاء سعداء</p>
                </div>
             </div>

            {/* Decorative Dots */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 opacity-20" style={{ backgroundImage: 'radial-gradient(#0B63FF 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;