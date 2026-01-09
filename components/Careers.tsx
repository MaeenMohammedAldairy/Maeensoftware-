import React from 'react';
import { JobPosition } from '../types';
import { Briefcase, MapPin, Clock, ArrowLeft, Coffee, Zap, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const jobs: JobPosition[] = [
  {
    id: '1',
    title: 'Senior React Developer',
    type: 'full-time',
    department: 'Engineering',
    location: 'صنعاء (هجين)',
    description: 'نبحث عن مطور خبير في React و Next.js للمساعدة في بناء منتجات SaaS عالية الأداء.'
  },
  {
    id: '2',
    title: 'UI/UX Designer',
    type: 'full-time',
    department: 'Design',
    location: 'صنعاء',
    description: 'مصمم مبدع لديه شغف بتبسيط الواجهات المعقدة وخلق تجارب مستخدم استثنائية.'
  },
  {
    id: '3',
    title: 'Sales Specialist',
    type: 'full-time',
    department: 'Sales',
    location: 'عن بعد',
    description: 'مسؤول مبيعات للعمل على تسويق حلولنا البرمجية للشركات الناشئة والمتوسطة.'
  }
];

const perks = [
  { icon: <Clock size={24} />, title: 'ساعات عمل مرنة', desc: 'نركز على النتائج، لا الساعات.' },
  { icon: <MapPin size={24} />, title: 'عمل عن بعد', desc: 'خيارات عمل هجينة أو عن بعد بالكامل.' },
  { icon: <Zap size={24} />, title: 'تطور مهني', desc: 'ميزانية سنوية للكورسات والمؤتمرات.' },
  { icon: <Coffee size={24} />, title: 'بيئة مريحة', desc: 'مكتب عصري ومشروبات وسناكس مجانية.' },
];

const Careers: React.FC = () => {
  return (
    <div className="bg-background min-h-screen">
       {/* Hero Section */}
       <section className="relative py-24 bg-neutral text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-medium mb-6">
             انضم إلى النخبة
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            ابنِ مسيرتك المهنية مع <br/> <span className="text-primary">فريق يصنع الفارق</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-10">
             نبحث دائماً عن الشغوفين، المبدعين، وأصحاب الرؤى. إذا كنت تحب التحديات التقنية وتريد ترك بصمة، فمكانك معنا.
          </p>
          <a href="#jobs" className="bg-white text-neutral px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            شاهد الوظائف المتاحة <ArrowLeft size={20} />
          </a>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {perks.map((perk, i) => (
               <div key={i} className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
                 <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-4">
                   {perk.icon}
                 </div>
                 <h3 className="font-bold text-lg mb-2">{perk.title}</h3>
                 <p className="text-gray-500 text-sm">{perk.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-20 bg-gray-50" id="jobs">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral mb-4">الوظائف الشاغرة</h2>
            <p className="text-gray-600">هل تجد نفسك في أحد هذه الأدوار؟ قدّم الآن.</p>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-primary hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group cursor-pointer">
                <div>
                  <h3 className="text-xl font-bold text-neutral mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><Briefcase size={14} /> {job.department}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{job.description}</p>
                </div>
                <button className="shrink-0 px-6 py-3 rounded-xl bg-gray-50 text-primary font-bold group-hover:bg-primary group-hover:text-white transition-all w-full md:w-auto">
                  تقديم طلب
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center bg-blue-50 p-8 rounded-3xl border border-blue-100">
             <h3 className="text-xl font-bold text-neutral mb-2">لم تجد الوظيفة المناسبة؟</h3>
             <p className="text-gray-600 mb-6">أرسل سيرتك الذاتية وسنتواصل معك عند توفر شاغر يناسب مهاراتك.</p>
             <a href="mailto:maeen.mohammedaldeiry@gmail.com" className="text-primary font-bold hover:underline flex items-center justify-center gap-2 break-all">
               maeen.mohammedaldeiry@gmail.com <ArrowLeft size={16} />
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;